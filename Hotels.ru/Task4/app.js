let number1 = 1;
let number2 = 2;
let number3 = 4;
let number4 = 6;

function checkNumber(number) {
	let count = 0;
	for (let i = 2; i <= number - 1; i++) {

		let remainder = number % i;
		if (remainder === 0) {
			count = count + 1;
		}
	}

	if (count === 0) {
		console.log(number + " Число является простым")
	} else {
		console.log(number + " Число не имеет делителей кроме 1 и самого себя")
	}
}

checkNumber(number1);
checkNumber(number2);
checkNumber(number3);
checkNumber(number4);