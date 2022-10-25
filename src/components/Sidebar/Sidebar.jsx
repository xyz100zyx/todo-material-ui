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
import {fetchProjects, setActive} from "../../store/slices/projectsSlice";
import { getTasks } from "../../store/slices/tasksSlice";

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
                    <DeleteOutlineIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;
