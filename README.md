
# Overview

*Task and Purpose* is a minimal task management application. 

It consists of 3 modules: `Api`, `Web`, and `Native`.
# Api
The api is a Rails application that exposes a GraphQL endpoint at `http://localhost:3001/graphql`
## Creating and Seeding the Database
The database we're using is Sqlite. You can create and seed the database with
```
cd api
bundle exec rails db:setup
```
## Models
`Task` is the only Active Record model in the project. It only has 2 notable fields `name` and `complete`. You can see the database schema at `api/db/schema.rb`.

## GraphQL
GraphQL is implemented with the `graphql` gem. It is the only notable gem in the project, and you can find the documentation [here](https://graphql-ruby.org/).

`Task` is the only type on the graph, and you can find the definition at `api/app/graphql/types/task_type.rb`.

You can see the queries defined on the graph at `api/app/graphql/types/query_type.rb`. The only query implemented is `tasks` which just returns as list of all the tasks in the database.

There are three mutations implemented that you can find in `api/app/graphql/mutations/`. These are create, update, and delete actions for the `Task` model.

There is a [Graphiql](https://github.com/graphql/graphiql/tree/main/packages/graphiql#readme) instance installed at `http://localhost:3001/graphiql`.

## Action Mailer
Action Mailer is the Rails module that allows you to send emails from the backend. If you've used Rails before, you are likely familiar with Action Mailer. If you have not, fear not. You can get up to speed using [this guide](https://guides.rubyonrails.org/action_mailer_basics.html).

You will find an example of a mailer implementation at `api/app/mailers/task_mailer.rb` and its corresponding view at `api/app/view/task_mailer/example_email.html.erb`. Feel free to extend this mailer or create your own. 

The development environment is configured to use [Letter Opener](https://github.com/ryanb/letter_opener) and [Letter Opener Web](https://github.com/fgrehm/letter_opener_web) to simulate sending emails without connecting a real SMTP server. These libraries will allow you to see all the emails you've sent on a virtual inbox by visiting `http://localhost:3001/letter_opener`.

If you'd like to test that out, open a Rails console with the following:
```
cd api
bundle exec rails c
```
Then fire off an email with:
```
TaskMailer.with(task_id: 1).example_email.deliver_now
```
You should be able to see your email at `http://localhost:3001/letter_opener`.


## Starting the server
You can start the application with
```
cd api
bundle exec rails server -p 3001
```
# Web
The web client is a standard React application created with [Create React App](https://create-react-app.dev/).

There are a 2 notable libraries:
- [MUI](https://mui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react)

## Starting the Web Client
You can start the application with
```
cd web
yarn start
```
The web client should be available at `http://localhost:3000`
# Native
The native client is a standard React Native application created with [Create React Native App](https://reactnative.dev/blog/2017/03/13/introducing-create-react-native-app).

There are a 2 notable libraries:
- [React Native Paper](https://reactnativepaper.com/)
- [Apollo Client](https://www.apollographql.com/docs/react)

## Starting the Native Client
You can start the application with
```
cd native
yarn start
```
Follow the instructions on the screen to run the application in your prefered environment (iOS simulator, Android simulator, etc.).
