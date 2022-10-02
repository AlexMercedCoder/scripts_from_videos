// function createPerson(name, age){

//     function constructPerson(name, age){
//         this.name = name
//         this.age = age
//     }

//     const newPerson = {constructPerson:constructPerson}


//     newPerson.constructPerson(name, age)

//     return newPerson

// }

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const alex = new Person("Alex Merced", 37)
console.log(alex)