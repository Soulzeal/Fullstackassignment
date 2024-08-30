const celToFehConverter = (celsius) => {
	const temperature = (celsius * 9/5) + 32 + "F";
	return temperature;
}

const result = celToFehConverter(0);
console.log(result);