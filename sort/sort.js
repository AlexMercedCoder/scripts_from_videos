const myArr = [
    {name: "spot", age: 6},
    {name: "rover", age: 3},
    {name: "cheese", age: 8},
    {name: "clifford", age: 2},

]

console.log(myArr.sort((x, y) => (x.age % 3) - (y.age % 3)))