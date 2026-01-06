
// normal function
function sum (num1, num2){
    return num1 + num2;
}

// arrow function
const sum2 = (num1, num2) => num1 + num2; // single line hole retrun na likhle o hoi

const sum3 = (num1, num2) => {
    return num1 + num2; // multi line hole retrun dite hobe
}


const sum5 = (num1) => {
    console.log("hello", num1)
}


const sum8 = function(num1, num2) {
    return num1 + num2;
}



function sum(num1, num2) {
    return num1 + num2;
}


const sum9 = (num1, num2) => {
    return num1+num2
}

// 3 way to write arrow function
const test = () => console.log("hello empty");

const square = x => x * x;

const sum = (num1, num2) => num1 + num2;



// console.log(square(10))

document.getElementById("title").addEventListener("click",
    
    function () {
        console.log("hello")
    }

)

document.getElementById("title").addEventListener("click",



    () => {
    console.log("hello")
    }

)