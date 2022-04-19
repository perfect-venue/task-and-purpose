class Task < ApplicationRecord
  belongs_to :user

  def send_duedate_reminders
    Task.all.each do |task|
      if(Date.today == task.duedate.prev_day)
          byebug
      end
    end
  end
end
