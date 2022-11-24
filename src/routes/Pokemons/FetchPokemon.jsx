// Library
import { useState, useEffect } from "react";

// Displayed data
import PokemonCard from "./PokemonCard";

// Context
import PokemonContext from "../../contexts/PokemonContext";

const FetchPokemon = () => {
	const [state, setState] = useState(null);

	useEffect(
		() => {
			async function getPokemonData() {
				const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");
				// console.log(response);

				const data = await response.json();
				// console.log(pokemonData);
				// console.error(pokemonData); // Used to check what the error was(it was lost in promise, setState(Data) returned promise(?))

				setState(data);
			}

			getPokemonData();
			// console.log("useEffect was run");
		},
		[
			/*No dependency, only want to run getPokemonData once since API*/
		]
	);

	return (
		<PokemonContext.Provider value={state}>
			<PokemonCard />
		</PokemonContext.Provider>
	);
};
// console.log(FetchPokemon);

// console.log(PokemonContext);

export default FetchPokemon;
