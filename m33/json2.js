const person = {
    name: "hena",
    age: 10,
    friends: ["ratul", "manik", "korim"],
    status: true,
}

const newPerson = JSON.stringify(person);
console.log(newPerson) // {"name":"hena","age":10,"friends":["ratul","manik","korim"],"status":true}

console.log(typeof person)//object

console.log(typeof newPerson) //string

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2) // plane object a convert kore // {name: 'hena', age: 10, friends: Array(3), status: true}

