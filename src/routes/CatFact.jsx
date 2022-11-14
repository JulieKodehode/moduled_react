// Transfer the api cat facts into its own file
import CatFactInput from "./CatFacts/CatFactInput";

const CatFacts = () => {
	return (
		<div className="App | App-header">
			{/* Div className is background and center */}
			<div style={{ backgroundColor: "purple" }}>
				<h2>Here's a cat fact:</h2>
				<CatFactInput />
			</div>
		</div>
	);
};

export default CatFacts;
