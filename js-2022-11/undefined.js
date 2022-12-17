const animals = {
    cow: "Mooo",
    pig: "oink",
    dogs: {
        big: "ruff"
    },
    cat: {
        big: "meow"
    }
}

console.assert(animals.cat, "the cat property doesn't exist")
console.assert(animals.cats, "the cats property doesn't exist")