import "./App.css";
import Pokecard from "./components/Pokecard";
import pokemons from "./pokemons";

function createPokecard(pokemon) {
  function padId(num, length) {
    return String(num).padStart(length, "0");
  }

  return (
    <Pokecard
      key={pokemon.id}
      id={pokemon.id}
      paddedId={padId(pokemon.id, 3)}
      name={pokemon.name.english}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.map(createPokecard)}
    </div>
  );
}

export default App;
