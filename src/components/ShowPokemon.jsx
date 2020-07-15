import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
//  redux, state managers
const ShowPokemon = ({id}) => {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        id: "",
        sprites: {
            front_default: ""
        }
    })

    const findOnePokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) =>{
                console.log(response);
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() =>{
        findOnePokemon(id);
    }, [])

    return (
        <div>
            <p>Name: {onePokemon.name}</p>
            <img src={onePokemon.sprites.front_default}></img>
            <Link to="/">Go back...</Link>
        </div>
    )
}

export default ShowPokemon;