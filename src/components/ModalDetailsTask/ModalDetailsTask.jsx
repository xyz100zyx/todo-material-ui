import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ButtonModal from "../ButtonModal/ButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../store/slices/tasksSlice";
import TaskService from "../../services/TaskService";
import { useParams } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 722,
  width: '100%',
  bgcolor: "#FFD7A7",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const ModalDetailsTask = (props) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const activeProject = useSelector(state => state.projects.activeProject);
  const activeTask = useSelector(state => state.tasks.activeTask);

  const [priority, setPriority] = React.useState(props.clickedTask.priority);
  const [description, setDescription] = React.useState(props.clickedTask.description);
  const [timeToPass, setTimeToPass] = React.useState(props.clickedTask.time_to_pass);

  const onSaveClick = async () => {
    try{
      const newTask = await TaskService.updateTask(user.id, activeProject.id, activeTask.id, description, timeToPass, priority).then(res => res.data);
      await dispatch(updateTask({priority, description, timeToPass}))
      props.action(false)
    }catch(err) {
      console.log('was en error', err);
    }
  }


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
        <TextInput action={setTimeToPass} minHeight={'auto'} label={'Time finish point'} placeholder={timeToPass}/>
        <PrioritySelect action={setPriority} priority={props.clickedTask.priority} />
        <TextInput action={setDescription} mt={18} minHeight={'130px'} label={'Task description'} placeholder={props.clickedTask.description}/>
        <ButtonModal text={'Save'} action={onSaveClick}/>
        <ButtonModal text={'Done'} />
        <ButtonModal text={'Delete'} />
      </Box>
    </Modal>
  );
};

export default ModalDetailsTask;
