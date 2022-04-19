class TaskMailer < ApplicationMailer
  def duedate_reminder_email(task_id)
    @task = Task.find_by(id: task_id)
    @owner = User.find_by(id: @task.user_id)
    mail(to: @owner.email, subject: "#{@task.name} is due tomorrow!")
  end
end
