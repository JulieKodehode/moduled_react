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
				<h2>Here are some fun cat facts:</h2>
				<CatFactInput />
				{/* Making an option to reload the page to get a new fact? */}
			</div>
			<Sign />
		</div>
	);
};

export default CatFacts;
