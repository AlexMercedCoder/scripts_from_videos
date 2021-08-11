const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  ######################################
  # Define Data Types Below
  ######################################
  type Book {
    title: String
    author: String
  }

  ######################################
  # Define Input Types Below
  ######################################
  input newBook {
    title: String
    author: String
  }

  #######################################
  # Define all your Query Resolvers Below
  #######################################
  type Query {
    books: [Book]
  }

  #######################################
  # Define Mutations Below
  #######################################
  type Mutation {
    addBook(input: newBook): [Book]
  }
`;

module.exports = typeDefs;
