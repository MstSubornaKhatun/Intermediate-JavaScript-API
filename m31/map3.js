
const numbers = [1,2,3,4,5,6];

let temp = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const sum = element + 1;
    temp.push(sum)
    
}

console.log(temp) // (6) [2, 3, 4, 5, 6, 7]
// map use kore ei jinish ta khub short a korte pari.

// const newArray = numbers.map(value => value + 1);
// console.log(newArray) // (6) [2, 3, 4, 5, 6, 7]


const newArray = numbers.map(number => {
   return number+1
});

console.log(newArray) // (6) [2, 3, 4, 5, 6, 7]


// const squareArray = numbers.map(element=>element*element);
// {} dile obossoi return kore dite hobe
const squareArray = numbers.map(element=>{
    return element*element;
});
console.log(squareArray) // (6) [1, 4, 9, 16, 25, 36]

const bondhu = ["rahim", "karim", "hamin", "kaniz"];

for (let i = 0; i < bondhu.length; i++) {
    const element = bondhu[i];
    console.log(element) 
    /*
    rahim
    karim
    hamin
    kaniz
    */
}
// ei same jinish ta map diye ekdom easy korte pari

// const newFriends2 = bondhu.map(element => {
//     console.log(element) 
//     /*
//     rahim
//     karim
//     hamin
//     kaniz
//     */ 

// })

// const newFriends2 = bondhu.map(element => {
//     return element;

// })

// console.log(newFriends2); // (4) ['rahim', 'karim', 'hamin', 'kaniz']

const newFriends2 = bondhu.map((element, index) => {
    console.log(index)
    console.log(element)

})
/*
0
map3.js:67 rahim
map3.js:66 1
map3.js:67 karim
map3.js:66 2
map3.js:67 hamin
map3.js:66 3
map3.js:67 kaniz
**/ 

