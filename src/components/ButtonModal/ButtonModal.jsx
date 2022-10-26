import React from "react";
import { Button, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const ButtonModal = (props) => {

    const iconController = (type) => {
        switch (type){
            case 'Save':
                return <SaveIcon sx={{ margin: "0 10px" }} />
                break
            case 'Delete':
                return <DeleteIcon sx={{ margin: "0 10px" }} />
                break
            case 'Done':
                return <DoneIcon sx={{ margin: "0 10px" }} />
                break
        }
    }

    const colorController = (type) => {
        switch (type){
            case 'Save':
                return '#7FDB88'
                break
            case 'Delete':
                return '#FF5757'
                break
            case 'Done':
                return '#7E8BF9'
                break
        }
    }

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: colorController(props.text),
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: '7px 0px'
      }}
      onClick={props.action}
    >
      {iconController(props.text)}
      <Typography>{props.text}</Typography>
    </Button>
  );
};

export default ButtonModal;
