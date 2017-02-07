


require 'rails_helper'

RSpec.describe Post, :type => :model do

    it "should have many comments" do
      t = Post.reflect_on_association(:comments)
      t.macro.should == :has_many
    end

    it "is valid with valid attributes" do
    expect(Post.new(username: 'RSpec',
                    title: "title test",
                    user_id: 1,
                    body: "some words to test")).to be_valid
    end

    it "is not valid without a title" do
    post = Post.new(username: 'RSpec',
                    title: "",
                    user_id: 1,
                    body: "some words to test")
      expect(post).to_not be_valid
    end

    it "is not valid without a body" do
    post = Post.new(username: 'RSpec',
                    title: "RSpec is great!",
                    user_id: 1,
                    body: "")
      expect(post).to_not be_valid
    end


end
