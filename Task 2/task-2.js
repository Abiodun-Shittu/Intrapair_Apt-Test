const firstRecurringCharacter = (str) => {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			return str[i];
		}
	}
	return null;
};

console.log(firstRecurringCharacter("acbbac"));
console.log(firstRecurringCharacter("abcdef"));
