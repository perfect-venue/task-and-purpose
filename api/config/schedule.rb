set :bundle_command, '<your path to bundle> exec'
set :output, './log/cron.log'

every 1.days, at: '4:30 am' do
    runner "TaskStatusChangedMailer.secheduleTaskNotifications"
end
