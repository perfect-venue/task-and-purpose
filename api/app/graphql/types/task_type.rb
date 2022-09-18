module Types
  class TaskType < Types::BaseObject
    field :id, ID
    field :name, String
    field :complete, Boolean
    field :owner, String
    field :due_date, GraphQL::Types::ISO8601DateTime

    def id
      object.to_global_id.to_s
    end
  end
end
