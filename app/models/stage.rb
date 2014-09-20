class Stage < ActiveRecord::Base
  validates_presence_of :name

  belongs_to :project
  has_and_belongs_to_many :users
end