import { useState } from "react";

// Styling
import style from "./CounterStyles.module.css";

const TextInput = () => {
	const [textInput, setTextInput] = useState("");

	// We need to pass an event for something to happen
	const handleChange = (event) => {
		const newString = event.target.value;

		setTextInput(() => {
			return newString;
		});
	};

	return (
		<div className={style.TextInput}>
			{/* Using useState to track for changes in the setTextInput to state the value of the textInput*/}
			<input
				placeholder="type something here"
				type="text"
				onChange={(event) => handleChange(event)}
				value={textInput}
			/>
			<h4 className={style.TextInputspace}>{textInput}</h4>
		</div>
	);
};

export default TextInput;

/* Ideally I would like to have this TextInput in its own page again, and make something more of it. Like a todo-list of some sort. But as using the useState was the main goal, I wanted to show a way to use useState displaying a string to show that I have understood the concept of using it. */
