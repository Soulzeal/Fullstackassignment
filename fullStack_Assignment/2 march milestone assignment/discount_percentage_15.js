const originalPrice = 1000;
const discountedPrice = 500;

const discountPercentage = (OriginalPrice , DiscountedPrice) => {
	const discountAmount = OriginalPrice - DiscountedPrice;

	const discountPercentage = discountAmount / OriginalPrice * 100 + "%";

	return discountPercentage;
}

const result = discountPercentage(originalPrice , discountedPrice);
console.log(result);
