import React, {useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const FindPokemon = (props) => {

    const [number, setNumber] = useState("");
    const [onePokemon, setOnePokemon] = useState({
        name: "",
        id: "",
        sprites: {
            front_default: ""
        }
    })

    const [errorMessage, setErrorMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        findOnePokemon(number);
        setNumber("");
    }

    const findOnePokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) =>{
                console.log(response);
                setErrorMessage("");
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage("That is not a pokemon!");
            })
    }

    return (
        <div>
            <div>
                <p><Link to="/">Show All</Link></p>
                <p>Find</p>
            </div>
            <form onSubmit={submitHandler}>
                <input type="string" value={number} onChange={(e) => {setNumber(e.target.value)}}></input>
                <input type="submit" value="Search"></input>
            </form>

            <div>
                {errorMessage}
                <p>Name: {onePokemon.name}</p>
                <img src={onePokemon.sprites.front_default}></img>
            </div>
        </div>
    )
}

export default FindPokemon;