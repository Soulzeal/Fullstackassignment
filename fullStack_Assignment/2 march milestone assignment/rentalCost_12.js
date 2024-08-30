const rentalCost = (CarType, Days) => {
  let cost = 0;

  switch (CarType) {
    case "Economy":
      cost = 4000 * Days;
      break;

    case "Midsize":
      cost = 10000 * Days;
      break;

    case "Luxury":
      cost = 20000 * Days;
      break;

    default:
      console.log("Please enter the available car.");
      cost = null;
  }

  return [CarType, cost];
};

const result = rentalCost("Luxury", 3);
console.log(`The total cost of the ${result[0]} car is ${result[1]}`);
