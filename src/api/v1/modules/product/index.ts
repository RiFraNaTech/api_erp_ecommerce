import { Router } from "express";
import router from "./product.routes";

const PATH_MODULE = "/products";

const registerRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default registerRoutes;
