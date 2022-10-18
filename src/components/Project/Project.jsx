import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TasksContainer from "../TasksContainer/TasksContainer";
import { ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ModalDetailsTask from "../ModalDetailsTask/ModalDetailsTask";

function Project(props) {
  const [modalAdd, setModalAdd] = React.useState(false);

  const initialTasks = [
    {
      priority: 'High',
      timeLost: [21, "January", 2023],
      description: "sdhfbsjkdfnsdknfsgdfngm,dsdg",
    },
    {
      priority: "Middle",
      timeLost: [22, "January", 2023],
      description: "sdhfbsjkdfnsdknfsgdfngm,dsdg",
    },
    {
      priority: "Low",
      timeLost: [22, "January", 2023],
      description: "sdhfbsjkdfnsdknfsgdfngm,dsdg",
    },
  ];

  const [tasks, setTasks] = React.useState(initialTasks);
  const [clickedTask, setClickedTask] = React.useState(null);

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
    setClickedTask(task);
    setModalAdd(!modalAdd);
  }

  return (
    <>
      {modalAdd && <ModalDetailsTask clickedTask={clickedTask} action={setModalAdd} state={modalAdd} />}
      <Box
        sx={{
          backgroundColor: "#FFE1BD",
          marginTop: "5px",
        }}
        width={"100%"}
        maxWidth={"1139px"}
      >
        <Typography
          variant={"h4"}
          sx={{
            marginTop: "27px",
          }}
        >
          Test Project
        </Typography>
        <Button sx={{ marginTop: "50px", padding: "10px 15px" }}>
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
            {tasks.map((task, index) => (
              <ListItem
                onClick={() => onTaskClick(task)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                  cursor: 'pointer'
                }}
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
