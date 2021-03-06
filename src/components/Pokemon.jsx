import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Pokemon = ({thisPokemon}) => {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        id: "",
        sprites: {
            front_default: ""
        }
    });

    // data.sprites.front_default

    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    }, [])

    return (
        <div class="cell">
            <p>{onePokemon.name}</p>
            <img src={onePokemon.sprites.front_default}></img>
            <Link to={`/show/${onePokemon.id}`}>{onePokemon.name}</ Link>
        </div>
    )
};

export default Pokemon;