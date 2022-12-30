function createClient(config){
    if (!config){
        throw "ERROR**** No Config object passed"
    }

    if (!config.url){
        throw "ERROR**** config object does not have url property"
    }

    return async (action) => {
        if (!action.type){
            throw "ERROR**** action does not have type property"
        }

        const type = action.type
        const payload = action.payload || {}
        const headers = config.headers || {}
        const body = JSON.stringify({type, payload})

        const response = await fetch(config.url, {
            method: "post",
            headers: {
                "content-type": "application/json",
                ...headers
            },
            body
        })

        return await response.json()
    }
    
}