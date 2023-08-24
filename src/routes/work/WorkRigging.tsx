import { Grid } from "@mui/material";
import React from "react";



function getvedioframes(vediosources:string[]){
  const l:JSX.Element[]=[]
  vediosources.forEach((src:string)=>{
       l.push(<Grid item xs={6} padding={"1em"}>
            <iframe  src= {`https://www.youtube.com/embed/${src}`}
            title="YouTube video player"  
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowFullScreen></iframe>
          </Grid>)
  })
  return l;
}
export function WorkRigging(style?:React.CSSProperties) {
  
  const vediosources=["KL0S5EcNU2c?si=7Cp0l70TrTcSnJTy","KL0S5EcNU2c?si=7Cp0l70TrTcSnJTy","KL0S5EcNU2c?si=7Cp0l70TrTcSnJTy","KL0S5EcNU2c?si=7Cp0l70TrTcSnJTy"]


  return (
    <div style={style}>
      <Grid container width="100%" height="100%">
      {getvedioframes(vediosources)}
    </Grid>
    </div>
  );
}