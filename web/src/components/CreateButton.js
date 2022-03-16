import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      task {
        id
        name
        complete
      }
    }
  }
`;

const CreateButton = () => {
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    refetchQueries: ["GetTasks"],
  });

  const onClickCreate = () => {
    const variables = { input: { name: "New Task" } };
    createTask({ variables });
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
      <Button variant="outlined" disabled={loading} onClick={onClickCreate}>
        {loading ? "Loading..." : "New Task"}
      </Button>
    </Box>
  );
};
export default CreateButton;
