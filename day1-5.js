function day2() {
	const { list1, list2 } = getLists();
	const counts = list1.reduce((map, val) => {
		const count = list2.filter(v => v === val).length;
		map[val] = map[val] ? map[val] + count : count;
		return map;	
	}, {});

	const sum = Object.keys(counts).reduce((s, key) => {
		s = s + (key * counts[key]);
		return s;
	}, 0);
	return sum;	
}

function getLists() {
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
	return { list1, list2 };
}
