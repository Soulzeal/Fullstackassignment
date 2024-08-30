function greetWithName(name) {
	return new Promise((resolve, reject) => {
	  if (typeof name === "string") {
		resolve(`Hello, ${name}!`);
	  } else {
		reject("Pass a valid name as a string.");
	  }
	});
  }
  
  greetWithName("Hitesh Sir!")
	.then(greeting => console.log(greeting))
	.catch(error => console.error(error));
  