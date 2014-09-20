class Project < ActiveRecord::Base
  validates_presence_of :name, :template

  has_and_belongs_to_many :users
end