import React, { useState } from "react";

// TextInput is Counter's child
import TextInput from "./TextInput";

// The function is what react is looking for to compare and update using states, so anything above or under the function it self wont be re-run.
console.log("I will only run once");
// You could declare a variable outside and call it inside the function

const Counter = () => {
	// Syntax for useState: state is the property(prop), setState is the function we are going to use to update the state, useState(0) have a number and 0 is nice(could be any number)
	// Changing from state in params to count for more meaningful names
	const [count, setCount] = useState(0);

	// We are getting an array, first is "Some state", and second is the setState function. (getting all the props)
	// const someState = useState("Some state text");
	// console.log(someState);

	// Using handleClick because what does it do? Handle a click.
	const handleClick = () => {
		// setCount(count + 1);
		// Considered bad practice to just do count + 1 because you might update count between state updates, so to avoid this we are passing it a function which is given the oldCount + 1 instead
		// Using the old state and modifying that accordingly
		// This is a callback function(?)
		setCount((oldCount) => {
			return oldCount + 1;
		});
	};

	return (
		// React.Fragment is the "div", signaling we are using React.Fragment we are telling the browser we only want to return the one thing so we want a fragment
		// Div is not necessary but quick styling for easier to look for on a long page. Find a way to do this differently.
		<div style={{ backgroundColor: "green" }}>
			<React.Fragment>
				<h1>{count}</h1>
				<button
					onClick={() => {
						handleClick();
					}}>
					Increment
				</button>
				<TextInput />
			</React.Fragment>
		</div>
	);
};
export default Counter;
