let arr = ["Москва", "Санкт-Петербург", "Воронеж"];

function Cities(input) {
	if (Array.isArray(input)) {
		let output = (input.join(", ") + ".");
		return output;
	}
	return 'It`s not an array';
}

console.log(Cities(arr));