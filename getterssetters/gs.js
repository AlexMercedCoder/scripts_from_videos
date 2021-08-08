const AlexMerced = {
    officialName: "Alex Merced",
    get name(){
        console.log("You have accessed the name")
        return this.officialName
    },
    set name(newValue) {
        console.log("You have changed the name")
        this.officialName = newValue
    },
    get formalName(){
        return "Mr. " + this.officialName
    }
}

console.log("Accessed Directly:", AlexMerced.officialName)
console.log(AlexMerced.formalName)

console.log("using getter:", AlexMerced.name)

AlexMerced.name = "Alexander Merced"

console.log("Accessed Directly:", AlexMerced.officialName)

console.log(AlexMerced.formalName)

class Person {
    cheese = "gouda"

    get food(){
        return this.cheese
    }
}

const alex = new Person()
console.log(alex.food)