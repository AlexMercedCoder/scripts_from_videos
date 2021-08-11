const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./typedefs/typedefs");
const resolvers = require("./resolvers/resolvers");
const context = require("./configs/context");
const serverOptions = require("./configs/serverOptions");
const {log} = require("mercedlogger")

// Apollo Settings

const ApolloSettings = { 
  typeDefs, 
  resolvers, 
  context, 
  cors: 
  { origin: "*" } 
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(ApolloSettings);

// The `listen` method launches a web server.
server.listen(serverOptions).then(({ url }) => {
  log.green("Server Initialize",`🚀  Server ready at ${url}`);
});
