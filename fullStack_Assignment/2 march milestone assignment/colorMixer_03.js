const colorMixer = (col1 , col2) => {

	let colorComb = col1 + "-" + col2;

	switch(colorComb){
		case "red-blue" :
			console.log("You made purple color by mixing.");
			break;

		case "red-yellow" :
			console.log("You made orange color by mixing.");
			break;
			
		case "blue-yellow" :
			console.log("You made green color by mixing.");
			break;
		default :
			console.log("Sorry learner you choosed a invalid color combination.");
	}
}

colorMixer("red" , "green")