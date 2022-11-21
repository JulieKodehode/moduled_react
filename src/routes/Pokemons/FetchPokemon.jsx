import { useState, useEffect } from "react";

// Bitch ain't working outside
// async function FetchPokemon(callback) {
// 	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); /* Modify url */
// 	// console.log(response);
// 	const data = await response.json();
// 	// console.log(data);
// 	// console.log(data.name);

// 	callback(data.name);
// }

console.log("U WOKRING BRO??");

const GetPokemon = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
			const data = await response.json();

			// console.log(data.name);
			// console.error(data);
			setData(data.name);
		}

		getData();
		// console.log("useEffect was run");

		// FetchPokemon(setData);
		// console.log(getPokeApi); // function
		// console.log(setPokeApi); // unidentified
	}, []);

	return (
		<div>
			{/* <p>something</p> */}
			<h1>{data}</h1>
		</div>
	);
};

// console.log(FetchPokemon);

export default GetPokemon;
