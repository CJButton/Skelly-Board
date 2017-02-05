



class Comment < ActiveRecord::Base
  validates :username, presence: true
  validates :title, presence: true
  validates :body, presence: true
end
