/*
// key-->age   value-->10

localStorage
Storage{age: '10', length: 1}


//getItem
localStorage.getItem("age")
'10'

localStorage.setItem("status", "okay boss")

localStorage.getItem("status");
'okay boss'
localStorage.removeItem("age");
undefined 

*/

const age = 10;
localStorage.setItem("myage", age)
console.log(localStorage.getItem("myage")) // 10


// 2
const handleAddToStorage=()=>{
    console.log("hello"); // button a click korle lekha ta console a dkhabe 


    // const name = "Danim 10";
    // localStorage.setItem("name", name)

    const person = {
        name: "Hena",
        age: 10,
        friends: ["Faha", "Naha"]
    }

    // localStorage.setItem("suborna", person)  // [object Object]
    
    console.log(person.toString()); // [object Object]
    // one problem value are: [object Object]

    // solution
    const convertedToString = JSON.stringify(person);
    console.log(convertedToString) // {"name":"Hena","age":10,"friends":["Faha","Naha"]}
    console.log(convertedToString.name) // undefined

    console.log(typeof convertedToString) // string

    localStorage.setItem("hello", convertedToString); 

    const backToString = JSON.parse(convertedToString)
    console.log(backToString.name) // Hena


}
const data = localStorage.getItem("hello");
// console.log(data.name) // undefined
const converted = JSON.parse(data);
console.log(converted) // {name: 'Hena', age: 10, friends: Array(2)}







// 3

// const handleAddToCart = () => {
//     const productName = document.getElementById('productName');
//     const productQuantity = document.getElementById("productQuantity")
//     const name = productName.value;
//     const quantity = productQuantity.value;

//     console.log(name, quantity) // input field fill kore btn a click korle ata output dibe console 

//     handleSetToLocalStorage(name, quantity)
//     displayProduct(name, quantity)
    

//     productName.value = "";
//     productQuantity.value = "";
// }

// const displayProduct = (productName, quantity) => {
//     const productContainer = document.getElementById("product-container");

//     const li = document.createElement("li");
//     li.innerText = `${productName} : ${quantity}`;
//     productContainer.appendChild(li)
// }

// const handleSetToLocalStorage = (productName, quantity) => {
//     console.log(productName, quantity) // input field fill kore btn a click korle console and display te dekha jabe

//     const newProduct = {name: quantity};
//     localStorage.setItem("cart", JSON.stringify(newProduct)) // local storage a set hobe.


// }


// 4 


const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById("productQuantity")
    const name = productName.value;
    const quantity = productQuantity.value;

    console.log(name, quantity) // input field fill kore btn a click korle ata output dibe console 

    saveProductToLocalStorage(name, quantity)
    displayProduct(name, quantity)
    

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (productName, quantity) => {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerText = `${productName} : ${quantity}`;
    productContainer.appendChild(li)
}





const displayProductFromLocalStorage = () => {
    const products = getProductFromLocalStorage();
    for(const product in products) {
        console.log(product)
        console.log(products[product])
        displayProduct(product, products[product])
    }
}






const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");

    if(getProduct){
        cart = JSON.parse(getProduct)
    }
    return cart;


}




const saveProductToLocalStorage = (productName, quantity) => {
    const cart = getProductFromLocalStorage();

    cart[productName] = quantity;
    const cartString = JSON.stringify(cart);

    localStorage.getItem("cart", cartString)


}

const product = {
    laptop: 102
}

product["test"] = 100;
console.log(product) // {laptop: 102, test: 100}



