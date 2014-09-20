class ProjectsController < ApplicationController
  def index
    @users = User.all
  end
end
