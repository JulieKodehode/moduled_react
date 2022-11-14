import React, { useState } from "react";

// Styling
import style from "./Counter/CounterStyles.module.css";

// CounterTitle
import CounterTitle from "./Counter/CounterTitle";

// TextInput
import TextInput from "./Counter/TextInput";

// Header/Footer
import Header from "../components/Header";
import Sign from "../components/Sign";

const Counter = () => {
	// Syntax for useState: state is the property(prop), setState is the function we are going to use to update the state, useState is what we are using to track the state in a function component (in this case a state from old to new)

	// Changing from state to count for more meaningf	ul names
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
		// <React.Fragment>
		// React.Fragment is the parent inside return, using react.fragment instead of div will not update the dom whereas div will add another element to the dom. Since react.fragment is not an element, it cant hold a id/class or get styled.
		// </React.Fragment>

		<div className="App | App-header">
			{/* This is the background and the centering - global css*/}
			<Header />

			<div className={style.CounterStyles}>
				{/* Styling the "box" */}

				{/* A title and description of this side */}
				<CounterTitle />

				{/* A h1 containing the count, count is between newCount and oldCount and is what useState tracks when buttons activate are clicked to increment or decrement the count value */}
				<h1>{count}</h1>

				{/* A button with increment */}
				<button
					className={style.Increment}
					onClick={() => {
						increment();
					}}>
					Increment
				</button>

				{/* A button with decrement */}
				<button
					className={style.Decrement}
					onClick={() => {
						decrement();
					}}>
					Decrement
				</button>

				{/* A text input that will be displayed under with the text inputted */}
				<TextInput />
			</div>

			<Sign />
		</div>
	);
};
export default Counter;
