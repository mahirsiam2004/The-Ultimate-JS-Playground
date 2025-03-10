const person = {
    name: "Mahir Siam",
    age: 25,
    city: "Dhaka",
    hobbies: ["Reading", "Coding", "Traveling"],
};

// Converting JavaScript object to JSON string
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Converting JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// Accessing data from the parsed object
console.log("Name:", parsedObject.name);
console.log("Age:", parsedObject.age);
console.log("Hobbies:", parsedObject.hobbies.join(", "));
