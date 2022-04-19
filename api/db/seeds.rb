# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


john = User.create!(
  email: "john.doe@example.com",
  first_name: "John",
  last_name: "Doe"
)

jane = User.create!(
  email: "jane.doe@example.com",
  first_name: "Jane",
  last_name: "Doe"
)

Task.create!(
  [
    {
      name: "Martian Chronicles",
      complete: false,
      user: john,
      duedate: Faker::Date.between(from: 2.days.ago, to: Date.today)
    },
    {
      name: "The Martian",
      complete: false,
      user: john,
      duedate: Faker::Date.between(from: 2.days.ago, to: 1.year.from_now)
    },
    {
      name: "Doom",
      complete: false,
      user: jane,
      duedate: Faker::Date.between(from: 2.days.ago, to: Date.today)
    },
    {
      name: "Mars Attacks!",
      complete: true,
      user: jane,
      duedate: Faker::Date.between(from: 2.days.ago, to: 1.year.from_now)
    }
  ]
)
