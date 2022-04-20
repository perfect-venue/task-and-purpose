module Mutations
  class CreateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :name, String, required: false, default_value: 'New Task'
    argument :complete, Boolean, required: false, default_value: false
    argument :user_id, ID, required: false, default_value: 1
    argument :duedate, GraphQL::Types::ISO8601Date, required: false, default_value: Date.today.next_month

    def resolve(name:, complete:, user_id:, duedate:)
      task = Task.create!(name: name, complete: complete, user_id: user_id, duedate: duedate)
      { task: task }
    end
  end
end
