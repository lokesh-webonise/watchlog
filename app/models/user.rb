class User < ActiveRecord::Base
  validates_presence_of :login, :email

  devise :database_authenticatable, :token_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  alias_attribute :encrypted_password, :crypted_password
  alias_attribute :password_salt, :salt

  has_and_belongs_to_many :projects
end