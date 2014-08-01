json.array!(@tasks) do |task|
  json.extract! task, :id, :title, :published_at
  json.url task_url(task, format: :json)
end
