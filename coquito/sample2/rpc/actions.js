const actions = {
        getList: (payload, context) => {
            console.log(context)
            return [1,2,3,4,5]
        },
    
        addToList: (payload, context) => {
            console.log(context)
            return [1,2,3,4,5, payload.num]
        },
        sayHello: (payload, context) => {
            return JSON.stringify(payload)
        }
    }
    
    export default actions