import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Task from "./Task";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      complete
    }
  }
`;

const TaskList = () => {
  const { data } = useQuery(GET_TASKS);
  const tasks = data?.tasks || [];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Paper sx={{ width: "50vw" }}>
        {tasks.map((task) => (
          <Task key={task.name} {...task} />
        ))}
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined">New Task</Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default TaskList;
