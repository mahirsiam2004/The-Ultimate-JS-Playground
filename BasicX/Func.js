function greet(){
    return `Hello , my name is ${person.name} & i am a ${person.work}`
}


const person={
name:"Mahir Siam",
work:"CS Student",
greet,
};

console.log(person.greet());