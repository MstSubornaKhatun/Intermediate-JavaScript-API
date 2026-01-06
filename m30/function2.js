function add (num1=0, num2=0){ // num1, num2 ==> Parameters
    let result = 0;
    result = num1 + num2;
    console.log(result)
}
add(10, 20); // 10, 20 ==> Arguments
console.log(add.length) // Parameters er length

add(10)// NaN


function add (num1=1, num2=1){ 
    let result = 0;
    result = num1 * num2;
    console.log(result)
}
add(10, 20); 
/*
num1 er man deoyar por num2 er man na
 dile NaN hobe. akhane ekta kaj korte
  pari keo jodi ekta value ba  dulita
   value na likhe tahole default value
    dhore niba. ====> default parameter

*/ 