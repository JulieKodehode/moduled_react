// Pre entered content
import logo from "./logo.svg";
import "./App.css";

// Import from component/Header.jsx
import Header from "./components/Header";

// Import from component/Sign.jsx
import Sign from "./components/Sign";

// Import from component/InfoCard/InfoCard.jsx
import InfoCard from "./components/InfoCard/InfoCards";

// Import from ./components/CarsUsingProps.jsx
import CardsUsingProps from "./components/CardsUsingProps/CardsUsingProps.jsx";

// Import global css
import "./index.css";

// Pre entered content
// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// Only return one parent, but as many children as you want
// The Header is a custom element. And we can add a title property(props)
const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				{/* Using the Header Component */}
				<Header />

				{/* Two other ways of adding this title */}
				{/* <Header title="MyTitle" /> */}
				{/* <h1> My Title </h1> */}

				{/* Photo taken from above */}
				<img src={logo} className="App-logo" alt="logo" />

				{/* Adding CSS into a certain tag with global css from src/App.css */}
				<h3 class="another-css-class-name"> My second header </h3>

				{/* Not yet modified */}
				<p> My Paragraph </p>

				{/* Practicing import export av components */}
				<InfoCard />

				{/* Separate jsx and css from components/CardsUsingProps */}
				<CardsUsingProps title="Some title" paragraph="Some paragraph" />

				{/* Using the Sign Component */}
				<Sign />
			</header>
		</div>
	);
};

export default App;
