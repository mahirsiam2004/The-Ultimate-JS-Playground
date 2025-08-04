const friends = [
  "mahir",
  "Siam",
  "Riyad",
  "shafayet",
  "kafi",
  "shawon",
  "sadman",
];
const second = friends[1];
console.log(second);
friends.shift();
console.log(friends[2]);
console.log(friends);

const teachers = ["Assistant sir", "Class sir", "PT Sir"];
teachers.unshift("Head sir");
console.log(teachers);

// Output: ['Head sir', 'Assistant sir', 'Class sir', 'PT Sir']

const friend = ["balam", "kalam", "salam", "gelam", "pailam"];
const exist = friend.includes("gelam");
console.log(exist);

// Output: true

const friendss = ["balam", "kalam", "salam", "gelam", "pailam"];
const index = friendss.indexOf("gelam");
console.log(index);

// Output: 3

const Friends = ["balam", "kalam", "salam", "gelam", "pailam"];
const Fndex = friends.indexOf("khailam");
console.log(index);

// Output: -1
