export default `
type Todo {
    message: String
}
type Query {
  getTodos: [Todo] 
  sayHello: String
}
type Mutation {
  createTodo(message: String): String
}
`;
    