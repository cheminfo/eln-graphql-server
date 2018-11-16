import { IFieldResolver } from 'apollo-server-koa';

import { IGraphqlContext } from '../../types';
import { eln } from '../../eln';

interface ISampleQuery {
  id: string;
}

export const sample: IFieldResolver<
null,
IGraphqlContext,
ISampleQuery
> = async (_, query, context) => {
  const entry = await eln.getEntry(query.id, context.userEmail);
  return { id: entry._id };
};
