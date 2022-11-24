const App = () => {
	return (
		<main>
			<ComponsableConponent>
				<h2>First child</h2>
				<h2>Second child</h2>
				<h2>Third child</h2>
			</ComponsableConponent>
		</main>
	);
};

function ComponsableConponent(props) {
	const { children } = props;
	console.log(children);

	return (
		<div style={{ border: "10px solid green" }}>
			<h1>Component</h1>
			{/* Using this children prop is another way to style your app, its a new thought to do it this way by calling them instead of defining them */}
			{children}
		</div>
	);
}

export default App;
