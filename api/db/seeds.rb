# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "luke@perfectvenue.com", name: "Luke Hutchinson", password: "Test!234", password_confirmation: "Test!234")
User.create!(email: "matt@perfectvenue.com", name: "Matt Walter", password: "Test!234", password_confirmation: "Test!234")

Task.create!(name: 'Foo', complete: false, user_id: User.first.id)
Task.create!(name: 'Bar', complete: false, user_id: User.first.id)

