const date = new Date();
console.log(date);
console.log("mahir siam");

const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-based, so add 1
const day = date.getDate(); // Get the day of the month instead of the week

console.log(`${year}`);
console.log(`${month}`);
console.log(`${day}`);
console.log(date.toDateString()); 
console.log(date.toISOString()); 
console.log(date.toLocaleString());

date.setDate(date.getDate() - 1); // Subtract one day
console.log(date); // Print the updated date
