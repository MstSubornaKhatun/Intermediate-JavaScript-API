// let counter = 0;
// function sum() {
//     counter = counter + 1;
//     console.log(counter)
// }
// sum()//1
// sum()//2
// sum()//3


// function sum() {
// let counter = 0;
//     counter = counter + 1;
//     console.log(counter)
// }
// sum()//1
// sum()//1
// sum()//1



function sum() {
let counter = 0;
    return function (){
        counter++;
        console.log(counter);
    }
}
const result = sum();
result() //1
result() //2
result() //3
result() //4
result() //5

const result2 = sum();
result2() //1
result2() //2


result2() //5
