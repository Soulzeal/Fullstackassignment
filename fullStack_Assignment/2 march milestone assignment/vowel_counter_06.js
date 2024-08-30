const vowelCounter = (text) => {
  const lowerText = text.toLowerCase().split("");

  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCounter = 0;

  lowerText.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelCounter++;
    }
  });

  return vowelCounter;
};

const text = "satyam rathore";

const result = vowelCounter(text);

console.log(result);
