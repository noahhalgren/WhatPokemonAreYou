import React from "react";
import Start from "./Start"
import Questions from "./Questions"
import Results from "./Results"
import {Routes, Route} from 'react-router-dom'
import './styles/css-pokemon-gameboy.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/questions" element={<Questions/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>

  );
}

export default App;
