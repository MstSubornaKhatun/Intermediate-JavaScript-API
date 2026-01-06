class Product{
    malik = "gias uddin";

    constructor(name, price, brand, malik){
        // console.log(name, price, brand)
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik;
    }

    details(){
        // console.log("ami details")
        // console.log("ami details", this.name)
        console.log(`ami ${this.name} product er details`)
    }
}

// const iphone = new Product();
// iphone.details(); // ami details


const iphone = new Product("iphone", "1234", "apple", "staphjobs");
 // class6.js:5 iphone 1234 apple
console.log(iphone); // Product {malik: 'staphjobs', name: 'iphone', price: '1234', brandName: 'apple'}brandName: "apple"malik: "staphjobs"name: "iphone"price: "1234"[[Prototype]]: Object


// iphone.details() //ami details iphone
iphone.details() // ami iphone product er details


const xiaomi = new Product("redmi", 1000, "xiaomi", "jani na" );
console.log(xiaomi); // Product {malik: 'jani na', name: 'redmi', price: 1000, brandName: 'xiaomi'}

xiaomi.details() // ami redmi product er details



