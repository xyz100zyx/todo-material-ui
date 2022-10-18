import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Drawer } from "@mui/material";
import Typography from "@mui/material/Typography";

function Sidebar(props) {
  const initialProjects = [
    {
      name: "Test project",
    },
    {
      name: "Second test project",
    },
  ];

  const [projects, setProjects] = React.useState(initialProjects);

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
                key={`${project.name}-${index}`}
              >
                <ListItemButton
                  sx={{
                    padding: "15px 0",
                  }}
                >
                  <ListItemText
                    sx={{ "& span": { textAlign: "center" } }}
                    primary={project.name}
                  />
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
