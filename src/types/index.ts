import { Couch } from 'rest-on-couch';

export interface IGraphQLContext {
  eln: Couch;
  userEmail: string;
}
