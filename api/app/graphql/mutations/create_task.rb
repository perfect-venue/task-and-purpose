module Mutations
  class CreateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :name, String, required: true

    def resolve(name:)
      task = Task.create!(name: name)
      { task: task }
    end
  end
end
