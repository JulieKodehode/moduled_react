// Libraries
import { useContext } from "react";

import MyContext from "../Context/MyContext";

const Display = () => {
	// const {state} = props;

	const stateObject = useContext(MyContext);

	return (
		<div>
			<h1>Display Component</h1>
			{/* Why stateObject? */}
			<p style={{ backgroundColor: "lightblue" }}>{stateObject.state}</p>
			{/* <p>{string}</p> */}
		</div>
	);
};

export default Display;
