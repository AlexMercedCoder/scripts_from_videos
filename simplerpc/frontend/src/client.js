import {createClient} from "@alexmerced/simplerpc-client"

const rpcDispatch = createClient({
    url: "http://localhost:4000/rpc",
})

export default rpcDispatch