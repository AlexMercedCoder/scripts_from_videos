export default `
type Todo {
    message: String
}
type Query {
  getTodos: [Todo] 
}
type Mutation {
  createTodo(message: String): String
}
`;
    