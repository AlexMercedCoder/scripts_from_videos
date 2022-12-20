export const pokemonLoader = async () => {
    return (await fetch("https://dummydata.netlify.app/pokedex.json")).json()
}

export const singlePokemonLoader = async ({params}) => {
    const data = await (await fetch("https://dummydata.netlify.app/pokedex.json")).json()
    console.log(data)
    console.log(params.id)
    const pokemon = await data.pokemon.find((p) => {
    return p.id === parseInt(params.id)
    })
    console.log(pokemon)
    return pokemon
}