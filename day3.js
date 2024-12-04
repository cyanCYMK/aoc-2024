function day3() {
	const input = $('pre').textContent;
	const reg = /(mul\([0-9]+\,[0-9]+\))/g;
	const matches = input.matchAll(reg);
	let sum = 0;
	for (const b of matches) {
		const mulCall = b[0];
		if (mulCall) {
			// i'm a bad boy on the naughty list
			sum += eval(mulCall);
		}
	}
	return sum;
}

function day3part2() {
	let isMulCallValid = true;
	let sum = 0;
	const input = $('pre').textContent;
	const reg = /(mul\([0-9]+\,[0-9]+\))|(don't\(\))|(do\(\))/g;
	const matches = input.matchAll(reg);
	for (const b of matches) {
		const cmd = b[0];
		if (cmd.includes("don't")) {
			isMulCallValid = false;
		} else if (cmd.includes("do")) {
			isMulCallValid = true;
		} else {
			// is mul call
			if (isMulCallValid) {
				sum += eval(cmd);
			}
		}
	}
	return sum;
}

function mul(arg1, arg2) {
	return arg1 * arg2;
}
