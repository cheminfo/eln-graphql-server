import 'make-promises-safe';

import { app } from './app';

const port = 3002;

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
