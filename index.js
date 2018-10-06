const { ApolloServer, gql } = require("apollo-server");
const users = require("./data").users;

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

const resolvers = {
  Query: {
    users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
