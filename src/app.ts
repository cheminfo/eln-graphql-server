import Koa from 'koa';
import koaBunyanLogger from 'koa-bunyan-logger';

import { graphqlServer } from './graphql';

export const app = new Koa();

app.on('error', () => {
  // disable default error logging
});

app.use(koaBunyanLogger());
// todo upstream typings
// @ts-ignore
app.use(koaBunyanLogger.requestIdContext());
// @ts-ignore
app.use(koaBunyanLogger.requestLogger());

app.use((ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = {};
  }
  return next();
});

graphqlServer.applyMiddleware({ app });
