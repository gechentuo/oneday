class AddTasksToDay < ActiveRecord::Migration
  def change
  	add_reference :tasks, :day, index: true
  end
end
