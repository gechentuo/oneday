# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks


namespace :myrailsapp do 
	desc "automatically add day"
	task add_days: :environment do 
		puts 'add a day'
		Day.create(time: Date.today)
	end
end
