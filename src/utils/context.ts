import type { Request } from 'express';

import jwt from 'jsonwebtoken';
import { User } from '@/models/User.model';

export type IdToken = {
  user: User;
};

export const createToken = (user_id: String, user_phone: String): string => {
  return jwt.sign(
    {
      user: {
        user_id: user_id,
        user_phone: user_phone,
      },
    },
    process.env.jwtKey as string,
    {
      expiresIn: process.env.jwtExpireTime,
    },
  );
};

export function getIdTokenContext({ req }: { req: Request }): {
  token: IdToken | null;
} {
  try {
    const token: string = req.headers?.authorization?.split(' ')[1] || '';
    console.log('token: ', token);
    const idToken = jwt.verify(token, process.env.jwtKey as string) as IdToken;
    return { token: idToken };
  } catch (err) {
    return { token: null };
  }
}
