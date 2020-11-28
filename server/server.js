const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');


// Graphql Type definitions and resolovers
const typeDefs = require('./modules/post/graphqlSchema');
const resolvers = require('./modules/post/resolvers');

// Initialize Apollo:server and Express app
const server = new ApolloServer( { typeDefs, resolvers});
const app = express();

// Express app middleware in Apollo server
server.applyMiddleware({ app });

// server listening endpoint
app.listen({ port: 3000 }, () => {
  console.log('Server running on http://localhost:${port}${server.graphqlPath}');
});
