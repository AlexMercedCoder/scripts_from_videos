
const cheese = "gouda"

const calc = (a,b,operator) => {
    return (Function("...args", `console.log(args)`)(a,b, cheese))
}

console.log(calc(5,5, "+"))