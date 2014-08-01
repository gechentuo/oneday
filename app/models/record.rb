class Record < ActiveRecord::Base
	has_attached_file :img, :styles => {:medium => "300*300>", :thumb=> "100*100"}
	validates_attachment_content_type :img, :content_type => /\Aimage\/.*\Z/

end
