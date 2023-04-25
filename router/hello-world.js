import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const router = express.Router()

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => 'Hello world!',
};

router.get('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: { headerEditorEnabled: true },
}))

export default router