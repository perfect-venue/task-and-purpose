import { gql, useMutation } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      task {
        id
        name
        complete
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

const Task = ({ id, name, complete }) => {
  const [nameValue, setNameValue] = useState(name);
  const [completeValue, setCompletedValue] = useState(complete);
  const [updateTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    refetchQueries: ["GetTasks"],
  });
  const [deleteTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    refetchQueries: ["GetTasks"],
  });
  const loading = updateLoading || deleteLoading;

  useEffect(() => {
    if (updateTask) {
      const variables = {
        input: { taskId: id, name: nameValue, complete: completeValue },
      };
      updateTask({ variables });
    }
  }, [id, nameValue, completeValue, updateTask]);

  const onClickDelete = () => {
    const variables = { input: { taskId: id } };
    deleteTask({ variables });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderBottom: "1px solid #ccc",
      }}
    >
      <Checkbox
        checked={completeValue}
        onChange={(e) => setCompletedValue(e.target.checked)}
      />
      <TextField
        InputProps={{ disableUnderline: true }}
        variant="standard"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <IconButton disabled={loading} onClick={onClickDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
export default Task;
