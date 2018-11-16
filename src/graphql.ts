import { readFileSync } from 'fs';
import { join } from 'path';

import { Context } from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';
import { ContextFunction } from 'apollo-server-core';

import Query from './resolvers/Query/Query';
import { IGraphqlContext } from './types';

const schema = readFileSync(join(__dirname, '../schema.gql'), 'utf8');
const typeDefs = gql(schema);

// Provide resolver functions for your schema fields
const resolvers = {
  Query
};

const context: ContextFunction = async (app): Promise<IGraphqlContext> => {
  const ctx: Context = app.ctx;
  let userEmail = 'anonymous';
  if (ctx.session && ctx.isAuthenticated()) {
    userEmail = ctx.session.passport.email;
  }
  return {
    userEmail
  };
};

export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  // @ts-ignore
  playground: {
    settings: {
      'request.credentials': 'include'
    }
  }
});
