import { useState, useEffect } from "react";

// Failed to fetch? Bitch please.
// Some kind of CORS something fail
async function getPokeApi(callback) {
	const response = await fetch("https://pokeapi.co/"); /* Modify url */
	// console.log(response);
	const data = await response.json();
	// console.log(data);

	callback(data.data);
}

console.log("U WOKRING BRO??");

const FetchPokemon = (data) => {
	const { gotPokeApi, setPokeApi } = useState(null);

	useEffect(() => {
		getPokeApi(setPokeApi);
		// console.log(getPokeApi); // function
		// console.log(setPokeApi); // unidentified
	}, []);

	return (
		<div>
			<p>something</p>
		</div>
	);
};

// console.log(FetchPokemon);

export default FetchPokemon;
