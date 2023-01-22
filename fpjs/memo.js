// memoization means, cache calculation, and use the cache if given previous used arguments

const plusX = (num, x) => num + x

const memoizePlusX = () => {
    const cache = {}

    const memoizedFunction = (num, x) => {
        if (cache[`${num}-${x}`]){
            console.log("using cache")
            return cache[`${num}-${x}`]
        } else {
            console.log("running the function")
            cache[`${num}-${x}`] = plusX(num, x)
            return cache[`${num}-${x}`]
        }
    }


    return memoizedFunction

}

const memoPlusX = memoizePlusX()

console.log(memoPlusX(1,1))
console.log(memoPlusX(1,1))
console.log(memoPlusX(2,1))
console.log(memoPlusX(2,1))