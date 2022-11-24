// Library
import { useState, useEffect } from "react";

// Components
import DataContext from "./DataContext";
import MyComponent from "./MyComponent";
import ChangePokemon from "./ChangePokemon";

function App() {
	// Since data object null
	const [state, setState] = useState(null);
	const [pokemonId, setPokemonId] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

			if (!response.ok) {
				console.warn(response.status);
				console.warn("Pokemon not found");
				return;
			}

			const data = await response.json();

			setState(data);
		}
		fetchData();
	}, [pokemonId]);

	return (
		<>
			<DataContext.Provider value={state}>
				<button onClick={() => ChangePokemon(-1, setPokemonId)}>Prev</button>
				<button onClick={() => ChangePokemon(+1, setPokemonId)}>Next</button>

				<MyComponent />
			</DataContext.Provider>
		</>
	);
}

export default App;
