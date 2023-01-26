import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams  } from "react-router-dom";
import axios from 'axios';
import './styles/css-pokemon-gameboy.css';

function Results() {

  const [loading, setLoading] = useState(false);
  const [yourPokemon, initPokemon] = useState([]);
  const [viewableEntry, loadEntrie] = useState("");
  const [allEntries, loadAllEntries] = useState([]);

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

      response.data.genus = response.data.genera.find(element => element.language.name === 'en').genus

      let flavor_array = response.data.flavor_text_entries.filter(item => item.language.name === 'en');
      const unique = flavor_array.filter(
        (obj, index) =>
        flavor_array.findIndex((item) => item.flavor_text === obj.flavor_text) === index
      );
      loadEntrie(unique[0].flavor_text)
      loadAllEntries(unique);

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
    return <h1>Loading... Please wait...</h1>
  }

  //let array = yourPokemon.flavor_text_entries === undefined ? [] : yourPokemon.flavor_text_entries;
  let array2 = yourPokemon.genera === undefined ? [] : yourPokemon.genera;

  //let flavor_array = array.filter(item => item.language.name === 'en');

  function handleShowOtherEntry() {

    // find current index
    var current_obj = allEntries.find(element => element.flavor_text === viewableEntry);
    var current = allEntries.indexOf(current_obj);

    // increase by one, but not out of bounds
    current++;
    if (current >= allEntries.length) {
      current = 0;
    }
    
    loadEntrie(allEntries[current].flavor_text)
  }
  

  return (
      <div className="wrapper framed neutral">
        <h1>{yourPokemon.name}</h1>
        <img className="center framed" src={yourPokemon.image} alt={yourPokemon.name} />

        <br />
          {/* {array2.map(function(object){
              if (object.language.name === 'en') {
                
                return (
                      <span key={Math.random.toString()} className="centered">{object.genus}</span>
                );
              } else {
                return (
                  <></>
                )
              }
            })} */}

            {
              <span key={Math.random.toString()} className="centered">{yourPokemon.genus}</span>

            }
  
        <br />
        <br />

        <table>
          
          <tbody>

          {/* {flavor_array.map(function(object, i){
                return (
                  <tr>
                    <td className="framed">
                      {object.flavor_text}
                    </td>
                  </tr>
                );
            })} */}
            <tr>
              <td className="framed">
                {viewableEntry}
              </td>
            </tr>
  
          </tbody>
        </table>

        <br />
        <button type="button" className="button" onClick={handleShowOtherEntry}>Show Other Entry</button>

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