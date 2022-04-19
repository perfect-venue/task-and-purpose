module Mutations
  class UpdateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType
    argument :name, String, required: true
    argument :complete, Boolean, required: true
    argument :user_id, ID, required: true

    def resolve(task:, name:, complete:, user_id:)
      task.update!(name: name, complete: complete, user_id: user_id)
      { task: task }
    end
  end
end
