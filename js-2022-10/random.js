const randomNumber = (max) => Math.floor(Math.random() * max)

const randomRange = (min, max) => randomNumber(max - min) + min

const randomArray = (arr) => arr[randomNumber(arr.length)]

const randomObject = (obj) => obj[randomArray(Object.keys(obj))]

const myArr = ["cheese", "hello", "what", "see"]

const myObj = {
    name: "Alex Merced",
    age: 37,
    website: "alexmercedcoder.dev"
}

console.log(randomArray(myArr))
console.log(randomArray(myArr))
console.log(randomArray(myArr))
console.log(randomArray(myArr))
console.log(randomArray(myArr))
console.log(randomArray(myArr))

console.log(randomObject(myObj))
console.log(randomObject(myObj))
console.log(randomObject(myObj))
console.log(randomObject(myObj))
console.log(randomObject(myObj))