const ageInDays = (personObj , callback) => {
	let first_name = personObj.first_name;
	let last_name = personObj.last_name;
	let ageInDays = personObj.age * 365;

	callback(first_name , last_name , ageInDays);
}

function logString(first_name , last_name , ageInDays){
	console.log(`The person's full name is ${first_name} ${last_name}, and their age in days is ${ageInDays}`);
}

let person = {
	first_name : "hitesh" ,
	last_name : "choudhary" ,
	age : 28
 }

 ageInDays(person , logString);