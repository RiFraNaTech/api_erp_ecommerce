import { Router } from "express";
import router from "./user.routes";

const PATH_MODULE = "/users";

const registerRoutes = (routerContext: Router) => {
  routerContext.use(PATH_MODULE, router);
};

export default registerRoutes;
