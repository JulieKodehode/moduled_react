import { useState, useEffect } from "react";

// You can also have the async function outside of the useEffect, and just call the function.
async function fetchData(callback) {
	const response = await fetch("https://catfact.ninja/facts");
	const data = await response.json();
	// console.log(data.data);

	callback(data.data);
	// Depending on the data you're fetching you might have to change the (data) to get what you want from the fetch
}

const CatFactInput = () => {
	// Might be better to store in top-level(app.js), but works from here.
	// Null to showcase we don't have any data yet
	const [fetchedData, setFetchedData] = useState(null);
	// console.log(fetchedData);

	// Using useEffect to minimize the re-rendering of useState.
	useEffect(
		() => {
			// Setup

			// console.log("This effect was run");

			// Calling the function from above, will only run when the content of the array changes since its outside
			fetchData(setFetchedData);

			// Inside function
			// Setting up a simple fetch using async function.
			// async function FetchData() {
			// 	const response = await fetch();
			// 	const data = await response.json();

			// 	setFetchedData(data);
			// 	// Depending on the data you're fetching you might have to change the (data) to get what you want from the fetch
			// }

			// FetchData();
		},
		// Dependency

		[]
		// Use useEffect when you want more control on your functionality on your component, only be primitive types of js(boolean, string and number return the actual values. NOT array and objects because they return a reference to the value and not the value)
	);

	return (
		<div>
			<ul>
				{/* Checking if the statement is true, and ending if its false */}
				{/* Taking the array and generating a new array using the map method and giving it a new return */}
				{/* <li>
					{fetchedData &&
						fetchedData.map((element) => {
							return <p>{element.fact}</p>;
						})}
				</li> */}

				{/* Getting fact nr1[0] instead of runnng map and getting every fact */}
				<li>{fetchedData && fetchedData[1].fact}</li>
			</ul>
		</div>
	);
};

export default CatFactInput;
