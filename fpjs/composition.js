const modifyString = (str) => {
    const stringArray = str.split("")
    const reversed = stringArray.reverse()
    const capitalize = reversed.map((x) => x.toUpperCase())
    return capitalize.join("")
}

console.log(modifyString("hello"))

const stringToLetters = (str) => str.split("")
const reverseLetters = (letters) => letters.reverse()
const capitalizeLetters = (letters) => letters.map((x) => x.toUpperCase())
const lettersToWord = (letters) => letters.join("")

console.log(lettersToWord(capitalizeLetters(reverseLetters(stringToLetters("hello")))))