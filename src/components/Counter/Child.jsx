const Child = () => {
	// const FetchData = () => {};
	// FetchData();
	// console.log will come for every keystroke

	// Everything inside Child will rerun every time the state changes.

	console.log("We render");
	return <p>I am a child of the input field</p>;
};

export default Child;
