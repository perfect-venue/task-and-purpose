class TaskMailer < ApplicationMailer
  def example_email
    @task = Task.find(params[:task_id])
    mail(to: 'exmaple@email.com', subject: 'Welcome to Task and Purpose')
  end
end
