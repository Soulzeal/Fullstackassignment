const minMaxFinder = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const minMax = { minimum: min, maximum: max };

  return minMax;
};

const result = minMaxFinder([90, 80, 70, 10, 20, 34, 3, 55, 77]);
console.log(result);
