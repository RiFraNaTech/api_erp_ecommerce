import { User } from '../../user/user.model';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export interface IUserLogin {
  username: string;
  password: string;
  isAdmin: boolean;
}

const jwtSecret = '@QEGTUI';

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || jwtSecret,
    {
      expiresIn: '1h',
    }
  );
};
