// class MyArray extends Array{

//     random(){
//         const index = Math.floor(Math.random() * this.length)
//         return this[index]
//     }

// }

// const myArr = new MyArray()
// myArr.push(1)
// myArr.push(2)
// myArr.push(3)
// console.log(myArr)
// console.log(myArr.random())
// console.log(myArr.random())
// console.log(myArr.random())

class Random {

    static randomNum(num){
        return Math.floor(Math.random() * num)

    }

    static randomFromArr(arr){
        return arr[this.randomNum(arr.length)]
    }

    static randomInARange(min, max){
        let num;

        while(true){
            num = this.randomNum(max)

            if (num >= min){
                break
            }
        }

        return num
    }

}

console.log(Random.randomInARange(5, 10))
console.log(Random.randomInARange(5, 10))
console.log(Random.randomInARange(5, 10))
