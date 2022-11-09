// to use styles we need module.css (component-style (3rd party))
// import styles from "./CardsUsingProps.module.css";

// // Importing from StyledArticle/StyledArticle.jsx
import StyledArticle from "./StyledArticle/styledArticle";

const CardsUsingProps = (props) => {
	const { title, paragraph } = props;

	// boolean to check for alternate version with the conditional operator
	// const alternateVersion = false;

	return (
		// <article className="Wrapper">
		// switching article to styledArticle
		<StyledArticle
			id="MyFirstCard"
			// Inline styling: camel case instead of - between words, and using `` around numbers.
			// style={{ color: "white", fontSize: `10px` }}

			// Using module.css to make a specific style for ex h2 and placing it as an inline on the specific h2 (Have not made this module)
			// className={styles.Wrapper}

			// Using module.css. And using a conditional operator to see what to run
			// className={alternateVersion ? styles.Alternate : styles.Wrapper}
		>
			<a href="https://bt.no">BT</a>
			<h3>{title}</h3>
			<p>{paragraph}</p>
		</StyledArticle>
	);
};

export default CardsUsingProps;

// id="MyFirstCard" cuz?
// className={} work similarly to class="" but we use cN={} because its react js
// style={{}} is inline css
