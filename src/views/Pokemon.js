import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Loader from '../components/Loader'
import PokemonCard from '../components/PokemonCard'

function Pokemon() {
    const url = `https://5fcdce6f603c0c0016487cfd.mockapi.io/pokemon`;
    const [pokemon, setPokemon] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setPokemon({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setPokemon({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setPokemon({
                loading: false,
                data: false,
                error: true
            })
        })
    }, [url])

    let content = null

    if(pokemon.loading) {
        content = <Loader />
    }

    if (pokemon.error) {
        content = 
        <div className="error">
            <h1>Pokemon not found</h1>
        </div>
    }

    if(pokemon.data) {
        content =
        pokemon.data.map((pokemon, key) =>
            <PokemonCard
                pokemon={pokemon}
                key={key}
            />
        )
    }

    return (
        <div className="pokemonCon">
            {content}
        </div>
    )
}

export default Pokemon