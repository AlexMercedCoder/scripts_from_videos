//////////////////////
/// Frontend Clients
///////////////////////////////////
// This file has clients to use in your frontend code if using templating.
// include the file with a script tag like so
// <script src="/clients.js" defer></script>
// GraphQL Client => gqlClient(query, headers)
// RPC Client => rpcDispatch({type, payload})
// Make sure to configure url variables below
//++++++++++++++++++++++++++++++
const inProduction = false
const productionURL = undefined
const url = inProduction ? productionURL : "http://localhost:4444"
  
//++++++++++++++++++++++++++++++
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
  
//++++++++++++++++++++++++++++++
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

// client for RPC Calls
const rpcDispatch = createClient({url:url + "/rpc"})
