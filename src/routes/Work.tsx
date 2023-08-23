import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, ListItem, Typography } from "@mui/material";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Work3D } from "./work/Work3D";
import { Height } from "@mui/icons-material";

const createcard=(title:string,comment:string,imageloc:string)=>{
  return <Card style={{position:"relative",width:"100%",height:"100%",display:"flex"}}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="80%"
      image={imageloc}
      alt="green iguana"
    />
    <CardContent style={{height:"20%"}}>
      <Typography gutterBottom variant="h5" component="div">
          {title} 
      </Typography>
      <Typography variant="body2" color="text.secondary">
          {comment} 
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
}
const art=()=>{
    return <Grid item style={{height:"50%",width:"50%"}}>
            <Link to="3d">
              {createcard("3D Art","Some of the 3D Artworks that I have created.This Contains modelling,texturing,rigging.","3dart.png")}
            </Link>
          </Grid>
}

const gamedev=()=>{
         return <Grid item style={{height:"50%",width:"50%"}}>
            <Link to="gamedev">
            {createcard("Game Dev"," These are some cpp, opengl projects i did","gamedev.jpg")}
            </Link>
            </Grid>
}
const unity=()=>{
         return <Grid item style={{height:"50%",width:"50%"}}>
       <Link to="unity">
          {createcard("Unity","These are some of my Unity projects","unity.jpg")}
         </Link></Grid>
}
const rigging=()=>{
         return <Grid item style={{height:"50%",width:"50%"}}>
   <Link to="rigging">
          {createcard("Rigging","These are some riggin works","rigging.png")}
          </Link></Grid>
}

export function Work(style?:React.CSSProperties) {
  return (
    <div style={style}>
      <Grid container spacing={2} position={"relative"} justifyContent={"center"} display={"flex"} width={"100%"} height={"100%"}>
      {art()}
      {unity()}
      {gamedev()}
      {rigging()}
    </Grid>
    </div>
  );
}