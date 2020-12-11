import React from 'react'
import { Link } from "react-router-dom"

function PokemonCard(props) {
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${props.pokemon.id}`}>
                <img src={`../${props.pokemon.image}`} alt="Pokemon" alt={props.pokemon.name}></img>
            </Link>
            <Link to={`/pokemon/${props.pokemon.id}`}>
                <h2>{props.pokemon.name}</h2>
            </Link>
        </div>
    )
}

export default PokemonCard