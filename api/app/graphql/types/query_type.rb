module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, [ Types::TaskType ], null: false, description: "A List of Tasks"
    field :users, [ Types::UserType ], null: false, description: "A list of task owners / users"

    def tasks
      Task.all
    end

    def users
      User.all
    end
  end
end
