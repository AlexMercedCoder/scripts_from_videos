import { Form, Link, useLoaderData } from "react-router-dom";

function Show() {
  const todo = useLoaderData();

  return (
    <section>
      <h1>{todo.title}</h1>
      <h2>{todo.details}</h2>
      <h2>Update Todo</h2>
      <Form action={`/update/${todo.id}`} method="post">
        <input type="text" name="title" defaultValue={todo.title} />
        <input type="text" name="details" defaultValue={todo.details}/>
        <button>Update Todo</button>
      </Form>
      <Form action={`/delete/${todo.id}`} method="post">
          <button>Delete</button>
      </Form>
    </section>
  );
}

export default Show;
