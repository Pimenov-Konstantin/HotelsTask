let massive1 = [7, 17, 1, 9, 1, 17, 56, 56, 23, 1,];
let massive2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function filter(m1, m2) {
	let result = [];
	let clone = m1.slice(0);
	for (let i = 0; i < clone.length; i++) {
		if (result.includes(clone[i])) continue;
		delete clone[i]
		if (clone.includes(m1[i]) && m2.includes(m1[i])) {
			let clone2 = m2.slice(0);
			delete clone2[clone2.indexOf(m1[i])]
			if (clone2.includes(m1[i])) result.push(m1[i])
		}
	}
	return result
}

console.log(filter(massive1, massive2))
