import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Careers } from './routes/Careers';
import { About } from './routes/About';
import { Home } from './routes/Home';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
