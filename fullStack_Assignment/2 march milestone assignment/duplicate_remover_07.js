const duplicateRemover = (cart) => {
	let uniqueItems = new Set(cart); 
	return uniqueItems;
}

let cart = ['binary' , 'sigma' , 'data science' , 'decode' , 'binary' , 'sigma']

let result = duplicateRemover(cart);
console.log(result);