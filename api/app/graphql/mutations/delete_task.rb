module Mutations
  class DeleteTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType

    def resolve(task:)
      task.destroy!
      { task: task }
    end
  end
end
