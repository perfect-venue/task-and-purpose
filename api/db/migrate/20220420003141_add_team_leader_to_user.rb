class AddTeamLeaderToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :team_leader, :boolean
  end
end
