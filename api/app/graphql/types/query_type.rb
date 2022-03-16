module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, [ Types::TaskType ], null: false, description: "A List of Tasks"

    def tasks
      Task.all
    end
  end
end
