import { Router } from 'express';
import router from './user.routes';

const PATH_MODULE = '/users';

const RegisterRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default RegisterRoutes;
