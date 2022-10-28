import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Drawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {clearActive, deleteProject, fetchProjects, setActive} from "../../store/slices/projectsSlice";
import { getTasks } from "../../store/slices/tasksSlice";
import Button from "@mui/material/Button";
import ProjectService from "../../services/ProjectService";

function Sidebar(props) {

  const dispatch=useDispatch()
  const user = useSelector(state=>state.user.user);
  const projects = useSelector(state=>state.projects.projects);
  const tasks = useSelector(state => state.tasks.tasks)

  async function onProjectClick(project){
    dispatch(setActive(project))
    await dispatch(getTasks({projectId: project.id, userId: user.id}));
  }

  async function loadProjects(){
    await dispatch(fetchProjects(user.id))
  }

  const onDeleteClick = async (project) => {
    await ProjectService.delete(user.id, project.id);
    await dispatch(deleteProject(project))
    await dispatch(clearActive())
  }

  React.useEffect(()=> {
    loadProjects();
  }, [])

  return (
    <>
      {props.state && (
        <Drawer
          open={props.state}
          sx={{
            maxWidth: "297px",
            width: `100%`,
            height: "100%",
            minHeight: "800px",
            "& .MuiDrawer-paper": {
              position: "relative",
              boxSizing: "border-box",
              marginTop: "5px",
              minHeight: "800px",
              border: "none",
            },
          }}
          variant={"permanent"}
        >
          <Typography
            variant={"subtitle1"}
            sx={{ fontWeight: "600", fontSize: "32px", marginTop: "15px" }}
          >
            Your projects
          </Typography>
          <List
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            {projects.map((project, index) => (
              <ListItem
                sx={{
                  backgroundColor: "rgba(244, 208, 137, 0.4)",
                  width: "100%",
                  padding: "0px",
                  maxWidth: "254px",
                }}
                key={`${project.title}-${index}`}
                onClick={() => onProjectClick(project)}
              >
                <ListItemButton
                  sx={{
                    padding: "15px 0",
                  }}
                >
                  <ListItemText
                    sx={{
                      "& span": { textAlign: "start", paddingLeft: "15px" },
                    }}
                    primary={project.title}
                  />
                  <ListItemIcon
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <DeleteOutlineIcon onClick={() => onDeleteClick(project)} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={() => props.actionModelProject(true)} sx={{ padding: "10px 15px", maxWidth: '170px', margin: '10px auto 0 auto' }}>
            Add new project
          </Button>
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;
