const numbers = [1, 2, 3, 4, 5, 10, 20, 30, 100];

// console.log(numbers);

// numbers.forEach(function (v) {
//   if (v % 2 == 0) {
//     console.log(v);
//   }
// });

let sum = 0;
numbers.forEach(function (v, i) {
  if (i <= 3) {
    sum += v;
  }
});
console.log(sum);
