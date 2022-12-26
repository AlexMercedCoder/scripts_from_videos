import { useLoaderData, Link, Form } from "react-router-dom";

function Index() {
  const todos = useLoaderData();

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Link to={`/${todo.id}`}>
            {" "}
            <li>{todo.title}</li>
          </Link>
        ))}
      </ul>
      <h2>Create a Todo</h2>
      <Form action="/create" method="post">
            <input type="text" name="title"/>
            <input type="text" name="details"/>
            <button>Create Todo</button>
      </Form>
    </div>
  );
}

export default Index;
