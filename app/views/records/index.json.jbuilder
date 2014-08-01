json.array!(@records) do |record|
  json.extract! record, :id, :title, :des
  json.url record_url(record, format: :json)
end
