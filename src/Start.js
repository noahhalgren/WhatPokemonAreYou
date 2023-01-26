import React from "react";
import './style.css';
import './styles/css-pokemon-gameboy.css';

function Start() {
  return (
      <div className="wrapper">
        <div className="framed">
          <h1>What Pokemon Are You?</h1>
          <div className="framed buttons">
            <a className="button" href="/WhatPokemonAreYou/questions">Let's find out</a>
          </div>
        </div>
          <span className="centered">Created by Noah Halgren - Visuals credited to <a href="https://github.com/luttje/css-pokemon-gameboy">luttje</a></span>
      </div>
        
  );
}

export default Start;
