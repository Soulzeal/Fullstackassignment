function duplicatesRemover(arr) {
  const uniqueSet = new Set(arr);

  const uniqueArr = Array.from(uniqueSet);

  return uniqueArr;
}

const duplicateCollection = [10, 10, 20, 30, 40, 40, 50, 30];
const result = duplicatesRemover(duplicateCollection);
console.log(result);
