# Preview all emails at http://localhost:3000/rails/mailers/task_status_changed_mailer
class TaskStatusChangedMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/task_status_changed_mailer/task_completed
  def task_completed
    TaskStatusChangedMailer.task_completed
  end

end
