// Transfer the api cat facts into its own file
import CatFactInput from "./CatFactInput";

const CatFacts = () => {
	return (
		<div style={{ backgroundColor: "purple" }}>
			<h2>Here's a cat fact:</h2>
			<CatFactInput />
		</div>
	);
};

export default CatFacts;
