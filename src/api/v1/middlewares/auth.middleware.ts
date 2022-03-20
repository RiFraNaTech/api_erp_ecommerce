import { NextFunction, Request, Response } from 'express';
import { IUserLogin } from '../modules/auth/utils/auth.utils';
import * as jwt from 'jsonwebtoken';
import { jwtSecretSignatureServer as jwtSign } from '../constants/response.messages';

export const isAuth = (
  req: Request<{}, {}, IUserLogin>,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET || jwtSign, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token Invalido' });
      } else {
        req.body = decode as IUserLogin;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No hay Token' });
  }
};

export const isAdmin = (
  req: Request<{}, {}, IUserLogin>,
  res: Response,
  next: NextFunction
) => {
  if (req.body.username && req.body.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Token Admin Invalido' });
  }
};
