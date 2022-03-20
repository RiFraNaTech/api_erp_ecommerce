import { Router } from 'express';
import router from './order.routes';

const PATH_MODULE = '/orders';

const RegisterRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default RegisterRoutes;
