module Mutations
  class UpdateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :task_id, ID, required: true, loads: Types::TaskType
    argument :name, String, required: true
    argument :owner, String, required: false
    argument :complete, Boolean, required: true

    def resolve(task:, name:, owner:, complete:)
      task.update!(name: name, owner: owner, complete: complete)
      { task: task }
    end
  end
end
