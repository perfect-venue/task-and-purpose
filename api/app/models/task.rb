class Task < ApplicationRecord
  belongs_to :user

  def send_duedate_reminders
    Task.all.each do |task|
      if Date.today == task.duedate.prev_day
        TaskMailer.duedate_reminder_email(task.id).deliver
      end
    end
  end
end
