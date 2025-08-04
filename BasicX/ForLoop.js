let arr = [1, 2, 3, 4, 5];
let obj = { a: 10, b: 20, c: 30 };

for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

for (let i = 5; i > 0; i--) {
  console.log("Reverse For Loop:", i);
}

for (let num of arr) {
  console.log("For...of Loop:", num);
}

for (let key in obj) {
  console.log("For...in Loop:", key, obj[key]);
}

let i = 0;
for (; i < 3; ) {
  console.log("For Loop without Initialization or Update:", i);
  i++;
}
