let a;
let b = null;

console.log("Value of a (undefined):", a);
console.log("Type of a:", typeof a);

console.log("Value of b (null):", b);
console.log("Type of b:", typeof b);

console.log("a == b:", a == b); // true (because both are falsy and loosely equal)
console.log("a === b:", a === b); // false (because they have different types)

// Undefined behavior example
function exampleFunction() {
    let x; // x is declared but not assigned, so it's undefined
    return x;
}
console.log("Function returning undefined:", exampleFunction());

// Null usage example
let obj = { name: "John", age: null };
console.log("Object with null value:", obj);


// undefined means a variable has been declared but has not been assigned a value.
// null is an assigned value that represents "no value" or "empty."
// Key Differences:
// typeof undefined → "undefined"
// typeof null → "object" (a historical JavaScript quirk)
// undefined == null → true (loose equality, as both are falsy)
// undefined === null → false (strict equality, as they are different types)