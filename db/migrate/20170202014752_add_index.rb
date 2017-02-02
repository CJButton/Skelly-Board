



class AddIndex < ActiveRecord::Migration
  def change
    add_index :user_follows , :user
    add_index :user_follows , :followed_user
  end
end
