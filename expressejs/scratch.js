function tag(strings, ...args){

    return strings.reduce((acc, item, index) => {
        if(args[index]){
            return acc + item + this.state[args[index]]
        } else {
            return acc + item
        }
    }, "")
}

function notATag(string){
    const parseString = string.split("|?!")
    return parseString.reduce((acc, item, index) => {
        if (index % 2 ===0){
            return acc + item
        } else {
            return acc + this.state[item]
        }
    }, "")
}

const obj1 = {
    tag,
    notATag,
    state: {
        cheese: "gouda",
        bread: "rye"
    }
}

const obj2 = {
    tag,
    notATag,
    state: {
        cheese: "provolone",
        bread: "white"
    }
}



console.log(obj1.tag`<h1>${"cheese"}</h1>
    <div>${"bread"}</div>`)

console.log(obj2.tag`<h1>${"cheese"}</h1>
    <div>${"bread"}</div>`)

console.log(obj1.notATag(`<h1> |?!cheese|?! </h1>
<div> |?!bread|?! </div>`))

console.log(obj2.notATag(`<h1> |?!cheese|?! </h1>
    <div> |?!bread|?! </div>`))