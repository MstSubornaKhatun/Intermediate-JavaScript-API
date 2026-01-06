const person = {
    name: "gias",
    age: 12,
    1: 100,
    father: {
        name: "sjhdfb",
        age:12,
    }
}

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))


// console.log(person.name)

// console.log(person["name"])
// console.log(person[1])


// console.log(person?.mother?.name);

// const numbers = [1, 2, 3, 4, 4, 5, 56];

// const newNumbers = numbers.map(num => {
//     return num * num;
// });
// console.log(newNumbers)

const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" }
];

const singleProduct = products.find(p => p.color === "gold");
console.log(singleProduct)


// const newProduct = products.filter(p => p.id !=3);

// console.log(newProduct)

// products.forEach(p => {
//     if (p.name === "iphone") {
//         console.log(p)
//     }
// })




class Person{
    
    constructor(name,age) {
        this.age = age;
        this.name=name
    }
}


class Hena extends Person{
    constructor(name,age,status) {
        super(name,age)
    }
}


// const hena = new Person("hena", 21);
// console.log(hena)