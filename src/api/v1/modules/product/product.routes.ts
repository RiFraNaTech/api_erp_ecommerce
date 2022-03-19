import { Router } from "express";
import ProductController from "./product.controller";

const router = Router();
const controller = new ProductController();

router.get("/", controller.getAll.bind(controller));

export default router;
