import { gql, useQuery } from '@apollo/client';
import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import CreateButton from './CreateButton';
import Task from './Task';

const GET_TASKS = gql`
  query GetTasksAndUsers {
    tasks {
      id
      name
      complete
      userId
      duedate
      user {
        id
        fullName
      }
    }
    users {
      id
      fullName
      email
    }
  }
`;

const TaskList = () => {
  const { data, loading, error } = useQuery(GET_TASKS);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    // @todo: better error state
    <Typography>YOU SHALL NOT PASS: {error}</Typography>;
  }
  if (data)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Paper sx={{ width: '75vw' }}>
          {data.tasks.map((task) => (
            <Task
              key={task.id}
              complete={task.complete}
              name={task.name}
              id={task.id}
              taskOwner={task.user}
              taskOwnerId={task.userId}
              dueDate={task.duedate}
              users={data.users}
            />
          ))}
          <CreateButton />
        </Paper>
      </Box>
    );
};
export default TaskList;
