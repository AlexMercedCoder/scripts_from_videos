import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Form onSubmit={({formData}) => {
        console.log(formData.get("text"))
      }}>
        <input type="text" name="text"/>
        <input type="submit"/>
      </Form>
    </div>
  );
}

export default App;
