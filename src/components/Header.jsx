// jsx provide syntax highlight and auto completion, so instead of regular js its more "helping"

// anon arrow function
const Header = (props) => {
	//Destructure the props
	// console.log(typeof props); // Checking what the props is (object)

	// // title="MyTitle" in App.js can be assigned the parameter(?) Or the other way around..
	// const { title } = props;

	// console.log(props); // object with key:value(title:MyTitle)

	// // regular html
	return <h1>Julie's React course page</h1>;

	// // {} write js inside html tag
	// return <h1>{title}</h1>;

	// // can be used too when getting more complicated(?)
	// return <h1>{props.title}</h1>;

	// // {{}} an object inside html tag (not ideal)
	// return <h1>{{ object }}</h1>;
};

export default Header;
