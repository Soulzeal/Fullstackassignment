class Person{
	constructor(name="unknown" , age=0){
		this.name = name;
		this.age = age;
	}

	getDetails(){
		return `Name : ${this.name} , Age : ${this.age}`;
	}
}

const p1 = new Person('Satyam Rathore' , 21);
const p2 = new Person();

console.log(p1.getDetails());
console.log(p2.getDetails());