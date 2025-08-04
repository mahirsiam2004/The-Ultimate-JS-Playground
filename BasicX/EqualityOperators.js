// JavaScript Equality Operators Example

let a = 5;
let b = "5";
let c = 5;
let d = 10;

console.log("a == b:", a == b); // true (loose equality, type conversion happens)
console.log("a === b:", a === b); // false (strict equality, different types)

console.log("a == c:", a == c); // true (same value, same type)
console.log("a === c:", a === c); // true (same value, same type)

console.log("a != b:", a != b); // false (loose inequality, type conversion happens)
console.log("a !== b:", a !== b); // true (strict inequality, different types)

console.log("a != d:", a != d); // true (different values)
console.log("a !== d:", a !== d); // true (different values and same type)

console.log("b == c:", b == c); // true (loose equality, type conversion)
console.log("b === c:", b === c); // false (strict equality, different types)
