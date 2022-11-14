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
			<input type="text" onChange={(event) => handleChange(event)} value={textInput} />
			<h4 className={style.TextInputspace}>{textInput}</h4>
		</div>
	);
};

export default TextInput;

/* Ideally I would like to make the text "disappear" from the input when its displayed, and save the display with a storage to make it into some sort of todo-list, but I will not do that in this task. As using the useState was the main goal, and it is used and displayed now. */
