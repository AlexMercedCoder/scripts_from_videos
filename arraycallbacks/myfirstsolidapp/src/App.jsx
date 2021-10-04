import Counter from "./components/Counter"

function App() {
  const cheese = "gouda";

  return (
    <div>
      <h1>{cheese}</h1>
      <Counter bread="rye"/>
    </div>
  );
}

export default App;
