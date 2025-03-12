let i = 10;
let f = 20.5;
let d = 30.7;
let c = 'A';

console.log("Implicit Conversion:");
let result1 = i + f;
console.log("int to float: " + result1);

console.log("Explicit Conversion using parseInt:");
let result2 = parseInt(f);
console.log("float to int: " + result2);

console.log("Explicit Conversion using parseFloat:");
let result3 = parseFloat(i);
console.log("int to float: " + result3);

console.log("Character to Integer:");
let result4 = c.charCodeAt(0);
console.log("char to int: " + result4);

console.log("Integer to Character:");
let result5 = String.fromCharCode(i);
console.log("int to char: " + result5);

console.log("Explicit Conversion using toString:");
let result6 = i.toString();
console.log("int to string: " + result6);

let result7 = f.toString();
console.log("float to string: " + result7);
