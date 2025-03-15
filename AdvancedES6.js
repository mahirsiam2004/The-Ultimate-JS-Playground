// Example of ES6+ features with comments

// 1. Using `let` and `const` for block-scoped variables
const appName = "ES6 Advanced Features"; // Constant value that cannot be reassigned
let version = 1.0; // Can be updated

// 2. Arrow function syntax
const greet = (name) => `Hello, ${name}!`; // Implicit return
console.log(greet("Mahir"));

// 3. Destructuring assignment
const user = { name: "Khadija", age: 24, country: "Bangladesh" };
const { name, age, country } = user; // Extract values directly from object
console.log(`${name} is ${age} years old from ${country}`);

// 4. Spread and Rest operators
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8]; // Spread operator to copy and add values
console.log(newNumbers);

const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5)); // Rest operator to gather arguments

// 5. Template literals
const message = `Welcome to ${appName}, version ${version}`;
console.log(message);

// 6. Default function parameters
const introduce = (name = "Guest") => `Hi, ${name}!`;
console.log(introduce()); // Uses default "Guest"
console.log(introduce("Shafayet"));

// 7. Classes in ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}
const person1 = new Person("Abdullah", 25);
console.log(person1.introduce());

// 8. Promises and async/await
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

async function getData() {
  console.log("Fetching data...");
  const result = await fetchData();
  console.log(result);
}
getData();

// 9. ES6 Modules (export/import)
// Assume we have another file named module.js with:
// export const add = (a, b) => a + b;
// import { add } from "./module.js";
// console.log(add(5, 10));
