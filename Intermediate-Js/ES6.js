// ES6+ JavaScript Basics to Advanced Concepts

// 1. LET & CONST (Block-scoped variables)
let name = "Mahir"; // Can be reassigned
const country = "Bangladesh"; // Cannot be reassigned

// 2. TEMPLATE LITERALS
let greeting = `Hello, ${name} from ${country}!`;
console.log(greeting);

// 3. ARROW FUNCTIONS
const add = (a, b) => a + b; // Implicit return
console.log(add(5, 3));

// 4. DEFAULT PARAMETERS
const greet = (user = "Guest") => `Welcome, ${user}!`;
console.log(greet());
console.log(greet("Siam"));

// 5. DESTRUCTURING (Arrays & Objects)
const person = { firstName: "John", lastName: "Doe", age: 25 };
const { firstName, age } = person; // Extracts firstName & age
console.log(firstName, age);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);

// 6. SPREAD & REST OPERATORS
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread operator
console.log(arr2);

const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // Rest operator

// 7. OBJECT LITERALS (Enhanced properties & methods)
const user = {
  name,
  country,
  showInfo() {
    return `${this.name} lives in ${this.country}.`;
  },
};
console.log(user.showInfo());

// 8. PROMISES & ASYNC/AWAIT
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
};

const loadData = async () => {
  console.log("Loading...");
  const data = await fetchData();
  console.log(data);
};
loadData();

// 9. MAP, FILTER, REDUCE
const nums = [1, 2, 3, 4, 5];
const squared = nums.map((n) => n * n);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(squared, evens, total);

// 10. CLASSES & INHERITANCE
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  showGrade() {
    return `${this.name} is in grade ${this.grade}.`;
  }
}
const student = new Student("Rafi", 20, "A");
console.log(student.greet());
console.log(student.showGrade());

// 11. MODULES (Export & Import)
// export function sayHello() { return "Hello!"; }
// import { sayHello } from "./module.js";
// console.log(sayHello());

// 12. SETS & MAPS
const mySet = new Set([1, 2, 3, 3]); // Unique values only
mySet.add(4);
console.log(mySet);

const myMap = new Map();
myMap.set("name", "Siam");
myMap.set("age", 22);
console.log(myMap.get("name"));

// 13. OPTIONAL CHAINING & NULLISH COALESCING
const userInfo = { profile: { name: "Shafayet" } };
console.log(userInfo.profile?.name ?? "Guest"); // Optional Chaining + Nullish Coalescing

// 14. SYMBOLS & ITERATORS
const sym = Symbol("unique");
const obj = { [sym]: "Secret value" };
console.log(obj[sym]);
