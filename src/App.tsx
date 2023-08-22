import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Careers } from './routes/Careers';
import { About } from './routes/About';

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
