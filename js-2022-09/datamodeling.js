class Cat {
    constructor(name, age, isFixed, sex){
        this.name = name
        this.age = age
        this.isFixed = isFixed
        this.sex = sex
    }
}


// function createCat(name, age, isFixed, sex){
//     return {
//         name,
//         age,
//         isFixed,
//         sex
//     }
// }

function isCatFixed(cat){
    if (cat instanceof Cat){
        return cat.isFixed
    }
    throw("Did not pass a cat object")
}

const cat = new Cat("Fluffy", 5, false, "male")

const cat2 = new Cat("Spike", 6, true, "male")


const cats = [cat, cat2]

console.log(cats)
console.log(cats[0] instanceof Cat)

console.log(isCatFixed(cats[0]))

const Alex = {name: "Alex", age: 37}

console.log(isCatFixed(Alex))