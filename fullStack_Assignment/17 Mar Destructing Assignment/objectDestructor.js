const objDestructor = (person) => {
  const { name, address: { street } } = person;

  const infoObj = { name, street };

  return infoObj;
};

const person = {
  name: "Satyam Rathore",
  age: 21,
  address: {
    street: "BB , Block D , krishna nagar , makronia",
    city: "sagar",
    state: "madhya pradesh",
  },
};

const result = objDestructor(person);
console.log(result);
