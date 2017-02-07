

require 'rails_helper'

RSpec.describe User, :type => :model do

  it "is valid with valid attributes" do
  expect(User.new(username: 'RSpec Username',
                  password: "123456",
                  email: "RSpec@rspec.com")).to be_valid
  end

  it "is not valid without a username" do
  user = User.new(username: nil,
                  password: "123456",
                  email: "RSpec@rspec.com")
    expect(user).to_not be_valid
  end

  it "is not valid without a password of at least 6 characters in length" do
  expect(User.new(username: 'RSpec',
                  password: "12345",
                  email: "RSpec@rspec.com")).to_not be_valid
  end

end
