class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.time :published_at

      t.timestamps
    end
  end
end
