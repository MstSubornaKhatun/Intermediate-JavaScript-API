function sum (num1, num2){
    const result = num1 + num2;
    console.log(result);

    if (true){
        var result3 = num1 - num2;
        const result2 = num1 - num2;
    }
    console.log(result2) // if er baire theke eaccess kora jai na. atai block scope
    console.log(result3) // no issue on block scope

}

console.log(result); // function er vitorer variable baire theke eaccess kora jai na. atai block scope
sum(1,2)


// Hoisting
console.log(output) // undefined
var output = "BD"


console.log(output) // error
const output = "BD"
