const nums = []

while (nums.length < 60000000){
    nums.push(nums.length)
}

console.time("no reduce")

console.log(nums.map((x) => x + 1).reduce((acc, num) => acc + num, 0))

console.timeEnd("no reduce")

console.time("Map Reduce")
const arrs = []

while(arrs.length < 6){
    const slice = nums.slice(10000000 * arrs.length, 10000000 * arrs.length + 10000000 )
    console.log(slice.length)
    arrs.push(slice)
}

const ps = arrs.map((arr) => new Promise((resolve, reject) => {
    resolve(arr.map(x => x + 1).reduce((acc, num) => acc + num, 0))
}))

const result = ps.reduce(async (acc, num) => {
    return await acc + await num
}, 0)

result.then((r) => console.log(r))

console.timeEnd("Map Reduce")

