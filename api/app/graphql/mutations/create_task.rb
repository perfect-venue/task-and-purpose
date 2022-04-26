module Mutations
  class CreateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :name, String, required: true
    argument  :user_id, Integer, required: false

    def resolve(name:, user_id:)
      task = Task.create!(name: name, user_id: user_id)
      { task: task }
    end
  end
end
