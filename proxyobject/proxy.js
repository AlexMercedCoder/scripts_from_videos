const genProxy = (obj, cb) => {
    const original = obj

    const handler = {
        set(obj, prop, value){
            console.log(obj, prop, value)
            obj[prop] = value
            cb(obj)
        }
    }

    const proxy = new Proxy(original, handler)

    return proxy
}


const test = genProxy({cheese: "gouda"}, () => console.log("callback"))

test.cheese = "munster"
console.log(test.cheese)
test.boop = "bop"
console.log(test)