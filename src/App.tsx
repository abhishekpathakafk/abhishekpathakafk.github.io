import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AboutMe } from './routes/AboutMe';
import { Home } from './routes/Home';
import { Work } from './routes/Work';
import { Work3D } from './routes/work/Work3D';
import { WorkUnity } from './routes/work/WorkUnity';
import { WorkGameDev } from './routes/work/WorkGameDev';
import { WorkRigging } from './routes/work/WorkRigging';
import { Divider } from '@mui/material';
//https://coolors.co/palette/ef6351-f38375-f7a399-fbc3bc-ffe3e0
function App() {
  return (
    <div style={{position:"absolute",backgroundColor:"pink",top:"0px",left:"0px",right:"0px",bottom:"0px",display:"flex"}}>
    <NavBar backgroundColor='#ef6351' height={"100%"} flex={"10%"}/>
    <Divider orientation='vertical' flexItem/>
    <Routes>
      <Route index element={<Home height={"100%"} flex="90%"/>}/>
      <Route path="aboutme" element={<AboutMe height={"100%"} flex="90%"/>}/>
      <Route path="work" element={<Work height={"100%"} flex="90%"/>}/>
      <Route path="work/3d" element={<Work3D height={"100%"} flex="90%"/>}/>
      <Route path="work/unity" element={<WorkUnity height={"100%"} flex="90%"/>}/>
      <Route path="work/gamedev" element={<WorkGameDev height={"100%"} flex="90%"/>}/>
      <Route path="work/rigging" element={<WorkRigging height={"100%"} flex="90%"/>}/>
    </Routes>
    </div>
  );
}

export default App;
