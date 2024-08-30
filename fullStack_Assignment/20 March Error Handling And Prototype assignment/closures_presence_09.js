function numberChecker(arr){
	function elementValidator(num){
		return arr.includes(num);
	}
	return elementValidator;
}

const arr = [10,20,30,40,50];
const elementChecker = numberChecker(arr);
let result = elementChecker(30);  //output : true
let result2 = elementChecker(11); //output : false
console.log(result);