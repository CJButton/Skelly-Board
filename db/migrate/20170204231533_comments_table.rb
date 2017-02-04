


class CommentsTable < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :body, null: false

      t.index [:post_id, :user_id]
      t.timestamps null: false
    end
  end
end
