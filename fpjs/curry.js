// uncurried function
const addXYZ = (x,y,z) => x + y + z

console.log(addXYZ(1,2,3))

//curried function

const cAddXYZ = (x) => (y) => (z) => x + y + z

console.log(cAddXYZ(1)(2)(3))

let x = 1

const justX = cAddXYZ(x)

let y = 2

const xAndY = justX(y)

let z = 3

console.log(xAndY(z))