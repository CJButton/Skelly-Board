



require 'rails_helper'
require 'spec_helper'

RSpec.describe User, :type => :model do
  it "is valid with valid attributes"
  it "is not valid without a username"
  it "is not valid without a password"
end
