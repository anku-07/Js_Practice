const user = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {
  name,
  age,
  address: { city },
  address: { zip },
} = user;

console.log(name, age, city, zip);

const person = { firstName: "Alice", lastName: "Doe" };

const { firstName, lastName, country = "India" } = person;
console.log(firstName, lastName, country);

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

[primary1, primary2, ...others] = colors;

console.log(primary1, primary2);
console.log(others);
