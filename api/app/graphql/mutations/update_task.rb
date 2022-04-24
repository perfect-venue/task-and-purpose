module Mutations
  class UpdateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType
    argument :name, String, required: true
    argument :complete, Boolean, required: true
    argument :due_date, String, required: false
    argument :user_id, Integer, required: false

    def resolve(task:, name:, complete:, due_date:, user_id:)
      task.update!(name: name, complete: complete, due_date: due_date, user_id: user_id)
      { task: task }
    end
  end
end
