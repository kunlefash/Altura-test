import React from 'react';
import { Routes, Route } from "react-router-dom";
import Marketplace from './marketplace/Marketplace';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Marketplace/> } />
      </Routes>
    </div>
  );
}

export default App;