Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  mount LetterOpenerWeb::Engine, at: "/letter_opener"
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
end
