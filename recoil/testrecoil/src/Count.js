import {useRecoilState} from "recoil"
import {Counter} from "./atom"

function Count (props){
    const [counter, setCounter] = useRecoilState(Counter)


    return <button onClick={() => {setCounter(counter + 1)}}>Count</button>
}

export default Count