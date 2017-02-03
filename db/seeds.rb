# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
50.times do
    User.create(
        username: Faker::GameOfThrones.character,
        password_digest: Faker::Internet.password,
        email: Faker::Internet.email)
end

# Faker::Lorem.sentence(3, true)
# Faker::Lorem.paragraph(2)

# username: string, email: string, password_digest: string

# fname: Faker::Name.first_name,
# lname: Faker::Name.last_name
