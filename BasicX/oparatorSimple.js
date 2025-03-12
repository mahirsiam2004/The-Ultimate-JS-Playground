let a = 10;
let b = 5;
let operator = '+';
let result;

if (operator === '+') {
    result = a + b;
} else if (operator === '-') {
    result = a - b;
} else if (operator === '*') {
    result = a * b;
} else if (operator === '/') {
    result = b !== 0 ? a / b : 'Error: Division by zero';
} else if (operator === '%') {
    result = b !== 0 ? a % b : 'Error: Modulo by zero';
} else if (operator === '**') {
    result = a ** b;
} else {
    result = 'Error: Invalid operator';
}

console.log(`${a} ${operator} ${b} = ${result}`);