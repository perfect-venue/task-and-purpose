require 'test_helper'

class TaskStatusChangedMailerTest < ActionMailer::TestCase
  test "task_completed" do
    mail = TaskStatusChangedMailer.task_completed
    assert_equal "Task completed", mail.subject
  end

end
