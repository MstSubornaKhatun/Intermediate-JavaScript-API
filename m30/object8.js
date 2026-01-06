const person = {
    name: "hena",
    age: 10,
    country:"BD"
}
// name, age, country ==> Keys
// "hena", 10, "BD" ===> values

// obj er keys gulo paoyar jonno

// console.log(Object.keys(person)) //(3) ['name', 'age', 'country']
// console.log(Object.values(person)) // (3) ['hena', 10, 'BD']
// console.log(Object.entries(person)) // (3) [Array(2), Array(2), Array(2)]


Object.seal(person) // new property joog korbe na , kintu property value change korte parbe
Object.freeze(person) // ata korle value change and new property add kora jabe na

person.status = "not found"; // new property joog

console.log(person)


// 30-9 Loop through an object using for in, for of, object entries

// for (let key in person){
//     console.log(key); 
//     /*
//     name
//     age
//     country
//     */
// }
// key gulo peyechi value kivabe pabo?

console.log(person["name"]) // hena
console.log(person.name) // hena

for (let key in person){
    console.log(`key : ${key} value: ${person[key]}`); 

    /*
    key : name value: hena
    key : age value: 10
    key : country value: BD
    */
 }


for (let key of Object.entries(person)) {
    console.log(key)
    /*
    (2) ['name', 'hena']
    (2) ['age', 10]
    (2) ['country', 'BD']
    */
}



for (let [key,value] of Object.entries(person)) {
    console.log(` key : ${key} value : ${value}`)
    /*
     key : name value : hena
    key : age value : 10
    key : country value : BD
    */
}

