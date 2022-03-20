import { Router } from 'express';
import { isAdmin, isAuth } from '../../middlewares/auth.middleware';
import OrderController from './order.controller';

const router = Router();
const controller = new OrderController();

router.get('/', isAuth, isAdmin, controller.getAll.bind(controller));

router.get('/:id', isAuth, controller.getOrderById.bind(controller));

export default router;
