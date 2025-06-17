const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};
const result = doMath(3, 5, 8);
console.log(result);

// Output: 136
