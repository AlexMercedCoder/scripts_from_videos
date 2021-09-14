import './App.css';
import {useRecoilState} from "recoil"
import {Counter} from "./atom"
import Count from './Count';

function App() {

  const [counter, setCounter] = useRecoilState(Counter)

  return (
    <div className="App">
      {counter}
      <Count/>
    </div>
  );
}

export default App;
