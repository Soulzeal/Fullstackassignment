class Car{
	
	constructor(company , model , year){
		this.company = company;
		this.model = model;
		this.year = year;
	}

	getDescription(){
		return `This is ${this.year} ${this.company} ${this.model}`;
	}
}

const thar = new Car('Mahendra' , 'Thar' , 2020);
console.log(thar.getDescription());

