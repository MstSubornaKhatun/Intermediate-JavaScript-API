// Primitive
let person = "solim saheb";
let newPerson = person; // copy value

person = "hero alom";

console.log(newPerson); // solim saheb --> hero alom hobe na cz of immutable


// non-primitive
let person2 = {name: "gias uddin"};
let newPerson2 = person;
person.name = "hero alom";

console.log(newPerson2) // hero alom


