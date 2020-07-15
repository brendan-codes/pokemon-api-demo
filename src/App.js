import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router';
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import ShowPokemon from './components/ShowPokemon';
import FindPokemon from './components/FindPokemon';

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

  // useEffect runs when the page loads
  useEffect(() => {
    get20pokemon();
  }, [])

  return (
    <div className="App">
      <Router>
        <DisplayPokemon pokemon={pokemon} path="/"/>
        <FindPokemon path="/find/" />
        <ShowPokemon path="/show/:id" />
      </Router>
    </div>
  );
}

export default App;
