import { useCounterState } from "../atom";

function Counter() {
  const [counter, setCounter] = useCounterState()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
    </div>
  );
}

export default Counter;
