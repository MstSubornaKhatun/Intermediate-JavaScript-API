// js fuction data type niye kaj kore


function changeNumber (num){
    num = num + 10;
    console.log("function er vitore", num) // 20
}
const myNumber = 10;
changeNumber(myNumber);
console.log("function er baire", myNumber) // 10

/*
characteristics

pass by value
 - function aosol datar ekta copy pass kora hoi
 - function er vitore kora change asol data te protifolito hoi na 
 - javascript sadharonoto primitive data tpe (number, string, boolean, etc) pass by value pothotite kaj kore





pass by reference
 - function aosol datar reference pass kora hoi
- function er vitore kora change asol data te protifolito hoi
- javascript object , array, and function pass by reference pothotite kaj kore




kohon konta se korbo
 - pass by value: jokhon apni nisscit korte can je function er kaj asol data change korbe na, tokhon pass by value use korun
 - pass by reference: jokhon apni function er change asol object protifolito korte can, tokhon pass by reference use krun


 javascript konta beshi use hoi?
 javascript sadharonoto primitive data type beshi usse hoi, sei jonno pass by value dekha jai. tobe, jokhon object er sathe kaj korte hoi, tokhon pass by reference jana joruri


*/