class NotifyTeamLeaderMailer < ApplicationMailer
  def notify_team_leader(task_id, user_id)
    @task = Task.find_by(id: task_id)
    @owner = User.find_by(id: user_id)
    @team_leader = User.find_by(team_leader: true)

    mail(to: @team_leader.email, subject: "#{@owner.first_name} #{@owner.last_name} has completed task: #{@task.name}")
  end
end
