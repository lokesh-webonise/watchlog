class LogsController < ActionController::Base
  MAX_READ = 1000

  include ActionController::Live
  # expose(:file_name) do
  #   _file = params[:file_name]
  #   _file += ".#{params[:format]}" unless params[:format].blank?
  #   _file
  # end
  def file_name
    _file = params[:id]
    _file += ".#{params[:format]}" unless params[:format].blank?
    _file
  end

  def show
    logger.info "Stream start"
    system("sshfs -p 9902 deploy@test-mtdc.weboapps.com:/var/www/test-mtdc.weboapps.com/shared/log ~/test-mtdc")
    file = LogFile.find_path(file_name).tail
    response.headers['Content-Type'] = 'text/event-stream'
    first_line = true
    file.interval = 1
    file.backward(25)
    file.tail do |l|
      if first_line
        first_line = false
        next
      end
      stream_line l
    end
  rescue IOError => e
    logger.info "Stream closed (IOError)"
  rescue Errno::ECONNRESET => e
    logger.info "Stream closed (Errno)"
  else
    logger.info "Stream closed (Normaly)"
  ensure
    logger.info
    system("sudo fusermount -u ~/test-mtdc")
    file.close if file
    response.stream.close
  end

  def disconnect
    logger.info "disconnecting ..."
    system("sudo fusermount -u ~/test-mtdc")
    response.stream.close
  end

  protected

  def stream_line line
    unless line.blank?
      response.stream.write "event: logs.all\n"
      response.stream.write "data: #{line.to_json}\n\n"
    end
  end
end
