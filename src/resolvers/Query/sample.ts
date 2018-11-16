import { IFieldResolver } from 'apollo-server-koa';

import { IGraphqlContext } from '../../types';
import { eln } from '../../eln';
import { Sample } from '../Sample';

interface ISampleQuery {
  id: string;
}

export const sample: IFieldResolver<
null,
IGraphqlContext,
ISampleQuery
> = async (_, query, context): Promise<Sample> => {
  const entry = await eln.getEntry(query.id, context.userEmail);
  return new Sample(entry);
};
