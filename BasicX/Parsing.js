let intString = "42";
let parsedInt = parseInt(intString);
console.log("Parsed integer:", parsedInt);


let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log("Parsed float:", parsedFloat);


let invalidString = "42px";
let parsedInvalid = parseInt(invalidString);
console.log("Parsed from invalid string:", parsedInvalid);

// Using JSON.parse()
let jsonString = '{"name": "John", "age": 30}';
let parsedJson = JSON.parse(jsonString);
console.log("Parsed JSON:", parsedJson);

// Handling invalid JSON
try {
    let invalidJson = JSON.parse("{name: 'John'}");
} catch (error) {
    console.log("Invalid JSON error:", error.message);
}


// try {
//     // Code that may cause an error
// } catch (error) {
//     // Code to handle the error
// }