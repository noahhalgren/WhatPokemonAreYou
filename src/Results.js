import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams  } from "react-router-dom";
import axios from 'axios';
import './styles/css-pokemon-gameboy.css';

function Results() {

  const [loading, setLoading] = useState(false);
  const [yourPokemon, initPokemon] = useState([]);

  const [searchParams] = useSearchParams()

  const navigate = useNavigate();

  const pokemon_id = searchParams.get("mon")
  
  if (pokemon_id === null) {
    navigate("/");
  }

  // const {all_pokemon} = require('./pokedex');
  // var yourPokemon = all_pokemon[pokemon_id-1];

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + pokemon_id);
      response.data.image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + format(response.data.id) + ".png"
      response.data.name = capitalizeFirstLetter(response.data.name)
      initPokemon(response.data)

      setLoading(false);
    }

    loadPokemon();
  }, [])

  function format (num) {
    while ((num+"").length < 3) {
      num = "0" + num;
    }
    return num
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (loading) {
    return <h1></h1>
  }

  let array = yourPokemon.flavor_text_entries === undefined ? [] : yourPokemon.flavor_text_entries;
  let array2 = yourPokemon.genera === undefined ? [] : yourPokemon.genera;

  return (
      <div className="wrapper framed neutral">
        <h1>{yourPokemon.name}</h1>
        <img className="center framed" src={yourPokemon.image} alt={yourPokemon.name} />

        <br />
          {array2.map(function(object){
              if (object.language.name === 'en') {
                
                return (
                      <span className="centered">{object.genus}</span>
                );
              }
            })}
  
        <br />
        <br />

        <table>
          
          <tbody>

          {array.map(function(object, i){
              if (object.language.name === 'en') {
                
                return (
                  <tr>
                    <td className="framed">
                      {object.flavor_text}
                    </td>
                  </tr>
                );
              }
            })}
  
          </tbody>
        </table>
      </div>
  );
}

export default Results;

// {/* {Array.from(yourPokemon.flavor_text_entries).map(function(object, i){
              
//               if (object.language.name === 'en') {
//                 return (
//                   <tr>
//                     <td>
//                       {object.flavor_text}
//                     </td>
//                   </tr>
//                 );
//               }
//             })} */}