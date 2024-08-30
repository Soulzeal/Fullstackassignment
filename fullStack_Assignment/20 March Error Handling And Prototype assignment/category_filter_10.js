const filterByCategory = (arr) => {
	function filterProducts(category){
		const products = arr.filter( (item) => item['category'] == category );
		return products;
	}
	return filterProducts;
}

let products = [
	{name : "shirt" , category : "clothing"} ,
	{name : "pant" , category : "clothing"} ,
	{name : "lower" , category : "clothing"} ,
	{name : "redmi note 9 pro max" , category : "smartphone"} ,
	{name : "realme narzo 30 pro" , category : "smartphone"} ,
	{name : "pen" , category : "stationary"} ,
	{name : "pencil" , category : "stationary"} ,
	{name : "marker" , category : "stationary"} ,
]

let category1 = "clothing";
let category2 = "smartphone";
let category3 = "stationary";

const result1 = filterByCategory(products)(category1);
const result2 = filterByCategory(products)(category2);
const result3 = filterByCategory(products)(category3);

console.log(result1);
console.log(result2);
console.log(result3);