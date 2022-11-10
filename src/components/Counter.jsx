import React, { useState } from "react";

// TextInput is Counter's child
import TextInput from "../components/Counter/TextInput";

const Counter = () => {
	// Syntax for useState: state is the property(prop), setState is the function we are going to use to update the state, useState(0) have a number and 0 is nice(could be any number)
	// Changing from state in params to count for more meaningful names
	const [count, setCount] = useState(0);

	// We are getting an array, first is "Some state", and second is the setState function. (getting all the props)
	// const someState = useState("Some state text");
	// console.log(someState);

	// Using handleClick because what does it do? Handle a click.
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		// React.Fragment is the "div", signaling we are using React.Fragment we are telling the browser we only want to return the one thing so we want a fragment
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
