import React from "react";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const DatePicker = ({ dueDateValue, setDueDateValue }) => {
  return (
    <DateTimePicker
      label="Due date"
      value={dueDateValue}
      onChange={newValue => setDueDateValue(newValue)}
      renderInput={params => <TextField {...params} />}
    />
  );
};
