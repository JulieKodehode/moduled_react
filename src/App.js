// React spinning logo
import logo from "./logo.svg";

// Global css
import "./App.css";
import "./index.css";

// Import from component/Header.jsx
import Header from "./components/Header";

// Import from component/Sign.jsx
import Sign from "./components/Sign";

// Import from component/InfoCard/InfoCard.jsx
import InfoCard from "./components/InfoCard/InfoCards.jsx";

// Import from ./components/CarsUsingProps.jsx
import CardsUsingProps from "./components/CardsUsingProps/CardsUsingProps.jsx";

// Import react-route-dom
import { Outlet, Link } from "react-router-dom";

// . terminal directory paths (hey look in this folder), / intellisense suggestions (hey i want something from inside this folder, the more .. the longer you backtrack into folders (first-lesson > src > component > Main needs .../ or can be ./src/component/Main/Main.jsx)
// Should be enough with import Name to get auto-completion
import Main from "./components/Main/Main";

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

// Only return one parent, but as many children as you want. The div is sort of like body in html(?) and then the header is the section to be displayed on page (?)
// Header is a custom component. And we can add a title property(props) to reduce open code(?) and display properties instead of lines of text.

// READ more on properties
const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				{/* Adding a navBar to the app.js (previously had this as a stand alone NavBar.jsx) */}
				<nav>
					<ul>
						<li>
							<Link to="/Home">Home</Link>
						</li>
						<li>
							<Link to="/About">About</Link>
						</li>
						<li>
							<Link to="/Contact">Contact</Link>
						</li>
						{/* The / in Link to is nesting the Home, About and Contact inside App(?) */}
					</ul>
				</nav>
				<Outlet />
				{/* Using the Header Component */}
				<Header />

				{/* Two other ways of adding this title */}
				{/* <Header title="MyTitle" /> */}
				{/* <h1> My Title </h1> */}

				{/* Photo taken from above */}
				<img src={logo} className="App-logo" alt="logo" />

				{/* Adding CSS into a certain tag with global css from src/App.css */}
				<h3 class="another-css-class-name"> My second header </h3>

				{/* Not yet modified, hardcode code */}
				<p> My Paragraph </p>

				{/* Practicing import export av components, with an inline style in InfoCard.jsx to experiment */}
				<InfoCard />

				{/* Separate jsx and css from components/CardsUsingProps */}
				{/* Using props title and paragraph to not write lines of code, see CardsUsingProps to see props inclosed in <tags> */}
				<CardsUsingProps title="Some title" paragraph="Some paragraph" />

				{/* Import export practice with data instead of hardcode */}
				<Main />

				{/* Using the Sign Component */}
				<Sign />
			</header>
		</div>
	);
};

export default App;
// Exporting App to index js to be imported there.
