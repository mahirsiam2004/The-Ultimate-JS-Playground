let numbers = [5, 2, 8, 1, 3];

console.log("Original Array:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Array:", numbers);

let firstElement = numbers.shift(); //remove first element
console.log("After Shift:", numbers, "Removed:", firstElement);

numbers.unshift(10); //add new in first
console.log("After Unshift:", numbers);
//array oparation