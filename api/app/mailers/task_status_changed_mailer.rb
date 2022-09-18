class TaskStatusChangedMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.task_status_changed_mailer.task_completed.subject
  #
  def task_completed
    @task = Task.find_by(id: params[:task_id])
    @greeting = "Hi"
    mail(to: 'admin@pvclient.com', subject: 'Someone completed a task')
  end
end

# TaskMailer.with(task_id: 1).example_email.deliver_now