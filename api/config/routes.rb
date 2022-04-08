Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
