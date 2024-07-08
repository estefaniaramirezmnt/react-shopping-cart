import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
