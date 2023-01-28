const numberOfSmallerToTheRight = (numArr) => {
	let newArr = numArr.map((num) => 0);
	for (let i = 0; i < numArr.length; i++) {
		for (let j = i + 1; j < numArr.length; j++) {
			if (numArr[j] < numArr[i]) {
				newArr[i]++;
			}
		}
	}
	return newArr;
};

console.log(numberOfSmallerToTheRight([3, 4, 9, 6, 1]));
