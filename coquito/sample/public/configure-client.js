const productionURL = undefined
const url = productionURL ? productionURL : "http://localhost:4000"

// client for RPC Calls
const rpcDispatch = createClient({url:url + "/rpc"})

// client for graphql calls
const gqlClient = async (query, headers = {}) => {
    const response = await fetch(url + "/graphql", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify({query})
    })

    return await response.json()
    
}