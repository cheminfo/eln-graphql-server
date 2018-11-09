import { readFileSync } from 'fs';
import { join } from 'path';

import { ApolloServer, gql } from 'apollo-server-koa';

const schema = readFileSync(join(__dirname, '../schema.gql'), 'utf8');
const typeDefs = gql(schema);

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

export const graphqlServer = new ApolloServer({ typeDefs, resolvers });
