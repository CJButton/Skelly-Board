



class Comment < ActiveRecord::Base
  validates :username, presence: true
  validates :body, presence: true

  belongs_to :post

  def self.find_comments(post_id)
    Post.find(post_id).comments
  end

end
