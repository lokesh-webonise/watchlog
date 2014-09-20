class LogFilesController < ApplicationController
  # expose(:log_files) { LogFile.all }

  def index
    # names = LogFile.all.collect {|f| f.name }
    # render json: {names: names}
  end
end
