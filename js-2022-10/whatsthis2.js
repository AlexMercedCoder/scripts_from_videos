function test(){
    console.log(this)
}

const alex = {name: "Alex Merced"}
const urkel = {name: "Steve Urkel"}

const newTest = test.bind(alex)

test()
newTest()