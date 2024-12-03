function day1() {
	const input = $('pre').textContent.split('\n');
	const rawTuples = input.map(textPair => textPair.split(' ').filter(val => val).map(val => Number(val))).filter(pair => !isNaN(pair[0]) || !isNaN(pair[1]));
	const list1 = [];
	const list2 = [];
	rawTuples.forEach(pair => {
		list1.push(pair[0]);
		list2.push(pair[1]);
	});
	list1.sort();
	list2.sort();
	const tuples = list1.reduce((acc, val, i) => {
		acc.push([val, list2[i]]);
		return acc;
	}, []);
	const differences = tuples.map(pair => pair[0] >= pair[1] ? pair[0] - pair[1] : pair[1] - pair[0]);
	const sum = differences.reduce((sum, val) => sum + val, 0);
	return sum;
}
