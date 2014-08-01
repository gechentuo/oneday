class MainPageController < ApplicationController
	def initContent
		@days = Day.all
		@day_months = @days.group_by{|d| d.time.beginning_of_month}
		render 'layouts/application'
	end

end
