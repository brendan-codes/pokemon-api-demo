import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Pokemon = ({thisPokemon}) => {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
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
    })

    return (
        <div>
            <p>{onePokemon.name}</p>
            <img src={onePokemon.sprites.front_default}></img>
        </div>
    )
};

export default Pokemon;