let text = "   JavaScript is powerful!   ";

// Using trim() to remove whitespace
let trimmedText = text.trim();
console.log("Original text:", text);
console.log("Trimmed text:", trimmedText);

// Using includes() to check if a word exists
console.log("Does the text include 'powerful'?:", trimmedText.includes("powerful"));
console.log("Does the text include 'Python'?:", trimmedText.includes("Python"));

// Another example 
let sentence = "   Learning JavaScript is fun!   ";
let cleanedSentence = sentence.trim();
console.log("Trimmed sentence:", cleanedSentence);
console.log("Does it include 'JavaScript'?:", cleanedSentence.includes("JavaScript"));