const util = require("util")

class Dog {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    [util.inspect.custom](){
        return `DOG NAME: ${this.name} ||| DOG AGE:  ${this.age}`
    }
}

const alex  = {
    [util.inspect.custom]: () => {return "Alex is a person"}
}

const Sparky = new Dog("Sparky", 6)

console.log(Sparky)
console.log(alex)