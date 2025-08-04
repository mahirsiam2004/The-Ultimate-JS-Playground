// Function to check if a large number (as string) is prime
function checkPrimeString(numStr) {
    const limit = 1e6; // We'll check divisibility up to 1,000,000

    for (let d = 2; d <= limit; d++) {
        let remainder = 0;

        // Simulate big number modulo using string
        for (let i = 0; i < numStr.length; i++) {
            remainder = (remainder * 10 + parseInt(numStr[i])) % d;
        }

        if (remainder === 0) return false; // Found a divisor, not prime
    }

    return true; // Probably prime
}

// Input string (can be replaced with prompt or file reading)
const input = `4
52 3
6 7
7 1
1 7`.trim().split('\n');

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const [x, k] = input[i].split(' ');
    const y = x.repeat(parseInt(k)); // Repeat x to form y

    // Edge case: "1" is not prime
    if (y === '1') {
        console.log('NO');
    } else {
        console.log(checkPrimeString(y) ? 'YES' : 'NO');
    }
}
