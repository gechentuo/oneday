class Task < ActiveRecord::Base
	belongs_to :day
	has_many :records
end
