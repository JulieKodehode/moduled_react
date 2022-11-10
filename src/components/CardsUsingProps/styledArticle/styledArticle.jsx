// Import library to get the styled
import styled from "styled-components";

// Library: if its reusable you can put them in own folder, if its just one comp then you can define them in the same comp to keep it local
// Unsure where you went? Assigned a value but never used?

const StyledArticle = styled.article`
	margin: 1em;

	background-color: yellow;

	a:hover {
		background-color: green;
	}
`;

export default StyledArticle;

// Read more about component styling using 3rd party library
// Need to make an example where this is working. Do it similarly to CardsUsingProps and then display it into App.js? I think Im missing something here. Look in Lars repo to see.
