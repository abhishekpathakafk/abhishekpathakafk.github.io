import { Grid } from "@mui/material";
import React from "react";
import { TypeWriter } from "../tools/ps/Typewriter";

export function WorkTools(style?:React.CSSProperties) {
  return (
    <div style={style}>
      <Grid container width="100%" height="100%">
        <TypeWriter/>
    </Grid>
    </div>
  );
}