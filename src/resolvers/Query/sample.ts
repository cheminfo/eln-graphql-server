import { IFieldResolver } from 'apollo-server-koa';

import { IGraphQLContext } from '../../types';
import { Sample } from '../Sample';

export interface ISampleQuery {
  id: string;
}

export const sample: IFieldResolver<
null,
IGraphQLContext,
ISampleQuery
> = async (_, query, context): Promise<Sample> => {
  const entry = await context.eln.getEntry(query.id, context.userEmail);
  return new Sample(entry);
};
