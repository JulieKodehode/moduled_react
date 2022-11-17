import { useContext } from "react";

import MyContext from "../Context/MyContext";

const Selector = () => {
	// const { state, setState } = props;
	const stateObject = useContext(MyContext);

	// HandleChange is a common way to name the onChange handleClick
	// You are wrong somewhere
	function handleChange(event) {
		stateObject.setState(() => {
			return event.target.value;
		});
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Type input here"
				value={stateObject.state}
				// onChange={(event) => handleChange(event)}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Selector;

// F2 to change variable name, rename symbol.
