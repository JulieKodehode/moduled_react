function ChangePokemon(step, callback) {
	callback((oldId) => oldId + step);
}

export default ChangePokemon;
