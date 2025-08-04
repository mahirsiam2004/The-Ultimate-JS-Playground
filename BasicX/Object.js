let person = {
    name: "Mahir Siam",
    age: 25,
    city: "Dhaka",
    hobbies: ["Watching Movies", "Gaming", "Traveling"]
  };
  
  console.log("Person Object:", person);
  
  // Dot notation
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("Hobbies:", person.hobbies.join(", "));
  
  // Bracket notation
  console.log("Name using bracket notation:", person["name"]);
  console.log("Age using bracket notation:", person["age"]);
  console.log("City using bracket notation:", person["city"]);
  console.log("Hobbies using bracket notation:", person["hobbies"].join(", "));
  
  person.age = 26;
  console.log("Updated Age:", person.age);
  
  // Bracket notation for dynamic property
  person["country"] = "USA";
  console.log("Added Country:", person["country"]);
  