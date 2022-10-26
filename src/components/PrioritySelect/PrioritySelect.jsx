import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import React from "react";

const styleWrapper = {
  marginTop: "18px",
  border: 'none'
};

const PrioritySelect = (props) => {
  const [priority, setPriority] = React.useState(props.priority);

  const onPriorityChange = (e) => {
    setPriority(e.target.value);
    props.action(e.target.value)
  }

  return (
    <FormControl fullWidth sx={styleWrapper}>
      <InputLabel id="demo-simple-select-label">Priority</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={priority.toString()}
        label="Chose a priority"
        onChange={(e) => onPriorityChange(e)}
        sx={{
            
        }}
      >
        <MenuItem value={'High'}>High</MenuItem>
        <MenuItem value={'Middle'}>Middle</MenuItem>
        <MenuItem value={'Low'}>Low</MenuItem>
        <MenuItem value={props.priority}>{props.priority}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PrioritySelect;
