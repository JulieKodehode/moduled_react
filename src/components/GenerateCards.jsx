// You belong in data
const arrayOfData = [
	{ id: "one", text: "Some string here" },
	{ id: "two", text: "Another string here" },
	{ id: "three", text: "Third string here" },
	{ id: "four,", text: "A forth string" },
];

const generateCards = (element, index) => {
	const { id, text } = element;
	// console.log({element: element, index: index})
	// Shorthand since it have the same names for both element and index
	// console.log({ element, index });

	// return <Card key={index} title={element} />;

	// To giv each object an unique id. Either use provided id or use the index
	return <Card key={id} title={text} />;
};

/**
 * THIS IS FUN I CAN GIVE DEFINITION TO MY COMMENTS
 */
const Card = (props) => {
	const { title } = props;

	return (
		<div>
			<h3>{title}</h3>
		</div>
	);
};

function App() {
	return (
		<div>
			{/* Not good practice, don't need unique id or index cuz [] calls for specific object*/}
			{/* <Card title={arrayOfData[0]} />
			<Card title={arrayOfData[1]} />
			<Card title={arrayOfData[2]} /> */}

			{/* map takes a function and uses that function on each element of the array*/}
			{/* {arrayOfData.map((element) => {
				return <Card title={element} />;
			})} */}

			{/* We made a map function earlier so we can just refer back to it here as a callback */}
			{arrayOfData.map(generateCards)}
		</div>
	);
}

// .map = returns new elements changed from the original
// .forEach = not modified, just taking each element and return it

// PLACE this in the main, with the cat thing.

//
//
//

// Mapping a new mapped map to first map out decks of cards and then map out the containing cards in each deck?

const firstHand = [
	{ id: "one", text: "Some string here" },
	{ id: "two", text: "Another string here" },
	{ id: "three", text: "Third string here" },
	{ id: "four,", text: "A forth string" },
];

const secondHand = [
	{ id: "five", text: "Set 2: Some string here" },
	{ id: "six", text: "Set 2: Another string here" },
	{ id: "seven", text: "Set 2: Third string here" },
	{ id: "eight,", text: "Set 2: A forth string" },
];

const listOfLists = [firstHand, secondHand];

const generate52Cards = (list) => {
	return list.map((element, index) => {
		const { text, id } = element;

		return <Card key={index} title={text} />;
	});
};
