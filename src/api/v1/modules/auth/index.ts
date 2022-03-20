import { Router } from 'express';
import router from './auth.routes';

const PATH_MODULE = '/auth';

const RegisterRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default RegisterRoutes;
