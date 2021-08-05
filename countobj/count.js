const stringy = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

const countStrings = (str) => {
    const count = {}
    
    //split into array of works
    const words = str.split(" ")

    // loop over the words
    words.forEach((word) => {
        // check if property of the word exists, if so, add one, if not, start it at 1
        count[word] = count[word] ? count[word] + 1 : 1
    })

    return count
}

console.log(countStrings(stringy))