const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" }
];


// products.forEach(product => {
//     console.log(product);
//     /*
// {id: 1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'}
// {id: 2, name: 'xiaomi', color: 'gold', price: 100, brand: 'xiaomi'}
// {id: 3, name: 'samsung', color: 'gold', price: 1500, brand: 'sam'}
// {id: 4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'}
// {id: 5, name: 'xiaomi', color: 'black', price: 1100, brand: 'xiaomi'}
//     */ 
// })


// products.forEach(product => {
//     if(product.color==="gold"){
//         console.log(product)
//         /*
//         {id: 2, name: 'xiaomi', color: 'gold', price: 100, brand: 'xiaomi'}
//         {id: 3, name: 'samsung', color: 'gold', price: 1500, brand: 'sam'}
//         {id: 4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'}  

//         */ 
//     }
// })



const newProducts = products.filter(product=>product.price > 1000);
console.log(newProducts)
/*
(3) [{…}, {…}, {…}]
0
: 
{id: 1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'}
1
: 
{id: 3, name: 'samsung', color: 'gold', price: 1500, brand: 'sam'}
2
: 
{id: 5, name: 'xiaomi', color: 'black', price: 1100, brand: 'xiaomi'}
length
: 
3
*/ 

// find
// const product = products.find(p=>p.id===4)
// console.log(product) // {id: 4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'}

// find == pothome jake pabe rake return kore dibe
const product = products.find(p=>p.color==="gold");
console.log(product); // {id: 2, name: 'xiaomi', color: 'gold', price: 100, brand: 'xiaomi'}



// 3no bad diye baki 4ta nibo
const nProducts = products.filter(p=>p.id != 3);
console.log(nProducts);

/*
(4) [{…}, {…}, {…}, {…}]
0
: 
{id: 1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'}
1
: 
{id: 2, name: 'xiaomi', color: 'gold', price: 100, brand: 'xiaomi'}
2
: 
{id: 4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'}
3
: 
{id: 5, name: 'xiaomi', color: 'black', price: 1100, brand: 'xiaomi'}
length
: 
4
[[Prototype]]
: 
Array(0)
*/