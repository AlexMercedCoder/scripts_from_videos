const {createMatcher, matchArray} = require("alexmerced-patternmatcher")

class Cat {
    constructor(name, age){
        this.age,
        this.name
    }
}

class Dog {
    constructor(name, age){
        this.age,
        this.age
    }
}


const animals = [
    new Cat("Scratchy", 5),
    new Dog("Spunky", 3),
    new Cat("Paws", 3),
    new Dog("Old Yeller", 10)
]

const matcher = createMatcher([
    ["/name/.test('name')", (v) => console.log("It's a dog")],
    ["v instanceof ex.Cat", (v) => console.log("it's a cat")],
 ], {Cat, Dog})

matchArray(animals, matcher)
