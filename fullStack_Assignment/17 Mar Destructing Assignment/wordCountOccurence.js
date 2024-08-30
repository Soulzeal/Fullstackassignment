const wordsCount = (textSentence) => {
	let countWord = {}

	const words = textSentence.split(" ");
	
	words.forEach( (word) => {
		if(word in countWord){
			countWord[word]++;
		}else{
			countWord[word] = 1;
		}
	});
	
	return new Map(Object.entries(countWord))
}

const text = "The quick brown fox jumped over the lazy dog";
const finalCount = wordsCount(text)
console.log(finalCount)