// to use styles we need module.css
import styles from "./CardsUsingProps.module.css";

// Importing the library
// import styled from "./styledArticle/styledArticle.jsx";

const CardsUsingProps = (props) => {
	const { title, paragraph } = props;

	// boolean to check for alternate version
	const alternateVersion = true;

	return (
		// <article className="Wrapper">
		// switching article to styledArticle
		<styledArticle
			id="MyFirstCard"
			style={{ color: "white" }}
			// Using a if/else to see what to run(?)
			className={alternateVersion ? styles.Alternate : styles.Wrapper}>
			<a href="https://bt.no">BT</a>
			<h3>{title}</h3>
			<p>{paragraph}</p>
		</styledArticle>
	);
};

export default CardsUsingProps;

// id="MyFirstCard" cuz?
// className={} work similarly to class="" but we use cN={} because its react js
// style={{}} is inline css
