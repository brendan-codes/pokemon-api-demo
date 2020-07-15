import React, {useState} from 'react';
import Pokemon from './Pokemon';
import { Link } from '@reach/router';

const DisplayPokemon = ({pokemon}) => {

    return (
        <div>
            <div>
                <p>Show All</p>
                <p><Link to={`/find/`}>Find</Link></p>
            </div>
            {
                pokemon.map((val, idx) =>
                   <Pokemon key={idx} thisPokemon={val} />
                )
            }
        </div>
    )
}

export default DisplayPokemon;