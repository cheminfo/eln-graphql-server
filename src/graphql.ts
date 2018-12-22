import { readFileSync } from 'fs';
import { join } from 'path';

import { Context } from 'koa';
import {
  ApolloServer,
  makeExecutableSchema,
  mergeSchemas,
  IResolvers
} from 'apollo-server-koa';
import { ContextFunction } from 'apollo-server-core';
import { GraphQLSchema } from 'graphql';

import Query from './resolvers/Query/Query';
import { IGraphQLContext } from './types';
import { eln } from './eln';

export interface IGraphQLConfig {
  schemas?: GraphQLSchema[];
  resolvers?: IResolvers;
}

const mainResolvers = {
  Query
};

const mainSchemaStr = readFileSync(join(__dirname, '../schema.gql'), 'utf8');
export const mainSchema = makeExecutableSchema({
  typeDefs: mainSchemaStr,
  resolvers: mainResolvers
});

const context: ContextFunction = async (app): Promise<IGraphQLContext> => {
  const ctx: Context = app.ctx;
  let userEmail = 'anonymous';
  if (ctx.session && ctx.isAuthenticated()) {
    userEmail = ctx.session.passport.user.email;
  }
  return {
    eln,
    userEmail
  };
};

export function createGraphqlServer(config: IGraphQLConfig) {
  const schema = mergeSchemas({
    schemas: [mainSchema, ...(config.schemas || [])],
    resolvers: config.resolvers
  });
  const graphqlServer = new ApolloServer({
    schema,
    context,
    // @ts-ignore
    playground: {
      settings: {
        'request.credentials': 'include'
      }
    }
  });
  return graphqlServer;
}
