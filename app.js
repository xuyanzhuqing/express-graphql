import express from 'express';
import HelloWorldRouter from './router/hello-world'

const app = express();

app.use('/', HelloWorldRouter)

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000');