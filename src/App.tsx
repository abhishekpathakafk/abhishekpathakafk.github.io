import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Careers } from './routes/Careers';
import { About } from './routes/About';
import { Home } from './routes/Home';
//https://coolors.co/palette/ef6351-f38375-f7a399-fbc3bc-ffe3e0
function App() {
  return (
    <div style={{position:"absolute",backgroundColor:"pink",top:"0px",left:"0px",right:"0px",bottom:"0px",display:"flex"}}>
    <NavBar backgroundColor='#ef6351' height={"100%"} flex={"10%"}/>
    <Routes>
      <Route path="/" element={<Home height={"100%"} flex="90%"/>}/>
      <Route path="/careers" element={<Careers height={"100%"} flex="90%"/>}/>
      <Route path="/about" element={<About height={"100%"} flex="90%"/>}/>
    </Routes>
    </div>
  );
}

export default App;
