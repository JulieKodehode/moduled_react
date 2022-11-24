import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";

const PokemonCard = () => {
	const pokemonData = useContext(PokemonContext);
	return (
		// Very basic styling, will be updated.
		<div style={{ border: "2px solid #111", padding: "10px" }}>
			{/* Using a conditional to check if its true; if false pokemonData(nothing happens) if true pokemonData.name(a name appears) */}
			<h1>{pokemonData && pokemonData.name}</h1>

			{/* If false pokemonData(nothing happens), if true pokemonData.Sprites.front_default(<img/> happens) */}
			{pokemonData && pokemonData.sprites.front_default && (
				<img src={pokemonData.sprites.front_default} alt="snorlax the pokemon" />
			)}
		</div>
	);
};

export default PokemonCard;
