/*
  This is a temporary type definition for rest-on-couch
  If you make modifications to this file, also apply them to index.d.ts in the
  rest-on-couch repo (branch prepare-graphql).
  TODO: remove when released in rest-on-couch
*/
declare module 'rest-on-couch' {
  class Couch {
    static get(databaseName: string): Couch;

    getEntry(uuid: string, user: string): Promise<any>;
  }

  interface IConfig {
    url?: string;
    authRenewal?: number;
    ldapGroupsRenewal?: number;
    administrators?: string[];
    superAdministrators?: string[];

    port?: number;
    fileDropPort?: number;
    // todo type this correctly
    auth?: any;
    authServers?: string[];
    proxy?: boolean;
    proxyPrefix?: string;
    publicAddress?: string;
    keys?: string[];

    sessionKey?: string;
    sessionMaxAge?: number;
    sessionPath?: string;
    sessionDomain?: string;
    sessionSecure?: boolean;
    sessionSigned?: boolean;

    allowedOrigins?: string[];
    debugrest?: boolean;
    rights?: any;
    getUserInfo?: (email: string) => any;
    ldapGetUserEmail?: (user: any) => string;
    entryUnicity?: 'byOwner' | 'global';

    auditActions?: boolean;
    auditActionsDb?: string;
  }

  var globalConfig: IConfig;

  interface IImportOptions {
    dryRun?: boolean;
  }

  interface IImportResult {}

  function importFile(
    database: string,
    importName: string,
    filePath: string,
    options?: IImportOptions
  ): Promise<IImportResult>;
}
