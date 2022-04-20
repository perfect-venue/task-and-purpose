import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      task {
        id
        name
        complete
        userId
        duedate
      }
    }
  }
`;

const DELETE_TASK = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      task {
        id
        name
        complete
      }
    }
  }
`;

const Task = ({ id, name, complete, taskOwner, users, taskOwnerId, dueDate }) => {
  const [nameValue, setNameValue] = useState(name);
  const [completeValue, setCompletedValue] = useState(complete);
  const [dateValue, setDateValue] = useState(new Date(dueDate));

  const [updateTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    refetchQueries: ['GetTasksAndUsers'],
  });
  const [deleteTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    refetchQueries: ['GetTasksAndUsers'],
  });
  const loading = updateLoading || deleteLoading;

  useEffect(() => {
    if (updateTask) {
      const variables = {
        input: {
          taskId: id,
          name: nameValue,
          complete: completeValue,
          userId: taskOwnerId,
          duedate: dateValue,
        },
      };
      updateTask({ variables });
    }
    // @todo: need to clean up all these change handlers into the useEffect or a single function maybe within a form
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, nameValue, completeValue, updateTask]);

  const onClickDelete = () => {
    const variables = { input: { taskId: id } };
    deleteTask({ variables });
  };

  const handleOwnerUpdate = (e, userId) => {
    const variables = {
      input: { taskId: id, name: nameValue, complete: completeValue, userId, duedate: dateValue },
    };
    updateTask({ variables });
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    const variables = {
      input: {
        taskId: id,
        name: nameValue,
        complete: completeValue,
        userId: taskOwnerId,
        duedate: newValue,
      },
    };
    updateTask({ variables });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #ccc',
        }}
      >
        <Checkbox checked={completeValue} onChange={(e) => setCompletedValue(e.target.checked)} />
        <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <DesktopDatePicker
          label="Due Date"
          inputFormat="MM/DD/YYYY"
          value={dateValue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel sx={{ mr: '8px', ml: '16px' }}>Task Owner</InputLabel>
        <Select value={taskOwner?.fullName} label="Task Owner">
          {users?.map((user) => {
            return (
              <MenuItem
                key={user.id}
                value={user.fullName}
                onClick={(e) => handleOwnerUpdate(e, user.id)}
              >
                {user.fullName}
              </MenuItem>
            );
          })}
        </Select>
        <IconButton disabled={loading} onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </LocalizationProvider>
  );
};
export default Task;
