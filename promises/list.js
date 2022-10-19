class List {
    constructor(){
        this.length = 0
        for (const arg of arguments){
            this.push(arg)
        }
    }

    push(value){
        this[this.length] = value
        this.length += 1  
        console.log(this)      
    }

    index(i){

        if (i < 0){
            return this[this.length + i]
        }
        return this[i]
    }

    loop(cb){
        for (let i = 0; i < this.length; i++){
            const item = this[i]
            cb(item, i)
        }
    }

    map(cb){
        const list = new List()

        this.loop((item, index) => {
            list.push(cb(item, index))
        })

        return list
    }
}


const myList = new List(1,2,3,4,5)

console.log(myList[0])
console.log(myList.index(-1))

myList.loop((item) => console.log(item))

console.log(myList.map((item, index) => item + index))