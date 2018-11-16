import Koa from 'koa';
import koaBunyanLogger from 'koa-bunyan-logger';
import session from 'koa-session';
import passport from 'koa-passport';
import { globalConfig as config } from 'rest-on-couch';

import { graphqlServer } from './graphql';

export const app = new Koa();

app.on('error', () => {
  // disable default error logging
});

app.use(koaBunyanLogger());
// todo upstream typings
// @ts-ignore
app.use(koaBunyanLogger.requestIdContext());
// app.use(
//   // @ts-ignore
//   koaBunyanLogger.requestLogger({
//     ignorePaths: ['/favicon.ico']
//   })
// );

app.keys = config.keys!;
app.use(
  session(
    {
      key: config.sessionKey,
      maxAge: config.sessionMaxAge,
      // todo check why these are not not in the typedef
      // @ts-ignore
      path: config.sessionPath,
      domain: config.sessionDomain,
      secure: config.sessionSecure,
      httpOnly: true,
      signed: config.sessionSigned
    },
    app
  )
);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.use((ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = {};
  }
  return next();
});

graphqlServer.applyMiddleware({ app });
