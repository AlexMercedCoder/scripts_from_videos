const myArray = [1,6,3,4,5,2]
const myArray2 = ["me", "you", "i"]

// forEach (loops over the array)

// myArray.forEach((item, index) => {
//     console.log(item)
//     console.log(index)
// })


// map (create a new array from the return values of the callback)

// const result = myArray.map((item, index) => {
//     return item + 1
// })

// const result2 = myArray2.map((item, index) => {
//     const split = item.split("")
//     split[0] = split[0].toUpperCase()
//     const final = split.join("")

//     return final
// })

// console.log(result2, myArray2)

// filter (return an array of items that the callback returns true)

// const result = myArray.filter((item, index) => {
//     return item % 2 === 1
// })

// console.log(result)

// some and every

// const result = myArray.some((item, index) => {
//     return item % 2 === 0
// })

// const result2 = myArray.every((item, index) => {
//     return item % 2 === 0
// })

// console.log(result, result2)

// find and findIndex

// const result = myArray2.find((item, index) => {
//     return item.split("")[0] === "y"
// })

// const result2 = myArray2.findIndex((item, index) => {
//     return item.split("")[0] === "y"
// })

// console.log(result, result2)

// reduce (cumulative)

const result = myArray.reduce((accumulator, item, index) => { return accumulator + item}, 0)

// acc | item | return value
// 0     1      1
// 1     2      3
// 3     3      6

console.log(result)

const result2 = myArray2.reduce((acc, item, index) => { return acc + item}, "")

// acc | item | return value
// ""    "me"   "me"
// "me"  "you"  "meyou"
// "meyou" "i"  "meyoui"

console.log(result2)

// sort (sorts the array)

console.log(myArray.sort())
console.log(myArray2.sort())
console.log([1,2,55,66,4,8,9].sort((item1, item2) => {
    const even1 = item1 % 2 === 0
    const even2 = item2 % 2 === 0
    return even1 && !even2 ? 1 : -1
}))