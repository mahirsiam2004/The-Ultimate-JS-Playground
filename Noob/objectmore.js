const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "512gb",
};

for (const m in computer) {
  console.log(m);
  console.log(computer[m]);
}

//more ways for create an object
const newObject = new Object();
const newObject2 = Object.create();
colsole.log(newObject);
colsole.log(newObject2);

const person = { name: "Alice", age: 25, country: "Bangladesh" };
delete person.age;
console.log(person);

// Output: { name: 'Alice', country: 'Bangladesh' }

const adminUser = {
  username: "admin",
  email: "admin@example.com",
  role: "superadmin",
};

Object.freeze(adminUser); // Attempt to modify the object

adminUser.role = "user";
adminUser.password = "123456";
delete adminUser.email;

console.log(adminUser);

// Output: {username: 'admin', email: 'admin@example.com', role: 'superadmin'}

const user = {
  username: "johndoe",
  email: "john.doe@example.com",
  password: "oldpassword",
};

Object.seal(user); // Attempt to modify the object

user.password = "newpassword"; // Allowed
user.age = 30; // adding new property is not allowed
delete user.email; // deleting property is not allowed

console.log(user);

// Output: {username: 'johndoe', email: 'john.doe@example.com', password: 'newpassword'}
