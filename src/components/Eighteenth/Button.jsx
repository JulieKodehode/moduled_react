// Importing a 3rd party packages
import styled from "styled-components";

// CSS VARIABLES
const borderRadius = "10px";

// styled.button because styled is what we named the 3rd party, and button because thats the name of the
const Button = styled.button`
	background-color: lightblue;
	border: 10px;
	border-radius: ${borderRadius};
`;

export default Button;
