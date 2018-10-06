const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    name: "Luke",
    email: "luke@example.com",
    age: 25
  },
  {
    name: "Han",
    email: "han@example.com",
    age: 40
  },
  {
    name: "Leia",
    email: "leia@example.com",
    age: 28
  }
];

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
    users: () => users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
