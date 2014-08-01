class AddImgToRecord < ActiveRecord::Migration
  def change
  	add_attachment :records, :img
  end
end
