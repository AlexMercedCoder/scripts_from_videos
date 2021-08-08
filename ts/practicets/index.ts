import {StringArr, Person} from "./types"

const makePerson:Function = (data:StringArr):Person => {
    return {
        name: data[0],
        age: data[1]
    }
}

console.log(makePerson(["Alex Merced", 36]))