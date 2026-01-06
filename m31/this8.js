
const person = {
    name: "sonali",
    action: function () {
        console.log(this.name)
    }
}

person.action(); //sonali


class Person {
    #status
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    sleep(){
        console.log(`${this.name} sleep at 10PM`)
    }

    action(){
        console.log(this.status)
    }
}

const solimUddin = new Person ("solim", 12, "single");
console.log(solimUddin) // Person {name: 'solim', age: 12}
solimUddin.sleep(); // solim sleep at 10PM


const kolimUddin = new Person ("kolim", 12);
console.log(kolimUddin)
kolimUddin.sleep(); 

console.log(solimUddin.status)
solimUddin.action(); // single


// class er baire theke kokhono access korte parbe na 
// #status 
// agulo banking system er jonno use kora hoi