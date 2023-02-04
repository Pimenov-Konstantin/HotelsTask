let number1 = 27;
let number2 = 27.8;
let number3 = 41.7;

function roundNumber(number) {
	let remainderNumber = number % 5;

	if (remainderNumber === 0) {
		return number;
	} else if (remainderNumber >= 2.5) {
		return (number - remainderNumber + 5);
	} else {
		if (remainderNumber < 2.5) {
			return (number - remainderNumber)
		}
	}
}

console.log(roundNumber(number1));
console.log(roundNumber(number2));
console.log(roundNumber(number3));