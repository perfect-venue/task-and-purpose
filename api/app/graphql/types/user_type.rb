# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :full_name, String, null: false
    field :user_tasks, [Types::TaskType], null: false

    def full_name
      # `object` references the user instance
      [object.first_name, object.last_name].compact.join(' ')
    end

    def user_tasks
      @tasks = Task.where(user_id: id)
    end
  end
end
