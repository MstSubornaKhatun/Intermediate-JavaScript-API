// function ghotok (patri){
//     console.log("ami ki callback korbo", patri) ; // ami ki callback korbo (2) ['rahi', 'jorina']
// }

// // const patri = "rahima";
// // const patri = ["rahi", "jorina"]
// // const patri = {name: "parvina"}
// // ami ki callback korbo {name: 'parvina'}




// ghotok(patri)









function ghotok (patri, name){
    // console.log("ami ki callback korbo", patri) ; // ami ki callback korbo (2) ['rahi', 'jorina']
    patri(name) 
}

// const patri = "rahima";
// const patri = ["rahi", "jorina"]
// const patri = {name: "parvina"}
// ami ki callback korbo {name: 'parvina'}

const patri1 = function (name){
    console.log("okay ami patri", name) // okay ami patri
    // okay ami patri halima
} 


const patri2 = function (name){
    console.log("okay ami patri", name) // okay ami patri hania
} 


const patri3 = function (name){
    console.log("okay ami patri", name) 
} 





ghotok(patri1, "halima")
ghotok(patri2, "hania") // 