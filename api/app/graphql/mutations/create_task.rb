module Mutations
  class CreateTask < BaseMutation
    field :task, Types::TaskType, null: false
    field :user_id, ID, null: true
    field :duedate, String, null: true

    argument :name, String, required: true

    def resolve(name:)
      task = Task.create!(name: name)
      { task: task }
    end
  end
end
