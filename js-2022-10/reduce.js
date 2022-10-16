function reduce (arr, callback, start){
    let result = start

    for (let index = 0; index < arr.length; index++){
        console.log(`acc is ${result} and item is ${arr[index]} and result is ${callback(result, arr[index], index)}`)
        result = callback(result, arr[index], index)
    }

    return result
}

console.log([1,2,3,4,5].reduce((acc, item) => acc + item, 0))

console.log("hello i am a sentence".split(" ").reduce((str, word) => {
    const uppered = word.split("")
    uppered[0] = uppered[0].toUpperCase()
    return str + uppered.join("") + " "
}, ""))