module Types
  class TaskType < Types::BaseObject
    auto_field :id, :name, :complete

    def id
      object.to_global_id.to_s
    end
  end
end
