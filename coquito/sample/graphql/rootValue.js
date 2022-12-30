// sample data
const todos = [{message: "Breakfast"}]

const rootValue = {
    // Resolver for getTodos query
    getTodos: () => todos,
    // Resolver for createTodo mutation
    createTodo: (args) => {
      const message = args.message;
      todos.push({ message });
      return "success";
    },
  };
  
  export default rootValue;