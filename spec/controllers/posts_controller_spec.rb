




RSpec.describe Api::PostsController do

    describe "POST create" do
      it "successfully inserts a post" do
        post :create, :post => {username: 'RSpec',
                        title: "title test",
                        user_id: 1,
                        body: "some words to test"}
        response.status.should eql(200)
      end
    end

    describe "POST create" do
      it "returns errors if the post is missing paramaters" do
        post :create, :post => {username: 'RSpec',
                        title: "title test",
                        user_id: nil,
                        body: "some words to test"}
        response.status.should eql(401)
      end
    end

end
