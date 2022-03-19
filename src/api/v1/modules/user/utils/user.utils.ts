import { User } from '../user.model';
import jwt from 'jsonwebtoken';

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.username,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'esUnSecreto',
    {
      expiresIn: '30d',
    }
  );
};
