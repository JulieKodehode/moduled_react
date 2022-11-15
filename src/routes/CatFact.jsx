// Transfer the api cat facts into its own file
import CatFactInput from "./CatFacts/CatFactInput";

// Styles
import style from "./CatFacts/CatFactStyles.module.css";

// Header/Sign
import Header from "../components/Header";
import Sign from "../components/Sign";

const CatFacts = () => {
	return (
		<div className="App | App-header">
			{/* Div className is background and center */}
			<Header />
			<div className={style.CatFact}>
				<h2>Here's a cat fact:</h2>
				<CatFactInput />
			</div>
			<Sign />
		</div>
	);
};

export default CatFacts;
