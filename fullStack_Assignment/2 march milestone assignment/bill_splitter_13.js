const billSplitter = (costPerDish , numOfPerson) => {
	const total_bill = costPerDish * numOfPerson;
	const cost_per_person = costPerDish;

	return {
		total_bill ,
		cost_per_person
	}
}

const result = billSplitter(50 , 4);
console.log(`The cost per person to pay : ${result.cost_per_person}`);
console.log(`Total bill : ${result.total_bill}`);