// synchronous
console.log("hero")
console.log("first")
console.log("first")
console.log("first")
function sum(){
    console.log("hello")
}

//asynchronous

const first = ()=>{
    second();
    console.log("hello i am from first")
}

const second = ()=>{
    third();
    console.log("hello i am from second")
}

const third = ()=>{

    console.log("hello i am from third")
}

const b = 20;
first();
console.log("ami sobar seshe a asbo")



// 
const num1 = 10;
const num2 = 20;

console.log("ami prothom")

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res=>res.json())
.then(data=>console.log(data))


console.log("ami second")
const result = num1 + num2;
console.log(result)


// 
const num4 = 10;
const num5 = 20;

console.log("ami prothom")
// test()
// setTimeout(test)
setTimeout(()=>{
    console.log("ami second function")
}, 3000)

console.log("ami second")
const result2 = num4 + num5;
console.log(result2)


function test () {
    console.log("ami test")
}

/*
console--
hero
single-threaded4.js:3 first
single-threaded4.js:4 first
single-threaded4.js:5 first
single-threaded4.js:24 hello i am from third
single-threaded4.js:19 hello i am from second
single-threaded4.js:14 hello i am from first
single-threaded4.js:29 ami sobar seshe a asbo
single-threaded4.js:37 ami prothom
single-threaded4.js:44 ami second
single-threaded4.js:46 30
single-threaded4.js:53 ami prothom
single-threaded4.js:60 ami second
single-threaded4.js:62 30



*/