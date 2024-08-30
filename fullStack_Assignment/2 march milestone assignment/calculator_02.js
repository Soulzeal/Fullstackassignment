const arithmeticOperation = (operator , num1 , num2) => {
		let result = null;

		switch(operator){
			case "+" : 
				result = num1 + num2;
				break;

			case "*" :
				result = num1 * num2;
				break;

			case "-" :
				result = num1 - num2;
				break;

			case "/" :
				result = num1 / num2;
				break;

			default :
				result = "Please Enter Valid Operation with the values."
		}

		return result;
}

const result = arithmeticOperation("-",10,10)

console.log(result);