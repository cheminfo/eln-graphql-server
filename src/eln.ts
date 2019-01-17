import { Couch } from 'rest-on-couch';

export const eln = Couch.get(process.env.COUCH_ELN_DBNAME || 'eln');
