import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"

const Home = () => <h1>Home</h1>

const Other = () => <h1>Other</h1>

const Another = () => <h1>Another</h1>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/other" element={<Other/>}/>
        <Route path="/another" element={<Another/>}/>
      </Routes>
      <Link to="/"><button>Home</button></Link>
      <Link to="/other"><button>Other</button></Link>
      <Link to="/another"><button>Another</button></Link>
    </div>
  );
}

export default App;
