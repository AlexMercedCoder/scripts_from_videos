//+++++++++++++++++++++
  // Use this file to seed your database
  // import your models, create some items
  // run this file with "npm run seed"
  //++++++++++++++++++++++++++++++++++++

import Dog from "../models/Dog.js"

await Dog.create({name: "Scruffy"})
await Dog.create({name: "Biff"})
await Dog.create({name: "Cheesy"})

console.log(await Dog.findAll())