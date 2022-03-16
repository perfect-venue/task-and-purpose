module Mutations
  class UpdateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType
    argument :name, String, required: true
    argument :complete, Boolean, required: true

    def resolve(task:, name:, complete:)
      task.update!(name: name, complete: complete)
      { task: task }
    end
  end
end
