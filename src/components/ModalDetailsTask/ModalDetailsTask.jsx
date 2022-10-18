import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ButtonModal from "../ButtonModal/ButtonModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 722,
  width: '100%',
  bgcolor: "#FFD7A7",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: 'none'
};

const ModalDetailsTask = (props) => {

  const timeLost = props.clickedTask.timeLost;

  return (
    <Modal
      open={props.state}
      onClose={() => props.action(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
            Details
        </Typography>
        <TextInput minHeight={'auto'} label={'Time finish point'} placeholder={`${timeLost[0]} ${timeLost[1]} ${timeLost[2]}`}/>
        <PrioritySelect priority={props.clickedTask.priority} />
        <TextInput mt={18} minHeight={'130px'} label={'Task description'} placeholder={props.clickedTask.description}/>
        <ButtonModal text={'Save'} />
        <ButtonModal text={'Done'} />
        <ButtonModal text={'Delete'} />
      </Box>
    </Modal>
  );
};

export default ModalDetailsTask;
