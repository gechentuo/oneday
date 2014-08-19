class Task < ActiveRecord::Base
	belongs_to :day
	has_many :records, :dependent => :destroy
	accepts_nested_attributes_for :records, :allow_destroy => true
end
