let text = "JavaScript is awesome!";

let slicedText = text.slice(0, 10);
console.log("Sliced text:", slicedText);

let splitText = text.split(" ");
console.log("Split text into words:", splitText);

let splitChars = text.split(""); //it gives an array
console.log("Split text into characters:", splitChars);

// Extracting the last part using slice
let lastPart = text.slice(-8);
console.log("Last part using slice:", lastPart);

let joinedWords = splitText.join("-");
console.log("Joined words with hyphen:", joinedWords);

let joinedChars = splitChars.join("");
console.log("Joined characters back into a string:", joinedChars);