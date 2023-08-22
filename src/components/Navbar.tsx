import React from "react";
import logo from "../logo.svg"
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/careers">Career</Link>
    </div>
  );
}