import { useState, useEffect } from "react";

// Styles
import style from "./CatFactStyles.module.css";

// You can also have the async function outside of the useEffect, and just call the function.
async function fetchData(callback) {
	const response = await fetch("https://catfact.ninja/facts");
	console.log(response);
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
		},
		// Dependency

		[]
		// Use useEffect when you want more control on your functionality on your component, only be primitive types of js(boolean, string and number return the actual values. NOT array and objects because they return a reference to the value and not the value)
	);

	return (
		<div>
			{/* Taking the array and generating a new array using the map method and giving it a new return */}
			<p className={style.fetchedData}>
				{/* Checking if the statement is true, and ending if its false */}
				{fetchedData &&
					fetchedData.map((element) => {
						return <p>{element.fact}</p>;
					})}
			</p>

			{/* Getting fact nr1[0] instead of running map and getting every fact */}
			{/* <ul><li className={style.fetchedData}>{fetchedData && fetchedData[1].fact}</li></ul> */}
		</div>
	);
};

export default CatFactInput;
