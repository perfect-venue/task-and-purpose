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

  def secheduleTaskNotifications
    for task in Task.all do
      tomorrow = Time.now + (60 * 60 * 24)
      within_1_day = task.due_date <=> tomorrow
      if within_1_day <= 0
        TaskStatusChangedMailer.with(task_id: task.id).task_completed.deliver_now
      end
    end
  end
end