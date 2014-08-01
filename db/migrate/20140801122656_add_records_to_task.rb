class AddRecordsToTask < ActiveRecord::Migration
  def change
  	add_reference :records, :task, index: true
  end
end
