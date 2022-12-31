import Dog from "../models/Dog.js";

console.log(await Dog.findAll())

console.log(await Dog.create({name: "Sparky", age: 6}))
console.log(await Dog.create({name: "Sarge", age: 6}))
console.log(await Dog.create({name: "Tippy", age: 6}))
console.log(await Dog.create({name: "Socko", age: 6}))