class ApiSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # For batch-loading (see https://graphql-ruby.org/dataloader/overview.html)
  use GraphQL::Dataloader

  # GraphQL-Ruby calls this when something goes wrong while running a query:
  def self.type_error(err, context)
    # if err.is_a?(GraphQL::InvalidNullError)
    #   # report to your bug tracker here
    #   return nil
    # end
    super
  end

  # Return a string UUID for `object`
  def self.id_from_object(object, type_definition, query_ctx)
    object.to_global_id.to_s
  end

  # Given a string UUID, find the object
  def self.object_from_id(encoded_id, query_ctx)
    GlobalID::Locator.locate(encoded_id)
  end
end
