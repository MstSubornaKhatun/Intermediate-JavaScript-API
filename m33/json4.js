// jsonplaceholder theke https://jsonplaceholder.typicode.com/users er ata copy kore nibo.



const handleLoadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}

// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

const handleLoadUser = () => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(data => {
    console.log(data)
    displayUser(data)
})
}



const displayUser = (users) =>{
    console.log(users[0])
}