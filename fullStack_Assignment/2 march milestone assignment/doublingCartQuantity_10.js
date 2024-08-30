const doubleCartValues = (cart) => {

	doubledQuantity = cart.map( (quantity) => {
		return quantity * 2;
	})

	return doubledQuantity;
}

const itemQuantity = [2,3,4,5,6]

const result = doubleCartValues(itemQuantity);

console.log(result);