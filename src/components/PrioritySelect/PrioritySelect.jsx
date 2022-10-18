import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import React from "react";

const styleWrapper = {
  marginTop: "18px",
  border: 'none'
};

const PrioritySelect = () => {
  const [priority, setPriority] = React.useState("");

  return (
    <FormControl fullWidth sx={styleWrapper}>
      <InputLabel id="demo-simple-select-label">Priority</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={priority}
        label="Chose a priority"
        onChange={(e) => setPriority(e.target.value)}
        sx={{
            
        }}
      >
        <MenuItem value={10}>High</MenuItem>
        <MenuItem value={20}>Middle</MenuItem>
        <MenuItem value={30}>Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PrioritySelect;
