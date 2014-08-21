class MainPageController < ApplicationController
	def initContent
		@days = Day.all
		@day_months = @days.group_by{|d| d.time.beginning_of_month}
		@tasks = Day.order(time: :desc).first.tasks.order(created_at: :desc)
		if(!@tasks.first.nil?)
			@records = @tasks.first.records.order(created_at: :asc)
		else
			@records = []
		end

	end


	def getTaskByDate
		@tasks = Day.where(time: params[:date]).first.tasks
		respond_to do |format|
			format.js 
		end
	end
 	 
end
