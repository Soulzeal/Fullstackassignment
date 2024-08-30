const customer = {name : "Satyam Rathore" , balance : 3500 };

const withdrawal = (amount) => {
	customer.balance -= amount;
	console.log(`Updated balance is : ${customer.balance}`)
}

const deposit = (amount) => {
	customer.balance += amount;
	console.log(`Updated balance is : ${customer.balance}`)
}

const balance = () => {
	console.log(`Balance is : ${customer.balance}`);
}

balance();
withdrawal(1000);
deposit(500)