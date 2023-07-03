import 'module-alias/register';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import dotenv from 'dotenv';
import { loadFiles } from '@graphql-tools/load-files';

import { resolvers } from './resolvers';
import index from './models';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { getIdTokenContext } from './utils/context';
import upload from './file/file.route';

dotenv.config();

interface MyContext {
  token?: String;
}

async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs: await loadFiles('src/schema/*.graphql'),
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  index.sync().then(() => {
    console.log('db connected');
  });

  await server.start();

  app.use('/upload', upload);
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json({ limit: '50mb' }),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        req,
        res,
        ...getIdTokenContext({ req }),
      }),
    }),
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:4000/`);
}
main();
