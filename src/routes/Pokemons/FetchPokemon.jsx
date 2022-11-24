import { useState, useEffect } from "react";

// console.log("U WORKING BRO??");

const GetPokemon = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");
			console.log(response);
			const data = await response.json();
			console.log(data);

			// console.log(data.name);
			// console.error(data);
			setData(data);
		}

		getData();
		// console.log("useEffect was run");

		// FetchPokemon(setData);
		// console.log(getPokeApi); // function
		// console.log(setPokeApi); // unidentified
	}, []);

	return (
		<div style={{ border: "2px solid #111", padding: "10px" }}>
			{/* <p>something</p> */}
			<h1>{data && data.name}</h1>

			{data && data.sprites.front_default && (
				<img src={data.sprites.front_default} alt="snorlax the pokemon" />
			)}
		</div>
	);
};

// console.log(FetchPokemon);

export default GetPokemon;
