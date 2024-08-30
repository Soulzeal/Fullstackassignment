const doubleElementsCallback = (arr , callback) => {
	let resultantArr = []

	for(let i=0; i<arr.length; i++){
		resultantArr.push(callback(arr[i]));
	}

	return resultantArr;
}

let numbers = [2,4,6,8,10,12,14,16,18,20]
let requiredResult = doubleElementsCallback(numbers , x => x * x );
console.log(requiredResult);