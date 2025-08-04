let str1 = "Mahir";
let str2 = "Siam";

// Using + operator
let concat1 = str1 + " " + str2;
console.log("Using + operator:", concat1);

// Using template literals
let concat2 = `${str1} ${str2}`;
console.log("Using template literals:", concat2);

// Using concat() method
let concat3 = str1.concat(" ", str2);
console.log("Using concat() method:", concat3);

// Appending to an existing string
let str3 = "Hello";
str3 += " World";
console.log("Appending to a string:", str3);

// String length
console.log("Length of str1:", str1.length);

// Upper and lower case conversion
console.log("Uppercase:", str1.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());

// Substring extraction
console.log("Substring of str1:", str1.substring(1, 4));

// Replacing text
let replacedStr = str1.replace("Hello", "Hi");
console.log("Replacing text:", replacedStr);

// Splitting a string
let splitStr = "apple,banana,orange".split(",");
console.log("Splitting string:", splitStr);

// Trimming whitespace
let str4 = "   Trim me   ";
console.log("Trimmed string:", str4.trim());
