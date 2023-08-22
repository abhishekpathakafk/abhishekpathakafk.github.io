import React from "react";
import logo from "../logo.svg"
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AssignmentInd, Book, Home } from "@mui/icons-material";

export function NavBar( style?: React.CSSProperties) {
  return (
   <List component="nav" aria-label="main mailbox folders" style={style} >

        <Link to="/" >
        <ListItemButton>
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        </Link>

          <Divider />
        <Link to="/about">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentInd/>
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItemButton>
        </Link>
          <Divider />

        <Link to="/careers">
    <ListItemButton>
          <ListItemIcon>
            < Book/>
          </ListItemIcon>
          <ListItemText primary="Download Resume" />
        </ListItemButton>
        </Link>
      </List>
  );
}