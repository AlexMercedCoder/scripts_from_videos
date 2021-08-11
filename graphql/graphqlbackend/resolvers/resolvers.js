const books = require("../models/books");

const resolvers = {
  Query: {
    books: (parent, args, ctx, info) => books,
  },
  Mutation: {
    addBook: (parent, args, ctx, info) => {
      const { title, author } = args.input;
      books.push({ title, author });
      return books;
    },
  },
};

module.exports = resolvers;
