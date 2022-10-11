const arrayOfObjects = [
    {Name: "Alex Merced", Age: 37, Email: "alex@alexmercedcoder.dev"},
    {Name: "Bob", Age: 34, Email: "Bob@Bob"},
    {Name: "Josie", Age: 17, Email: "Josie@Josie"},
]

console.log(arrayOfObjects)

// array.map - we will give a function, map will loop over the array and pass each item in the array to the function give, map returns a new array made up of the return value from the callback function for each item

const fixedArray = arrayOfObjects.map((oldVersion) => { 
    return {
        name: oldVersion.Name,
        age: oldVersion.Age,
        email: oldVersion.Email
    }
  })

console.log(fixedArray)

// array.forEach - loop over each item, runs the function, returns nothing

fixedArray.forEach((arrayItem, index) => {
    console.log(index, arrayItem)
})

// array.filter - given a function, if the function returns a truthy value, then the item is included in the new array that is returned

const filteredArray = fixedArray.filter((arrayItem) => {
    return true
})

console.log(filteredArray)