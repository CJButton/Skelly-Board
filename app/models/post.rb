



class Post < ActiveRecord::Base
  validates :username, presence: true
	validates :title, presence: true
	validates :user_id, presence: true
  validates :body, presence: true

  has_many :comments
end
