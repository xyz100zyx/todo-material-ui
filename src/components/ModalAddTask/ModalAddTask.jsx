import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ButtonModal from "../ButtonModal/ButtonModal";
import {createTask} from "../../store/slices/tasksSlice";
import TaskService from "../../services/TaskService";
import {useDispatch, useSelector} from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 722,
  width: "100%",
  bgcolor: "#FFD7A7",
  boxShadow: 24,
  p: 4,
  border: "none",
};

const ModalAddTask = (props) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);
  const project = useSelector(state => state.projects.activeProject);

  const [timeToPass, setTimeToPass] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [priority, setPriority] = React.useState('');

  const onSaveClick = async () => {
    const task = await TaskService.createTask(user.id, project.id, description, timeToPass, priority).then(res => res.data);
    dispatch(createTask(task))
    props.action(false)
  }

  return (
    <Modal
      open={props.state}
      onClose={() => props.action(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Details
        </Typography>
        <TextInput
          minHeight={"auto"}
          label={"Time finish point"}
          placeholder={``}
          action={setTimeToPass}
        />
        <PrioritySelect action={setPriority} priority={'Chose the priority'} />
        <TextInput
          mt={18}
          minHeight={"130px"}
          label={"Task description"}
          placeholder={''}
          action={setDescription}
        />
        <ButtonModal action={onSaveClick} text={"Save"} />
      </Box>
    </Modal>
  );
};

export default ModalAddTask;
