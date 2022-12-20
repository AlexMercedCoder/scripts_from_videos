import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
function Pokemon(){

    const loaderData = useLoaderData()
    console.log(loaderData)
    const pokemon = loaderData.pokemon

    console.log(pokemon)

    return <div className="pokemon">
        {pokemon.map(p => <section>
            <h2>{p.name}</h2>
            <img src={p.img} alt={p.name}/>
            <Link to={`/pokemon/${p.id}`}><button>View Details</button></Link>
        </section>)}
    </div>
}

export default Pokemon