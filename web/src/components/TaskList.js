import { gql, useQuery } from '@apollo/client';
import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import CreateButton from './CreateButton';
import Task from './Task';

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      complete
      userId
      user {
        id
        fullName
      }
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      fullName
      email
    }
  }
`;

const TaskList = () => {
  const { data, loading, error } = useQuery(GET_TASKS);
  const { data: { users } = {} } = useQuery(GET_USERS);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    <Typography>YOU SHALL NOT PASS: {error}</Typography>;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Paper sx={{ width: '50vw' }}>
        {data?.tasks.map((task) => (
          <Task
            key={task.id}
            complete={task.complete}
            name={task.name}
            id={task.id}
            taskOwner={task.user}
            taskOwnerId={task.userId}
            users={users}
          />
        ))}
        <CreateButton />
      </Paper>
    </Box>
  );
};
export default TaskList;
