'use strict';

module.exports = {
  allowedOrigins: ['http://localhost:3000'],
  sessionDomain: 'localhost',
  sessionKey: 'koa:roc-eln',
  keys: ['f056d53d420264cba2ff6cf6cf4fd623'],
  administrators: ['admin@cheminfo.org'],
  url: 'http://localhost:4445',
  username: 'rest-on-couch',
  password: 'password',
  logLevel: 'FATAL',
  auth: {
    // do not disable couchdb login. You can enable "showLogin" if necessary
    couchdb: {
      showLogin: false
    }
  },

  // Default database rights
  // Any logged in user can create documents. Only owners can read and write their own documents
  rights: {
    read: [],
    write: [],
    create: ['anyuser']
  }
};
