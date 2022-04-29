module Types
  class BaseObject < GraphQL::Schema::Object
    edge_type_class(Types::BaseEdge)
    connection_type_class(Types::BaseConnection)
    field_class Types::BaseField

    def self.auto_field(*field_names)
      field_names.each do |field_name|
        raise("#{graphql_name} is not a model :(") unless ActiveRecord::Base.in?(klass.ancestors)

        klass = graphql_name.constantize
        column_metadata = klass.column_for_attribute(field_name)
        field_type = field_type_from_column_metadata(column_metadata)

        field field_name, field_type, null: column_metadata.null
      end
    end

    private

    def self.field_type_from_column_metadata(column_metadata)
      return ID if column_metadata.name == 'id'

      case column_metadata.type
      when :string, :text
        String
      when :integer
        Integer
      when :float, :decimal
        Float
      when :boolean
        Boolean
      when :date
        GraphQL::Types::ISO8601Date
      when :datetime
        GraphQL::Types::ISO8601DateTime
      else
        raise("Data type #{column_metadata.type} not implemented! Please implement me above.")
      end
    end
  end
end
