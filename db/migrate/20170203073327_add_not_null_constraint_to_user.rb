



class AddNotNullConstraintToUser < ActiveRecord::Migration
  def change
    change_column :users, :fname, :string, null: false
    change_column :users, :lname, :string, null: false
  end
end
