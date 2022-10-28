import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TasksContainer from "../TasksContainer/TasksContainer";
import { ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ModalDetailsTask from "../ModalDetailsTask/ModalDetailsTask";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import ModalAddProject from "../ModalAddProject/ModalAddProject";
import { useDispatch, useSelector } from "react-redux";
import {getTasks, setActiveTask} from "../../store/slices/tasksSlice";


function Project(props) {

  const dispatch = useDispatch()

  const activeProject = useSelector(state => state.projects.activeProject)
  const activeTask = useSelector(state => state.tasks.activeTask);

  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalNew, setModalNew] = React.useState(false);

  const fetchedTasks = useSelector(state => state.tasks.tasks);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return "#FAA136";
        break;
      case 'Middle':
        return "#FFB760";
        break;
      case 'Low':
        return "#FFD8A9";
        break;
    }
  };

  const onTaskClick = (task) => {
    dispatch(setActiveTask(task)) 
    setModalAdd(!modalAdd);
  }
  
  const onAddTaskClick = () => {
    setModalNew(!modalNew)
  }

  /*React.useEffect(() => {
    dispatch(getTasks);
  }, [])*/
  
  return (
    <>
      {modalAdd && <ModalDetailsTask clickedTask={activeTask} action={setModalAdd} state={modalAdd} />}
      {props.modalProject && <ModalAddProject action={props.actionModelProject} state={props.modalProject} />}
      {modalNew && <ModalAddTask action={setModalNew} state={modalNew} />}
      <Box
        sx={{
          backgroundColor: "#FFE1BD",
          marginTop: "5px",
        }}
        width={"100%"}
        maxWidth={"1440px"}
      >
        <Typography
          variant={"h4"}
          sx={{
            marginTop: "27px",
          }}
        >
          {activeProject.title}
        </Typography>
        <Button onClick={()=>onAddTaskClick()} sx={{ marginTop: "50px", padding: "10px 15px" }}>
          Add new task
        </Button>
        <TasksContainer>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {fetchedTasks.map((task, index) => (
              <ListItem
                onClick={() => onTaskClick(task)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                  cursor: 'pointer'
                }}
                key={task.id}
              >
                <ListItemText
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "6px 0",
                    marginTop: 0,
                  }}
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                  primary={task.priority}
                />
                <ListItemText primary={task.description} />
              </ListItem>
            ))}
          </List>
        </TasksContainer>
      </Box>
    </>
  );
}

export default Project;
