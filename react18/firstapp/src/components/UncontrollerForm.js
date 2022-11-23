import {useState, useRef} from "react"

export default function UncontrolledForm (props){

    const [counter, setCounter] = useState({
        value: 1
    })

    console.log("rendered")

    const input = useRef(null)

    function changeValue(){
        const newState = {...counter}
        console.log(input)
        newState.value = Number(input.current.value)

        if(counter.value !== newState.value){
            setCounter(newState)
        }
        
    }


    return <div>
        <h1>{counter.value}</h1>
        <input type="number" ref={input}/>
        <button onClick={changeValue}>Update State</button>
    </div>
}