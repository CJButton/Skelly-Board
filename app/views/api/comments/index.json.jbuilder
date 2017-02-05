



json.array! @comments do |comment|

  json.id comment.id
  json.username comment.username
  json.title comment.title
  json.body comment.body
  json.time comment.created_at.to_f

end
