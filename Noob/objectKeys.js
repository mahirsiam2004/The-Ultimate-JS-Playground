const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "512gb",
};

const keysmahir = Object.keys(computer);
console.log(keysmahir);
// Output: ["brand", "price", "processor", "ssd"];
const values = Object.values(computer);
console.log(values);

// Output: [ 'lenovo', 35000, 'intel', '512gb' ]

const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);

// Output: true

if ("email" in profile) {
  console.log("email exists");
} else {
  console.log("No email. No Spam.");
}

// Output: No email. No Spam.
