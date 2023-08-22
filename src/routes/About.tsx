import React from "react";
import logo from "../logo.svg"

export function About(style?:React.CSSProperties) {
  return (
    <div style={style}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="resume.pdf" target="_blank">
          This is About Page
        </a>
        </div>
    </div>
  );
}