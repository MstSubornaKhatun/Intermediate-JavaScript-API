// promise

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>console.log(res.json())) // Promise
    .catch(err=>console.log(err)) // error dile dekhabe
}

loadData();

// promise all

const fetchData = () => {
    return new Promise((resolve, reject)=>{
        if(status){
            // resolve({name: "hero"})
            const mockData = {
                json:()=>Promise.reject({name:"hero"})
            }
            resolve
        }
        else {
            reject("server error")
        }
    })
}

fetchData()
.then(res => console.log(res))
.catch(err=>console.log(err))



//
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/comments',
]

Promise.all(urls.map(url => {
    return fetch(url).then(res=>res.json()).then(data=>data)
}))
.then(res=> res)
.then(data => console.log(data))
.catch(error=>console.log(error))