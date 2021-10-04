import {createSignal, createEffect, create} from "solid-js"

function Counter(props){

    const [getCounter, setCounter] = createSignal(0)
    const [getCheese, setCheese] = createSignal("cheese")

    const addOne = () => setCounter(getCounter() + 1)
    const addE = () =>  setCheese(getCheese() + "e")

    createEffect(() => {console.log(getCounter(), "in effect")})
    createEffect(() => {console.log(getCheese(), "in effect")})

    console.log(getCounter())

    return <>
    <h1>Counter</h1>
    <h2>{props.bread}</h2>
    <h3 onClick={addOne}>{getCounter}</h3>
    </>
}

export default Counter