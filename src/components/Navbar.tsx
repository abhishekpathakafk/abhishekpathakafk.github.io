import React from "react";
import logo from "../logo.svg"
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AssignmentInd, Book, Home, Work } from "@mui/icons-material";

export function NavBar( style?: React.CSSProperties) {
  return (
    <div style={style}>
   <List component="nav" aria-label="main mailbox folders"  >

        <Link to="/" >
        <ListItemButton>
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        </Link>

          <Divider />
        <Link to="/aboutme">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentInd/>
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItemButton>
        </Link>
          <Divider />

        <Link to="/work">
        <ListItemButton>
          <ListItemIcon>
            <Work/>
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItemButton>
        </Link>

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