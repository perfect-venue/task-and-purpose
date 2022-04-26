import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectUser = ({ userIdValue, setUserIdValue, owners }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="user-select-label">Owner</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={userIdValue}
          onChange={e => setUserIdValue(e.target.value)}
          autoWidth
          label="Owner"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {owners.map(owner => (
            <MenuItem value={owner.id}>
              {owner.name ? owner.name : owner.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
