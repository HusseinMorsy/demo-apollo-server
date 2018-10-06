const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String
    email: String
    age: Int
  }
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
