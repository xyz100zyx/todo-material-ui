import React from "react";
import { TextField } from "@mui/material";

const style = {
  width: "100%",
};

const TextInput = (props) => {
  const [value, setValue] = React.useState(props.placeholder);

  return (
    <TextField
      placeholder={'Input the description of task'}
      id="standard-basic"
      label={props.label}
      value={value}
      variant="standard"
      onChange={(e)=>setValue(e.target.value)}
      sx={{
            minHeight: props.minHeight,
            height: '100%',
            width: '100%',
            marginTop: `${props.mt}px`,
        }}
    />
  );
};

export default TextInput;
