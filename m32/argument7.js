function sum (a, b, c){
    // console.log(a, b, c)
    // console.log(arguments)
    // arguments.push() // it impossible
    const newArg = [...arguments]
    console.log(newArg) // (9) [10, 20, 30, 45, 64, 44, 53, 35, 23]



}
console.log(sum.length) // parameters length
console.log( typeof sum) // function
sum(10, 20, 30,45, 64, 44,53,35,23) 


let name = "masud";
function test (text){
    // console.log(text)
    test = "karim"
}

test(name) // masud



let a = 10;
let b = 20;

function sums (num1, num2){
    num1 = 50;
}

sum(a,b)
console.log(a) // 10


const person = {name: "rakib", age: 35}

function sum2(obj){
    obj.name = "ratul";
}

sum2(person)
console.log(person) // {name: 'ratul', age: 35}