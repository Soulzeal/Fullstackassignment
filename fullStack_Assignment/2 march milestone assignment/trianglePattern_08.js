const patternPrinter = (n) => {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = i; j < n; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

patternPrinter(6);
