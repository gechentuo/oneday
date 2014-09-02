class Task < ActiveRecord::Base
	belongs_to :day
	has_many :records
	accepts_nested_attributes_for :records, allow_destroy: true,reject_if: :all_blank
end
