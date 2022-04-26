module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, [ Types::TaskType ], null: false, description: "A List of Tasks"
    field :users, [ Types::UserType ], null: false, description: "A List of Users"

    def tasks
      Task.all.order(:due_date)
    end

    def users
      User.all
    end
  end
end
