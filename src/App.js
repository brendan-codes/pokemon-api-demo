import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';

function App() {

  const [pokemon, setPokemon] = useState([
    {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
  ])

  const get20pokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    get20pokemon();
  })

  return (
    <div className="App">
      <DisplayPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
