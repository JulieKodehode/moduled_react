// EVERYTHING in home.jsx from before is moved FROM App.js

// React spinning logo
import logo from "../logo.svg";

// Global css
import "../App.css";
import "../index.css";

// Import from component/Header.jsx
import Header from "../components/Header";

// Import from component/Sign.jsx
import Sign from "../components/Sign";

// Import from component/InfoCard/InfoCard.jsx
import InfoCard from "../components/InfoCard/InfoCards.jsx";

// Import from ./components/CarsUsingProps.jsx
import CardsUsingProps from "../components/CardsUsingProps/CardsUsingProps.jsx";

// Import from ./components/main.jsx
import Main from "../components/Main";

// Only return one parent(div in this case), but as many children as you want. The div is sort of like body in html(?) and then the header is the section to be displayed on page (?)
// Header is a custom component. And we can add a title property(props) to reduce open code(?) and display properties instead of lines of text.
// READ more on properties
const Home = () => {
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
				<h3 className="another-css-class-name"> My second header </h3>

				{/* Not yet modified, hardcode code */}
				<p> My Paragraph </p>

				{/* Practicing import export av components, with an inline style in InfoCard.jsx to experiment */}
				<InfoCard />

				{/* Separate jsx and css from components/CardsUsingProps */}
				{/* Using props title and paragraph to not write lines of code, see CardsUsingProps to see props inclosed in <tags> */}
				<CardsUsingProps title="Some title" paragraph="Some paragraph" />

				{/* Using data */}
				<Main />

				{/* Using the Sign Component */}
				<Sign />
			</header>
		</div>
	);
};
export default Home;
