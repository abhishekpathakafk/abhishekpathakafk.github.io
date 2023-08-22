import React from "react";
import logo from "../logo.svg"

export function Careers(style?:React.CSSProperties) {
  return (
    <div  style={style}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is Careers Page
        </a>
      </header>
    </div>
  );
}