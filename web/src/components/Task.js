import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Task = ({ name, complete }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      p: 2,
      borderBottom: "1px solid #ccc",
    }}
  >
    <Checkbox checked={complete} />
    <Typography>{name}</Typography>
  </Box>
);
export default Task;
