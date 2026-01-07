const num1 = 10;
const num2 = "10";
/*
 == > this is equal value
 === > no this is not equal
*/
const num3 = true;
const num4 = 1;
/*
 == > this is equal value
 === > no this is not equal
*/
const num5 = [];
const num6 = [];
/*
 == > no this is not equal
 === > 
*/
const num7 = [];
const num8 = num7;
/*
 == > this is equal value
 === > this is equal value
*/

// (5*"2"===10) ==> this is equal value
// type conversion
// "5" + null ==> 5null





// == it mean only value check 
// === it mean value+type check

if (num1 === num2){
    console.log("this is equal value")
}
else{
    console.log("no this is not equal")
}