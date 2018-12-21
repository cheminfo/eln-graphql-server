import { app } from './app';
import { createGraphqlServer, IGraphQLConfig, mainSchema } from './graphql';
import { IGraphQLContext } from './types';

export function makeGraphqlApp(config: IGraphQLConfig) {
  const server = createGraphqlServer(config);
  server.applyMiddleware({ app });
  return app;
}

export { IGraphQLConfig, IGraphQLContext, mainSchema };
