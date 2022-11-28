import { APIEvent } from "solid-start/api";
 
const graphql = (schema: string, resolvers: any) => 
  (event: APIEvent) => { return new Response("GraphQL Response") }
 
const schema = `
  type Query {
    hello: String
  }
`;
 
const handler =  graphql(schema, {
  Query: {
    hello: () => "Hello World"
  }
});
 
export const GET = handler;
 
export const POST = handler;