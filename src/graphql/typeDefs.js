const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
//Comments in GraphQL are defined with the hash (#) symbol.

//All inside of gql is GraphQl Syntax
const typeDefs = gql`
  type LoginResponse {
    token: String
    user: User
  }
  
  type User {
    id: ID
    name: String
    email: String!
  }
  type Entry {
    id: ID
    user: User
    from: String
    until: String
    description: String
  }
  
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    user(id: ID): User
    users: [User]
    entry(id:ID): Entry
    entries: [Entry]
  }

  # The "Mutation" type is the root of all GraphQL mutations.
  type Mutation {
    register (email: String!, password: String! name: String!) : User! 
    login (email: String!, password: String!): LoginResponse!
    addEntry (user_id: ID, from: String, until: String, description: String) : Entry
    deleteEntry (entry_id: ID!) : Entry
  }
  
`;

module.exports = {
  typeDefs
}