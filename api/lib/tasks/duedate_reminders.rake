task duedate_reminders: :environment do
  Task.send_duedate_reminders
end
