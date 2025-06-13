const name = "Rafiq";
const age = 30;
console.log("Name: " + name + ", Age: " + age);
console.log(`Name: ${name}, Age: ${age}`);

// Output:
// Name: Rafiq, Age: 30
// Name: Rafiq, Age: 30

const getName = function () {
  return "Nadia";
};
const message = `Na Bolle Sadia, ase amar ${getName()}!`;
console.log(message);

// Output: Na Bolle Sadia, ase amar Nadia!

const ag = 20;
const status = `You are ${ag >= 18 ? "Adult" : "Minor"}`;
console.log(status);

// Output: You are Adult

const fruits = ["Apple", "Banana", "Mango"];
const second = `My second favorite fruit is: ${fruits[1]}.`;
const list = `My favorite fruits are: ${fruits.join(", ")}.`;
console.log(list);

// Output: My favorite fruits are: Apple, Banana, Mango.
const radius = 5;
const area = `Circle area is ${Math.PI * radius ** 2}.`;
console.log(area);

// Output: Circle area is 78.53981633974483.

const greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet("Nadia"));

// Output: Hello, Nadia
