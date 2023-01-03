import { SencilloDB, quickTx } from "sencillodb";

const db = new SencilloDB({file: "./db.json"})

const qtx = quickTx(db)

const createdDogs = await qtx("createMany", {
    data: [
        {name: "Scruffy", age: 5},
        {name: "Stevey", age: 5},
        {name: "Vtevey", age: 5},
        {name: "Varo", age: 5},
    ],
    collection: "dog",
    index: (obj) => obj.name.split("")[0]
})

// const result = await db.transaction((tx) => {
//     const dogsCreated = tx.createMany({
//         data: [
//             {name: "Scruffy", age: 5},
//             {name: "Stevey", age: 5},
//             {name: "Vtevey", age: 5},
//             {name: "Varo", age: 5},
//         ],
//         collection: "dog",
//         index: (obj) => obj.name.split("")[0]
//     })

//     return dogsCreated

// })

// console.log(result)

console.log(createdDogs)