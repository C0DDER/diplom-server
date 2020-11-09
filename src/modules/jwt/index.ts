import jwt, { Algorithm } from 'jsonwebtoken';

const key = 'shhhhhhhhh';

const options = {
  algorithm: 'HS256' as Algorithm,
  expiresIn: process.env.REFRESH_TOKEN_LIFE.replace(/\\n/gm, '\n')
}
export const createJWT = (payload: object) => jwt.sign(payload, key, options);

export const verifyJWT = (token: string) => jwt.verify(token, key);