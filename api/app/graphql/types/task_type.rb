module Types
  class TaskType < Types::BaseObject
    field :id, ID
    field :name, String
    field :complete, Boolean
  end
end
