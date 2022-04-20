class Task < ApplicationRecord
  belongs_to :user

  def self.send_duedate_reminders
    Task.all.each do |task|
      if Date.today == task.duedate.prev_day && task.complete == false
        TaskMailer.duedate_reminder_email(task.id).deliver
      end
    end
  end
end
