json.array!(@days) do |day|
  json.extract! day, :id, :time
  json.url day_url(day, format: :json)
end
