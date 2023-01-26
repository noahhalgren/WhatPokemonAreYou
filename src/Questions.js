import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './styles/css-pokemon-gameboy.css';

const questions = [
  "Your friend has dragged you to a party to be their designated driver. For whatever reason, you don’t want to be at this party. Maybe you dislike the host, have to wake up early tomorrow, or simply don’t enjoy parties. Whatever the case, you don’t want to be here. After being there for a short time, you hear your favorite song start to play. Many other party attendants are dancing already, and some are singing along. It’s later in the night and many attendants are sufficiently intoxicated, to the point where they will have vague or absence of recollection of the rest of the night. What do you do? Do you join in with the dancing? The singing? Or perhaps you leave? Explain in detail.",
  "Your city is holding a fundraiser run for a charity you strongly support. For every kilometer you run, an additional set amount of money is put towards this cause. Assume the run is held on a weekday and you’d be excused from your work or schooling to participate if you’d like. You won’t be giving up your free time for this, so there’s no excuse not to participate; however, it is guaranteed that no one will fault or judge you if you don’t join. Do you participate in the run? If so, do you train beforehand? How far do you think you’d go? If you don’t participate, why not? Explain in detail.",
  "While walking through an unfamiliar city, you decide to take a short cut through a construction site. As you do, a stray brick falls from a scaffolding and lands on your foot. It hurts like hell, but you’re 99% sure it’s not broken. You know if you go to the hospital and they learn how this happened, there’s a chance you could get fined for trespassing. Do you go to the hospital? If so, do you tell the truth? Explain in detail.",
  "You’re a guest on a popular TV gameshow and you’re currently winning big. Just before the show is about to end, the host offers you a final challenge. You must answer a singular trivia question selected by the host. The difficulty is roughly even to the questions he’s asked before, which you had answered correctly. If you get the answer correct, you walk out with double the money you’ve made. If you’re wrong, you lose it all. The host is giving you the chance to walk out now, without the final challenge, if you’d like. What do you do? Explain in detail.",
  "It seems you are the last person on Earth. As you walk around your town, you see cars parked in the middle of the road, shops open and unlocked with no attendants, and empty sidewalks devoid of life. Utilities soon go offline as well; no electricity, water, or internet to speak of. You’re unable to find anyone still alive in your town, though you have no proof to say whether there are others out there or not. What do you do? Explain in detail.",
  "Imagine you’re attending a school you live roughly a mile away from. Your bus picks you up very early in the morning and you often arrive long before class starts. One day you sleep in and miss the bus. After getting ready for the day in a rush, you look at the clock and see you have 15 minutes before school starts. The sky is clear and it’s a comfortable temperature outside, and your first class of the day is Physical Education, so arriving sweaty or exhausted would not make you look out of place. Would you run to school? If not, how would you get to school? Explain in detail."
];

const values = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

function Questions() {

  const navigate = useNavigate();

  // Create our refs for getting data from text areas AND setting error span
  let refs = useRef([]);
  let spanRef = useRef();
  
  // Create the refs for text areas, all 6 of them
  refs.current = [0,0,0,0,0,0].map(
      (ref, index) =>   refs.current[index] = React.createRef()
  )

  // On submit we create out base stat total based on responses and generate our pokemon before moving ahead
  function handleSubmit(event) {
    var analyze = require('./analyze');
    
    var stats = [0,0,0,0,0,0]
    for (var i = 0; i < 6; i++) {
      const response = refs.current[i].current.value;
      if (response === '') {
        spanRef.current.innerHTML = "All fields are required before continuing.";
        return
      }
      stats[i] = analyze.getBaseStat(response, i);
    }
    
    var pokedex = require('./pokemon');
    var yourPokemon = pokedex.findPokemon(stats)

    console.log("Hey! Look at you, you know for to inspect element or whatever. Well if your're curious, these are your 'stats'. Your pokemon is chosen based off how close these stats are to theirs. :) ")
    console.log(stats)

    navigate("/results?mon=" + yourPokemon);

  }

  return (
    <div className="wrapper">
      
      {questions.map(function(object, i){
        return (
          <div className="framed">
            <h2>Question {i+1}</h2>
            <p>{questions[i]}</p>
            <textarea rows="5" cols="60" name={values[i]} placeholder="Enter text" ref={refs.current[i]}></textarea>
          </div>
        );
      })}

        <br />
        <span className="centered red" ref={spanRef}></span>
        <br />
      
      <div className="framed buttons">
        <button className="button" onClick={handleSubmit}> Submit Questionnaire </button>
      </div>
      
    
    </div>
  );
}

export default Questions;
