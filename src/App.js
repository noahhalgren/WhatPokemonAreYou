import React from "react";
import Start from "./Start"
import Questions from "./Questions"
import Results from "./Results"
import {Routes, Route} from 'react-router-dom'
import './styles/css-pokemon-gameboy.css';

function App() {
  return (
    <Routes>
      <Route path="/WhatPokemonAreYou" element={<Start/>} />
      <Route path="/WhatPokemonAreYou/questions" element={<Questions/>} />
      <Route path="/WhatPokemonAreYou/results" element={<Results/>} />
    </Routes>
  );
}

export default App;
