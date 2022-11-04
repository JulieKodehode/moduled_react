// Pre entered content
import logo from "./logo.svg";
import "./App.css";

// import from component/Header.jsx
import Header from "./components/Header";

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
// Most basic used component from app.js
// The Header is a custom element. And we can add a title property(props)
const App = () => {
	return (
		<div className="App-header">
			<header className="App-header">
				<Header />
				{/* <Header title="MyTitle" /> */}
				{/* <h1> My Title </h1> */}
				<img src={logo} className="App-logo" alt="logo" />
				<h3> My second header </h3>
				<p> My Paragraph </p>
			</header>
		</div>
	);
};

export default App;
