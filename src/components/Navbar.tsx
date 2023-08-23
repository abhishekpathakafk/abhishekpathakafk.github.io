import React from "react";
import { Link } from "react-router-dom";
import {  Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AssignmentInd, Book, Home, Work } from "@mui/icons-material";

export function NavBar( style?: React.CSSProperties) {
  return (
    <div style={style}>
   <List component="nav" aria-label="main mailbox folders"  >

        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
          <Divider />

        <ListItemButton component={Link} to="/aboutme">
          <ListItemIcon>
            <AssignmentInd/>
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItemButton>
        <Divider />

        <ListItemButton component={Link} to="/work">
          <ListItemIcon>
            <Work/>
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItemButton>
          <Divider />

        <ListItemButton href="resume.pdf" target="_blank">
          <ListItemIcon>
            < Book/>
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItemButton>
          <Divider />



      </List>
      </div>
  );
}