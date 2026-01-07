const handleLoadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showUser(data)) // single line a likle {} deoyar dorkar nai.
}

const showUser = (users) =>{
    // for (let i = 0; i <users.length; i++){
    //     const user = users[i];
    //     console.log(user)
    // }

    // for of loop diyeo kora jai
    for (const user of users){
        // console.log(user)

        const userContainer =  document.getElementById("users");

        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
    }
}