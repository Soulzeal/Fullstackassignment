const toNumberConverter = (str) => {
	try{
	let num = Number(str);
	if (isNaN(num))
		throw new Error("Invalid Number"); 
	}catch(error){
		console.log(error.message);
	}
}

toNumberConverter("10s");