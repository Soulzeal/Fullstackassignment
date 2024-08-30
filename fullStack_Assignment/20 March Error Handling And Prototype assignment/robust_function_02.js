const getPerson = (obj) => {
  try {
    if (!typeof obj || typeof obj !== "object" || !obj.name || !obj.age) {
      throw new Error(
        "Invalid argument pass a valid object containing name and age fields."
      );
    }
    let name = obj.name;
    let age = obj.age;
    return `Name is ${name} and age is ${age}.`;
  } catch (error) {
    return error.message;
  }
};

let obj = {
  name: "Satyam",
  age: 21,
};

const result = getPerson(obj);
console.log(result);
