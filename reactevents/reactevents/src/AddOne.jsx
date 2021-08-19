import React from "react"
import test from "./Events"


const AddOne = () => {

    return <button onClick={(event) => {
        test.emit("test")
    }}>Add One</button>
}

export default AddOne