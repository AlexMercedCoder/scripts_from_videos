import pokemon from "./pokedex";

function App() {
  return (
    <div className="App">
      <h1>The Pokedex</h1>
      <div className="pokemon-container">
        {pokemon.map(poke => {
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
