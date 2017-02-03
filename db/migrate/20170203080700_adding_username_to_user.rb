


class AddingUsernameToUser < ActiveRecord::Migration
  def change
    remove_column :users, :fname
    remove_column :users, :lname
    add_column :users, :username, :string
  end
end
