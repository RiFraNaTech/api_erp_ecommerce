import { Router } from "express";
import UserController from "./user.controller";

const router = Router();
const controller = new UserController();

router.get("/", controller.getAll.bind(controller));

export default router;
