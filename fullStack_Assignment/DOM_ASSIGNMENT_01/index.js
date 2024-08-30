let counter = 0;
	let count = document.getElementsByClassName("counter__result")[0];
	count.innerText = counter;

	const decrementCounter = () => {
		counter -= 1;
		count.innerText = counter
	}

	const incrementCounter = () => {
		counter += 1;
		count.innerText = counter;
	}

	const resetCounter = () => {
		counter = 0;
		count.innerText = counter;
	}