// Libraries
import { useState, createContext } from "react";

// Context
import MyContext from "../Context/MyContext";

// Components
import Display from "../components/Display";
import Selector from "../components/Selector";

const DisplaySelector = () => {
	const { state, setState } = useState("");

	return (
		// We are calling .provider on that context to get higher priority, and set a new value that will be available throughout the component
		// <MyContext.Provider value={"this is stored in our context"}>

		<MyContext.Provider value={{ state, setState }}>
			{/* No using div, give a proper parent NO THANKS*/}
			<div style={{ backgroundColor: "turquoise", marginTop: "20px" }}>
				{/* Using props to set states */}
				{/* <Selector state={state} setState={setState} /> */}
				{/* <Display state={state} /> */}

				{/* Not using props */}
				<Selector />
				<Display />
			</div>
		</MyContext.Provider>
	);
};

export default DisplaySelector;
