import { buildSchema, graphql } from "graphql";
import { json } from "solid-start";

const schema = buildSchema(`
  type Message {
      message: String
  }

  type Query {
    hello(input: String): Message
    goodbye: String
  }
`);

const rootValue = {
    hello: () => {
        console.log(args)
        return {
            message: "Hello World"
          }
  },
  goodbye: () => {
      return "Goodbye"
  }
};

const graphQLHandler = async (event) => {  

  const body = await new Response(event.request.body).json()

  console.log(body)


  const result = await graphql({rootValue, schema, source: body.query})

  return json({result});
};

export const GET = graphQLHandler;

export const POST = graphQLHandler;
