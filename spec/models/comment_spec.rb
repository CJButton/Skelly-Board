


require 'rails_helper'

RSpec.describe Comment, :type => :model do

    it "should belong to a post" do
      t = Comment.reflect_on_association(:post)
      t.macro.should == :belongs_to
    end

end
