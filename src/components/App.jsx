import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
} from "./"
import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
