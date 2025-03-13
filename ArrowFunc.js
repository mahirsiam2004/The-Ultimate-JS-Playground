// Arrow function to add two numbers
const add = (a, b) => {
    return a + b; // Returns the sum of a and b
};

console.log(add(5, 3)); // Output: 8

// Shorter version (Implicit return)
const multiply = (a, b) => a * b; // No need for {} and 'return' when there's only one expression

console.log(multiply(4, 2)); // Output: 8

// Arrow function without parameters
const greet = () => "Hello, World!"; // If no parameters, use empty ()

console.log(greet()); // Output: Hello, World!

// Arrow function with a single parameter
const square = num => num * num; // No need for () if there's only one parameter

console.log(square(6)); // Output: 36

// Arrow function inside another function (Callback function)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // map() applies the arrow function to each array element

console.log(doubled); // Output: [2, 4, 6, 8]
