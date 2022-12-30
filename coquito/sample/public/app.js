async function examples(){
    // RPC Example
    const result1 = await rpcDispatch({ type: "getList", payload: {} });
    console.log("-----Result of RPC Call-------")
    console.log(result1)

    // GraphQL Example
    query = `query {
    getTodos{
        message
    }
    }`;
    const result2 = await gqlClient(query)
    console.log("-----Result of Graphql Call-------")
    console.log(result2)
}

examples()