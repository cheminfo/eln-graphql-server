import 'make-promises-safe';
import { makeGraphqlApp } from '../src/index';

import { testSchema } from './schema';

const port = 3002;

const app = makeGraphqlApp({
  schemas: [testSchema]
});

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
