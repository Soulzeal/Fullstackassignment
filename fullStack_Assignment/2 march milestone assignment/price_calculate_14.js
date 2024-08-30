const cart = [
	{name : 'headphone' , price : 1000 , quantity : 2 } , 
	{name : 'earphone' , price : 300 , quantity : 3 }
]

const totalCartValue = (cart) => {
	let totalCartAmount = 0;
	
	cart.forEach( (item) => {
		totalCartAmount += (item.price * item.quantity);
	})

	return totalCartAmount;
}

const result = totalCartValue(cart);
console.log(result);
