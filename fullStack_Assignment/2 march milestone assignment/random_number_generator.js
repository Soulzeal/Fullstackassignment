const randomNumberGenerator = () => {
	const random = Math.random() * 100;
	const randomRound = Math.ceil(random);

	return randomRound;
}

const result = randomNumberGenerator();
console.log(result);