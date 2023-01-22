// PURE FUNCTION
// DOESN'T mutate values outside
// Given the same inputs will return the same value

// IMPURE EXAMPLE #1 - Mutates an outside value

// let count = 1

// const incCount = () => count += 1

// console.log(count)
// incCount()
// console.log(count)
// incCount()
// console.log(count)
// incCount()

// Impure Example #2 - Doesn't neccessarily return the same value

// let num = 1
// const plusX = (x) => num + x

// console.log(plusX(1))
// console.log(plusX(1))
// num++
// console.log(plusX(1))
// console.log(plusX(1))

// Pure Function

const plusX = (num, x) => num + 1

let num = 1

console.log(plusX(num, 1))
console.log(plusX(num, 1))
num++
console.log(plusX(num, 1))
console.log(plusX(num, 1))