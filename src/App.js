// EVERYTHING in App.js from before is moved TO routes/home.jsx

// Import react-route-dom
import { Routes, Route } from "react-router-dom";

// Import pages from routes
import Home from "./routes/Home";
import Counter from "./routes/Counter";
import CatFacts from "./routes/CatFact";
import Pokemons from "./routes/Pokemons";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="Home" element={<Home />} />
			<Route path="Counter" element={<Counter />} />
			<Route path="CatFact" element={<CatFacts />} />
			<Route path="Pokemons" element={<Pokemons />} />
			<Route
				path="*"
				element={
					<main>
						<p>There is nothing here</p>
					</main>
				}
				// * will match when nothing else matches
			/>
		</Routes>
	);
};

export default App;
// Exporting App to index js to be imported there.
