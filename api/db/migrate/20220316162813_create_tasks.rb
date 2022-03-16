class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.boolean :complete, null: false, default: false

      t.timestamps null: false
    end
  end
end
