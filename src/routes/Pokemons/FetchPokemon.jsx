import { useState, useEffect } from "react";

async function FetchPokemon(callback) {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); /* Modify url */
	// console.log(response);
	const data = await response.json();
	// console.log(data);
	// console.log(data.name);

	callback(data.name);
}

console.log("U WOKRING BRO??");

const GetPokemon = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log("useEffect was run");

		FetchPokemon(setData);
		// console.log(getPokeApi); // function
		// console.log(setPokeApi); // unidentified
	}, []);

	return (
		<div>
			<p>something</p>
			<>
				{data &&
					data.map(() => {
						return (
							<div>
								<h1 key="name">{data.name}</h1>
								<img key="sprites.default_front">{data.sprites.default_front}</img>
							</div>
						);
					})}
			</>
		</div>
	);
};

// console.log(FetchPokemon);

export default FetchPokemon;
