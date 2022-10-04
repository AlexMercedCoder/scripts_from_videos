class Cat {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    meow(){
        console.log("Meow")
    }
}

class Calico extends Cat {
    constructor(name, age, weight){
        super(name, age)
        this.weight = weight
    }

    meow(){
        super.meow()
        console.log("Rawwr")
    }
}

const mittens = new Calico("Mittens", 5, 40)
console.log(mittens)
mittens.meow()