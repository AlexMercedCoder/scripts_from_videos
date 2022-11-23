import { useState, useEffect } from "react";

export default function usePokemon(){

    const [pokemon, setPokemon] = useState([])

    async function getPokemon(){
        const response = await fetch("https://dummydata.netlify.app/pokedex.json")
        const data = await response.json()
        setPokemon(data.pokemon)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return [pokemon, setPokemon, getPokemon]


}