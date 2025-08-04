function doAllMath(a, b, operator) {
    switch (operator) {
        case '+':
            return `${a} + ${b} = ${a + b}`;
        case '-':
            return `${a} - ${b} = ${a - b}`;
        case '*':
            return `${a} * ${b} = ${a * b}`;
        case '/':
            return b !== 0 ? `${a} / ${b} = ${a / b}` : 'Error: Division by zero';
        case '%':
            return b !== 0 ? `${a} % ${b} = ${a % b}` : 'Error: Modulo by zero';
        case '**':
            return `${a} ** ${b} = ${a ** b}`;
        default:
            return 'Error: Invalid operator';
    }
}

// Example usage
console.log(doAllMath(10, 5, '+')); // 10 + 5 = 15
console.log(doAllMath(10, 5, '-')); // 10 - 5 = 5
console.log(doAllMath(10, 5, '*')); // 10 * 5 = 50
console.log(doAllMath(10, 5, '/')); // 10 / 5 = 2
console.log(doAllMath(10, 5, '%')); // 10 % 5 = 0
console.log(doAllMath(2, 3, '**')); // 2 ** 3 = 8
