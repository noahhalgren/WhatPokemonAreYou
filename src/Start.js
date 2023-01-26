import React from "react";
import './style.css';
import './styles/css-pokemon-gameboy.css';
import { Link } from "react-router-dom";

function Start() {
  return (
      <div className="wrapper">
        <div className="framed">
          <h1>What Pokemon Are You?</h1>
          <div className="framed buttons">
            <Link className="button" to="/questions">Let's find out</Link>
          </div>
        </div>
          <span className="centered">Created by Noah Halgren - Visuals credited to <a href="https://github.com/luttje/css-pokemon-gameboy">luttje</a></span>
      </div>
        
  );
}

export default Start;
