import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";

// Header/Sign
import Header from "../../components/Header";
import Sign from "../../components/Sign";

const PokemonCard = () => {
	const pokemonData = useContext(PokemonContext);
	return (
		<main>
			<Header />
			{/* Very basic inline styling, will be updated. */}
			<div style={{ border: "2px solid #111", padding: "10px" }}>
				{/* Using a conditional to check if its true; if false pokemonData(nothing happens) if true pokemonData.name(a name appears) */}
				<h1 style={{ textTransform: "uppercase" }}>{pokemonData && pokemonData.name}</h1>

				{/* If false pokemonData(nothing happens), if true pokemonData.Sprites.front_default(<img/> happens) */}
				{pokemonData && pokemonData.sprites.front_default && (
					<img
						style={{ height: "200px", width: "200px" }}
						src={pokemonData.sprites.front_default}
						alt="snorlax the pokemon"
					/>
				)}
			</div>
			<Sign />
		</main>
	);
};

export default PokemonCard;
