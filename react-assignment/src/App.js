import './App.css';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./home";
import NewLayer from "./newLayer";

function App() {
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newLayer" element={<NewLayer/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;