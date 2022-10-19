class Upcoming {

    #thens = []
    #catchs = []
    #finallys = []

    constructor(cb){

        const resolve = this.resolve.bind(this)
        const reject = this.reject.bind(this)

        setTimeout(() => cb(resolve, reject), 1)
        
        
    }

    resolve(value){
        console.log(this)

        for (const func of this.#thens){
            func(value)
        }

        for (const func of this.#finallys){
            func()
        }
    }

    reject(error){
        for (const func of this.#catchs){
            func(error)
        }

        for (const func of this.#finallys){
            func()
        }
    }

    then(cb){
        this.#thens.push(cb)

        return this
    }

    catch(cb){
        this.#catchs.push(cb)

        return this
    }

    finally(cb){
        this.#finallys.push(cb)

        return this
    }

}

module.exports = Upcoming