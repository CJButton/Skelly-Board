


class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end

create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "manga_id",    null: false
    t.integer  "rating",      null: false
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "username"
  end
