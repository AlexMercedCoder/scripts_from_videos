import { APIEvent } from "solid-start/api";
 
const graphql = (schema, resolvers) => 
  (event) => { return new Response("GraphQL Response") }
 
const schema = `
  type Message {
      message String
  }

  type Query {
    hello: Message
  }
`;
 
const handler =  graphql(schema, {
  Query: {
    hello: () => {message: "Hello World"}
  }
});
 
export const GET = handler;
 
export const POST = handler;