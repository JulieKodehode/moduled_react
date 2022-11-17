import { useState, useEffect } from "react";

// Styles
import style from "./CatFactStyles.module.css";

async function fetchData(callback) {
	const response = await fetch("https://catfact.ninja/facts");
	// console.log(response);
	const data = await response.json();
	// console.log(data.data);

	callback(data.data);
}

const CatFactInput = () => {
	// Null to showcase we don't have any data yet
	const [fetchedData, setFetchedData] = useState(null);
	// console.log(fetchedData);

	// Using useEffect to minimize the re-rendering of useState.
	useEffect(
		() => {
			// Setup

			// console.log("This effect was run");

			// Calling the function from above, will only run when the content of the array changes(will not change since its empty) since its outside
			fetchData(setFetchedData);
		},
		// Dependency

		[
			/* 
			Contains an Array. When the array changes, the function above reruns. My array is empty because I do not want it to rerun.
			*/
		]

		// Use useEffect when you want more control on your functionality on your component, only be primitive types of js(boolean, string and number return the actual values. NOT array and objects because they return a reference to the value and not the value)

		// To avoid having to re run everything, we use useEffect to limit when the code is going to run. We do not want to do a new fetch request every time something changes, we only want to do that once. So we use useEffect to define when its going to run. (Ergo once)
	);

	return (
		<div>
			<ul className={style.fetchedData}>
				{/* Using conditionals(!CHECK!) to check if the statement is true and then run the map function return */}
				{fetchedData &&
					fetchedData.map((element, fact /* element could be anything, just a name */) => {
						// console.log(element);
						// Taking the array and generating a new array using the map method and giving it a new return
						// .fact because thats the object key I want to extract(?)
						// return <li>{element.fact}</li>;

						// Error:Each child in a list should have a unique "key" prop. Key is fact(?)
						return <li key={fact}>{element.fact}</li>;
					})}
			</ul>

			{/* Getting fact nr1[0] instead of running map and getting every fact */}
			{/* <ul><li className={style.fetchedData}>{fetchedData && fetchedData[0].fact}</li></ul> */}
		</div>
	);
};

export default CatFactInput;
