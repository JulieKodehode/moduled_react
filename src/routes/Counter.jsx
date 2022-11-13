import React, { useState } from "react";
import "../index.css";

// Styling
// import CounterStyles from "./Counter/CounterStyles";

// CounterTitle
import CounterTitle from "./Counter/CounterTitle";

// TextInput is Counter's child
import TextInput from "./Counter/TextInput";

const Counter = () => {
	// Syntax for useState: state is the property(prop), setState is the function we are going to use to update the state, useState is what we are using to track the state in a function component (in this case a state from old to new)

	// Changing from state to count for more meaningful names
	const [count, setCount] = useState(0);

	// Using handleClick because what does it do? Handle a click. Generic name.
	// Changing from handleClick to increment and decrement because I want two.
	const increment = () => {
		// setCount(count + 1);
		// Considered bad practice to just do count + 1 because you might update count between state updates, so to avoid this we are passing it a function which is given the oldCount + 1 instead

		// Using the old state and modifying that accordingly
		setCount((oldCount) => {
			return oldCount + 1;
		});
	};

	// Adding a decrement handle
	const decrement = () => {
		setCount((newCount) => {
			return newCount - 1;
		});
	};

	return (
		// React.Fragment is the "div", using react.fragment instead of div will not update the dom whereas div will add another div html element to the dom.
		// <div className="CounterStyles">

		<div className="App | App-header">
			{/* This is the background and the centering*/}
			{/* Div className is background and center */}

			<div style={{ backgroundColor: "green" }}>
				{/* Styling the "box" */}
				{/* <React.Fragment> */}
				{/* A title and description of this side */}
				<CounterTitle />

				{/* A h1 containing the count, count is between newCount and oldCount and is what useState tracks when buttons activate(?) */}
				<h1>{count}</h1>

				{/* A button with increment */}
				<button
					onClick={() => {
						increment();
					}}>
					Increment
				</button>

				{/* A button with decrement */}
				<button
					onClick={() => {
						decrement();
					}}>
					Decrement
				</button>

				{/* A text input that will be displayed under with the text inputted */}
				<TextInput />
				{/* </React.Fragment> */}
			</div>
		</div>
	);
};
export default Counter;
