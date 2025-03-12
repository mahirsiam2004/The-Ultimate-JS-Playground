let truthyValues = [
    true, 1, -1, "hello", [], {}, Infinity, -Infinity, 3.14, "false", "0", " ",
    function() {}, new Date(), Symbol("symbol"), BigInt(1)
];

let falsyValues = [
    false, 0, -0, "", null, undefined, NaN
];

console.log("Truthy Values:");
truthyValues.forEach(value => console.log(value, Boolean(value)));

console.log("\nFalsy Values:");
falsyValues.forEach(value => console.log(value, Boolean(value)));
