// const and let

const person = {
    name: "gias",
    age:12
}


// delete person.name;



console.log(person)

// console.log(Object.keys(person))

// console.log(Object.values(person))

// console.log(Object.entries(person))



const { age, name } = person;

const friends = ["rahim", "Bangaldesh", "krim"];

const [first, second] = friends;

const newFriends = ["hero alom", ...friends]
// console.log(newFriends)

// console.log(`
//     amar shonar ${friends[1]} ami tomai valo bashi 
    
//     `)


    