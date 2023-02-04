function multiplicationTable(value) {
	let table = '\n';
	let maxLength = (value * value).toString().length;

	for (let i = 0; i <= value; i++) {
		let tableString = '';

		for (let j = 0; j <= value; j++) {
			let product = i * j;
			let padding = ' '.repeat(maxLength - product.toString().length + 1);
			tableString += padding + (product || ' ');
		}

		table += tableString + '\n';
	}

	console.log(table);
}

multiplicationTable(5);