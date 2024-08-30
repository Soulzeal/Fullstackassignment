class Employee{
	constructor(name , position , salary){
		this.name = name;
		this.position = position;
		this.salary = salary;
	}

	getSalary(){
		return this.salary;
	}
}

const e1 = new Employee("Satyam Rathore" , "developer" , 90000 );
console.log(e1.getSalary());