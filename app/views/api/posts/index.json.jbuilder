



json.array! @posts do |post|

  json.id post.id
  json.username post.username
  json.title post.title
  json.time post.created_at.to_s

end
# json.time post.created_at.to_f
