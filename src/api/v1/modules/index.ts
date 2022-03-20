import { Router } from 'express';
import productRegisterRoutes from './product';
import userRegisterRoutes from './user';
import orderRegisterRoutes from './order';
import authRegisterRoutes from './auth';

const registerRoutes = (router: Router) => {
  productRegisterRoutes(router);
  userRegisterRoutes(router);
  orderRegisterRoutes(router);
  authRegisterRoutes(router);
};

export default registerRoutes;
