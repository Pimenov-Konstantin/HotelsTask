let number1 = 25;
let number2 = 41;
let number3 = 1048;
let number4 = 104;
let number5 = 6.5;

function computerName(int) {
	let numbers = String(int);
	let numbersArray = [];
	for (let i = 0; i < numbers.length; i++) {
		numbersArray.push(numbers.charAt(i));
	}

	let end = numbersArray[numbersArray.length - 1];
	let penult = numbersArray[numbersArray.length - 2];

	if ((end >= 5 && end <= 9) || (end === "0") ||
		(end == 1 && penult == 1) ||
		(end >= 2 && end <= 4 && penult == 1)
	) {
		console.log(int + " компьютеров");
	}

	if (end == 1 && penult != 1) {
		console.log(int + " компьютер")
	}

	if (end >= 2 && end <= 4 && penult != 1) {
		console.log(int + " компьютера")
	}
}

computerName(number1);
computerName(number2);
computerName(number3);
computerName(number4);
computerName(number5);