function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(`Count is ${count}`);
    };
  }
  
  const counter = outer();
  counter(); // Count is 1
  counter(); // Count is 2
  