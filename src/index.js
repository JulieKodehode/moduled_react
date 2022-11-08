// Library
import React from "react";
import ReactDOM from "react-dom/client";
// Set HashRouter as Router (SEARCH IT UP, hashrouter #, so its already defined but misses a link before click)
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./index.css";

// JS
import App from "./App";

// Funnies
import reportWebVitals from "./reportWebVitals";

// Navbar from routes
import NavBar from "./routes/NavBar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* App.jsx is now a route? */}
		{/* Something ain't working */}
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavBar />}>
					<Route path="/Home" element={<Landing />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>

		{/* The app.js and all its children*/}
		<App />

		{/* Do you work? Somewhat yes but not really..  */}
		{/* <NavBar /> */}

		{/* index.js (great-grandparent) > app.js (grandparent) > Header.jsx, InfoCard.jsx, CardsUsingProps.jsx(parent), Sign.jsx (children) > StyledArticle.jsx (child of CardsUsingProps.jsx) */}
		{/* Family-trees like this are more used in bigger projects(?) Understandable and confusing at the same time to have export/import into so many files before the "main"-file. Understandable because I can see where everything is from so I understand the tree, but confusing as to why I need a go-in-between in app.js instead of having the comps directly in index.js */}
	</React.StrictMode>
	// StrictMode is what makes things appear twice. It just is what it is.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
