const person = {
    name: "Mahir Siam",
    age: 25,
    work: "CS Student",
    country: "Bangladesh",
    hobbies: ["Reading", "Gaming", "Coding", "Traveling"],
    greet() {
        return `Hello, my name is ${this.name} & I am a ${this.work}. I am ${this.age} years old, and I live in ${this.country}.`;
    },
    favoriteHobby() {
        return `${this.name}'s favorite hobby is ${this.hobbies[0]}.`;
    },
    getWorkInfo() {
        return `${this.name} is currently pursuing a degree in Computer Science, a field that is rapidly evolving with endless opportunities.`;
    },
    introduce() {
        return `Hi there! I'm ${this.name}. I'm passionate about ${this.work} and love exploring new things in the world of technology.`;
    }
};

console.log(person.greet());
console.log(person.favoriteHobby());
console.log(person.getWorkInfo());
console.log(person.introduce());

// Extra Function to Show All Hobbies.
function showAllHobbies(person) {
    console.log(`${person.name}'s hobbies are:`);
    person.hobbies.forEach(hobby => {
        console.log(`- ${hobby}`);
    });
}

showAllHobbies(person);
