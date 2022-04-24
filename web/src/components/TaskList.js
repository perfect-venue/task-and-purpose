import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import CreateButton from "./CreateButton";
import Task from "./Task";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      complete
      dueDate
      userId
    }
    users {
      id
      name
      email
    }
  }
`;

const TaskList = () => {
  const { data } = useQuery(GET_TASKS);
  const tasks = data?.tasks || [];
  const users = data?.users || [];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Paper sx={{ width: "65vw" }}>
        {tasks.map(task => (
          <Task key={task.id} {...task} owners={users} />
        ))}
        <CreateButton />
      </Paper>
    </Box>
  );
};
export default TaskList;
