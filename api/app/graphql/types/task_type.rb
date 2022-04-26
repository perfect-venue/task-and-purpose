module Types
  class TaskType < Types::BaseObject
    field :id, ID
    field :name, String
    field :complete, Boolean
    field :due_date, String
    field :user_id, Integer
    field :user, UserType

    def id
      object.to_global_id.to_s
    end

    def user
      object.user
    end
  end
end
