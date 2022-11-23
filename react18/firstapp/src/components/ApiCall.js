import { useState, useEffect } from "react"
import usePokemon from "./usePokemon"

export default function ApiCall(props){

const [pokemon, setPokemon, getPokemon] = usePokemon()

    return <div>
        {pokemon.map((poke) => <div>
            <h1>{poke.name}</h1>
            <img src={poke.img} alt={poke.name}/>
        </div>)}

    </div>
}