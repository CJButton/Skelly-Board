


@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title, :body, :user_id
  end
end
