import { Router } from 'express';
import { isAdmin, isAuth } from '../../middlewares/auth.middleware';
import UserController from './user.controller';

const router = Router();
const controller = new UserController();

router.get('/', isAuth, isAdmin, controller.getAll.bind(controller));

router.get('/:id', controller.getById.bind(controller));

export default router;
