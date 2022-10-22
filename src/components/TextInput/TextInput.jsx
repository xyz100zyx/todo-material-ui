import React from "react";
import { TextField } from "@mui/material";
import { maxWidth } from "@mui/system";

const style = {
  width: "100%",
};

const TextInput = (props) => {
  const [value, setValue] = React.useState(props.type === 'auth' ? '' : props.placeholder);

  const onChangeInput = (text) => {
      setValue(text);
      props.action(text);
    }

  return (
    <TextField
      placeholder={props.placeholder}
      id="standard-basic"
      label={props.label}
      value={value}
      variant="standard"
      onChange={(e)=>onChangeInput(e.target.value)}
      sx={{
            minHeight: props.minHeight,
            height: '100%',
            width: '100%',
            maxWidth: props.mw || '100%',
            marginTop: `${props.mt}px`,
        }}
    />
  );
};

export default TextInput;
