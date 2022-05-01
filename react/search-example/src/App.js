import pokemon from "./pokedex";
import {useState, useRef} from "react"
import useSearch from "./useSearch";

function App() {

  const [displayedPokemon, filterPokemon, resetPokemon] = useSearch(pokemon, (term) => {
    return pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(term.toLowerCase())
    })
  })

  const inputRef = useRef(null)


  const handleSubmit = (event) => {
    const search = inputRef.current.value
    if (search === ""){
      resetPokemon()
      return 1
    }
    filterPokemon(search)
  }

  return (
    <div className="App">
      <h1>The Pokedex</h1>
      Search: <input type="text" ref={inputRef}/> <input onClick={handleSubmit} type="submit"/>
      <div className="pokemon-container">
        {displayedPokemon.map(poke => {
          return <div key={poke.id}className="pokemon">
            <h2>{poke.name}</h2>
            <img src={poke.img} alt={poke.name}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
