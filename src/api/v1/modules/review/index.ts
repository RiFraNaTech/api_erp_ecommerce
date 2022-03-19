import { Router } from 'express';
import router from './review.routes';

const PATH_MODULE = '/reviews';

const registerRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default registerRoutes;
