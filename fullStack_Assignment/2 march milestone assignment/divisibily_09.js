const divisibility = (numberArr) => {

	for( let num in numberArr){

		if(num % 2 == 0){
			continue;
		}

		if(num % 3 == 0){
			console.log(num);
		}
	}
}

let numberArr = [3,5,7,8,1,12,14,17,19,20,24,27,30]
const result = divisibility(numberArr);