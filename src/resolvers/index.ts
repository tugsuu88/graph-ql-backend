import { Request, Response } from 'express';
import { Resolvers } from '../graphql';

import * as Query from '@/resolvers/query';
import * as Mutation from '@/resolvers/mutation';

type IdToken = {
  user: {};
  token: string;
};

export type ResolverContext = {
  req: Request;
  res: Response;
  token: IdToken | null;
};

export const resolvers: Resolvers<ResolverContext> = {
  Query,
  Mutation,
};
