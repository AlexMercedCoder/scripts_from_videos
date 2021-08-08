"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makePerson = (data) => {
    return {
        name: data[0],
        age: data[1]
    };
};
console.log(makePerson(["Alex Merced", 36]));
