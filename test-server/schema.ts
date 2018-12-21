import { makeExecutableSchema } from 'apollo-server-koa';

const typeDefs = `
type Test {
  value: String
}

type Query {
  test: Test
}
`;

export const testSchema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      test() {
        return { value: 'hello' };
      }
    }
  }
});
