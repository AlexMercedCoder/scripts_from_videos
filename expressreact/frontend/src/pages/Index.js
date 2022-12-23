import { useLoaderData, Form, Link } from "react-router-dom";
import { Flex, Card } from "../styles";
function Index(props) {
  const cheeses = useLoaderData();

  return (
    <div>
      <Form action="/create" method="post">
        <input type="text" name="name" />
        <input type="checkbox" name="tasty" />
        <button>Create New Cheese</button>
      </Form>
      <Flex>
        {cheeses.map((cheese) => (
          <Card key={cheese._id}>
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <h2>{cheese.tasty ? "It's Tasty" : "Not Tasty"}</h2>
          </Card>
        ))}
      </Flex>
    </div>
  );
}

export default Index;
