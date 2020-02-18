const { ApolloServer, gql } = require("apollo-server");
const prisma = require('../prismaServer/generated/prisma-client/index');
const { getUser } = require('./helpers/auth');
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers');

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
// context contain prisma to call prisma server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = getUser(token)
    return {
      user: user,
      prisma: prisma
    }
  }
});

// This `listen` method launches a web-server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});







