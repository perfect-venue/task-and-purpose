module Types
  class TaskType < Types::BaseObject
    field :id, ID
    field :name, String
    field :complete, Boolean
    field :owner, String

    def id
      object.to_global_id.to_s
    end
  end
end
