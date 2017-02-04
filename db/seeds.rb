# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
100.times do
    user = User.create(
        username: Faker::GameOfThrones.character,
        password_digest: Faker::Internet.password,
        email: Faker::Internet.email)

    if user.id != nil && (user.id % 3 ==  0)
      Post.create(
        title: Faker::Lorem.sentence(3, true),
        body: Faker::Lorem.paragraph(2),
        user_id: user.id,
        username: user.username)
    end

end

# Faker::Lorem.sentence(3, true)
# Faker::Lorem.paragraph(2)
