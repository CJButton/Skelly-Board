


class AddNoNullToUsernameComments < ActiveRecord::Migration
  def change
    change_column :comments, :username, :string, null: false
  end
end
