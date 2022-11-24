import { useState, useEffect } from "react";

console.log("U WOKRING BRO??");

const GetPokemon = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
			console.log(response);
			const data = await response.json();
			console.log(data);

			// console.log(data.name);
			// console.error(data);
			setData(data.name, data.sprites.default_front);
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
			<img src={data.sprites.front_default} />
		</div>
	);
};

// console.log(FetchPokemon);

export default GetPokemon;
