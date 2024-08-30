const randomAccess = (array) => {
  const [first, second, ...leftValues] = array;
  const last = leftValues.pop();

  return [first, second, last];
};

let result = randomAccess([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
