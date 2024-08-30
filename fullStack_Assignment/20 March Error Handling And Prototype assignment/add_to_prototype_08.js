function Student(name){
	this.name = name;
}

Student.prototype.printDetails = function(){
	console.log(`Hello sir! My name is ${this.name}`);
}

const s1 = new Student("Satyam Rathore");
s1.printDetails();