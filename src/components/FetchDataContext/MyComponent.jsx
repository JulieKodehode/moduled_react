import { useContext } from "react";
import DataContext from "./DataContext";

function MyComponent() {
	const pokemonData = useContext(DataContext);
	return (
		<>
			<h1>{pokemonData && pokemonData.name}</h1>

			{/* {pokemonData && pokemonData.sprites.default_front && (
				<img src="pokemonData.sprites.default_front" alt="pokemon" />
			)} */}

			{pokemonData && pokemonData.sprites.front_default && (
				<img src={pokemonData.sprites.front_default} alt="" />
			)}
		</>
	);
}

export default MyComponent;
