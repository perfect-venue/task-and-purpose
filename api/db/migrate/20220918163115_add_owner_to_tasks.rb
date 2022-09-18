class AddOwnerToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :owner, :string
  end
end
