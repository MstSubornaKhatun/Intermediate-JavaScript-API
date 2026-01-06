const hena = {
    name: 'hena',
    age: 10,
    friends: ["hero alom", "bappa"],
    status:"not found"
}
// const henStatus = hena.status;
// const henName = hena.name;
// const henAge = hena.age;
// const henaFriends = hena.friends;

const { name, age, friends, status } = hena;
console.log(name) // hena


const person = ["hero alom",{naam:"gias"}, "hena", "bapparaj"];



// const [nayok,obj] = person;
// console.log(obj)


const [test,obj,naam,sadNayok] = person;
console.log(sadNayok)