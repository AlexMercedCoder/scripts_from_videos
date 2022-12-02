async function rpcClient(details){
    const response = await fetch("http://localhost:4444/rpc", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(details)
    })
    const result = await response.json()
    return result
}