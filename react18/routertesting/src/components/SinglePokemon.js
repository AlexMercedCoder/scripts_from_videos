import { useLoaderData } from "react-router-dom";

function SinglePokemon(){
    const pokemon = useLoaderData()

    return <div>
        <h1>{pokemon.name}</h1>
    </div>
}

export default SinglePokemon