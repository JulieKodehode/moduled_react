import FetchPokemon from "./Pokemons/FetchPokemon";

const Pokemons = () => {
	return (
		// className inserted for background and center, no additional css.
		<div className="App | App-header">
			<h1>Pokemons are cool</h1>
			<FetchPokemon />
		</div>
	);
};

export default Pokemons;
