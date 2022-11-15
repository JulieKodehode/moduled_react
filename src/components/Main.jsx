import MainContent from "../data/data";
import App from "./GenerateCards";

// import { MainContent, SubPageContent } from "../../data/data";
// {} deconstructing to bring out multiple export version.

// removed props argument, and declare {} to MainContent from data
const Main = () => {
	const { title, paragraph, blogPost } = MainContent;
	return (
		<main style={{ backgroundColor: "pink", padding: "10px", color: "black" }}>
			<h2>{title}</h2>
			<p>{paragraph}</p>
			<hr />
			<h3 style={{ color: "green" }}>{blogPost[0].title}</h3>
			<p style={{ color: "green" }}>{blogPost[0].smallDescription}</p>
			<hr />
			<App />
		</main>
	);
};

export default Main;

// Extracting hard coded code from comps into a data file is the {} inside tags.
// Storing data and declaring objects instead of hardcoding things into your js code so its easier and nicer to have a good over view.
// Single page applications need to provide more infos
// Blogpost, webshop, desktop applications are cms(multiple interactions where it needs filling)
