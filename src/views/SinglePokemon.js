import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

function SinglePokemon() {
    const { id } = useParams()
    const url = `https://5fcdce6f603c0c0016487cfd.mockapi.io/pokemon/${id}`;
    const [pokemon, setPokemon] = useState({
        loading: false,
        data: null,
        error: false
    })

    function showContent() {
        let cover = document.querySelector(".singlePokeCover");

        cover.classList.toggle("hideCover")
    }

    let content = null

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

    if(pokemon.loading) {
        content = <Loader />
    }

    if(pokemon.error) {
        content =
        <div>
            <h1>Pokemon Not Found</h1>
        </div>
    }

    if(pokemon.data) {
        content =
        <div>
            <div className="fixed singlePokeCover" style={{backgroundColor: pokemon.data.colour}}>
                <img src={`../${pokemon.data.image}`}></img>
                <h2>{pokemon.data.number}</h2>
                <h3>{pokemon.data.name}</h3>
                <span onClick={() => showContent()}>Read More</span>
            </div>

            <div className="wait singlePokemonCon">
                <div className="imgCon" style={{backgroundImage: `url(../${(pokemon.data.image)})`, backgroundColor: pokemon.data.colour}}></div>
                <div className="contentCon">
                    <span className="singlePokeClose" onClick={() => showContent()}><h3>X</h3></span>
                    <div className="type">
                        <h3>Type:</h3>
                        <span style={{color: pokemon.data.typeColour}}>{pokemon.data.type}</span>
                    </div>
                    <div className="statWrapper">
                        <div className="height">
                            <h3>Height</h3>
                            <span>{pokemon.data.height}</span>
                        </div>
                        <div className="weight">
                            <h3>Weight</h3>
                            <span>{pokemon.data.weight}</span>
                        </div>
                    </div>
                    <div className="moveCon">
                        <h3>Common Moves:</h3>
                        <div className="moveWrapper">
                            <div><span>{pokemon.data.move1}</span></div>
                            <div><span>{pokemon.data.move2}</span></div>
                            <div><span>{pokemon.data.move3}</span></div>
                            <div><span>{pokemon.data.move4}</span></div>
                        </div>
                    </div>
                    <div className="singlePokeBack"><Link to="/pokemon">Back To List</Link></div>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default SinglePokemon