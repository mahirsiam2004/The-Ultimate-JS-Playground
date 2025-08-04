// Function Declaration
function greetDeclaration(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greetDeclaration("Mahir"));
  
  // Function Expression
  const greetExpression = function(name) {
    return "Hello, " + name + "!";
  };
  
  console.log(greetExpression("Siam"));
  
  // Hoisting Test
  console.log(hoistedFunction("Test")); // Works because function declarations are hoisted
  
  function hoistedFunction(name) {
    return "Hoisted function says Hello, " + name + "!";
  }
  
  // Uncommenting the next line will cause an error because function expressions are not hoisted
  // console.log(nonHoistedFunction("Test")); 
  
  const nonHoistedFunction = function(name) {
    return "This function expression is not hoisted, " + name + "!";
  };
  
  console.log(nonHoistedFunction("Test"));

  
  