import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

const FetchSample = () => {
	const [data, setData] = useState(null);

	// Open fetch inside function using then to extract
	// Option A - old style
	// useEffect(() => {
	// 	fetch("url")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	// Old could be function outside and call inside
	// Option B - ES6 style
	useEffect(() => {
		async function getData() {
			const response = await fetch("url");
			const data = response.json();

			console.log(data);
			setData(data);
		}

		getData();
	}, []);

	// Option C - creating a custom hook (needs its own .jsx for fetch)
	// This is outside the scope of this course, self study
	// const [fetchedData, isLoading, error] = useFetcher(url);

	return (
		<div>
			<h1>{data && data.name}</h1>
		</div>
	);
};

export default FetchSample;
