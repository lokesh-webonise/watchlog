class User < ActiveRecord::Base
  validates_presence_of :login, :email
end