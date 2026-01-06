const friends  = ["sokina", "joriina", "nahida"]

console.log(friends) // (3) ['sokina', 'joriina', 'nahida']
console.log(...friends) //  sokina joriina nahida

const newArray = ["hero alom", "fahim", ...friends]
console.log(newArray) //(5) ['hero alom', 'fahim', 'sokina', 'joriina', 'nahida']

const numbers = [3,4,4,5,5,6,7,3,4343,656,43];
console.log(Math.max(...numbers)) //  4343


