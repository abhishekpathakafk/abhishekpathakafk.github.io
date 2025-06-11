import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function AboutMe(style?: React.CSSProperties) {
  return (
    <div style={style}>
      <Card style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image="profilepic.jpg"
          style={{height:"50%",margin:"10px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hello There
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://www.linkedin.com" target="_blank"><LinkedIn/>LinkedIN</Button>
          <Button size="small" href="https://www.github.com" target="_blank"><GitHub/>Github</Button>
        </CardActions>
      </Card>
    </div>
  );
}