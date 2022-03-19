import { Router } from "express";
import productRegisterRoutes from "./product";
import userRegisterRoutes from "./user";

const registerRoutes = (router: Router) => {
  productRegisterRoutes(router);
  userRegisterRoutes(router);
};

export default registerRoutes;
