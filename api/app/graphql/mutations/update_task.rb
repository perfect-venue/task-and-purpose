module Mutations
  class UpdateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType
    argument :name, String, required: true
    argument :owner, String, required: false
    argument :complete, Boolean, required: true
    argument :due_date, GraphQL::Types::ISO8601DateTime, required: false

    def resolve(task:, name:, due_date:, owner:, complete:)
      task.update!(name: name, owner: owner, complete: complete, due_date: due_date)
      { task: task }
    end
  end
end
