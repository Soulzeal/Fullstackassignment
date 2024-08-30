const stringManipulation = (str , callback) => {
	let upperStr = str.toUpperCase();

	callback(upperStr);
}

function logString(quote){
	console.log(`The manipulated upper string is : ${quote}`)
}

let brand = 'pw is not a company! it\'s an emotion.';
stringManipulation(brand , logString);