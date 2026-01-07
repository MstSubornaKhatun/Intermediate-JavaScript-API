
// 2
/*
jsonplaceholder akhan theke fake api niye test korbo. try it er oita copy kore paste kore test korbo--

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


search google--
https://jsonplaceholder.typicode.com/todos/1

==>
    // 20260107191914
// https://jsonplaceholder.typicode.com/todos/1

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}







*/ 


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}      


const handleLoadData = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

}

// ekhnb btn a click korle dekha jabe

