import { Router } from 'express';
import UserController from './user.controller';

const router = Router();
const controller = new UserController();

router.get('/', controller.getAll.bind(controller));

//router.get('/:id', controller.getById.bind(controller));

router.post('/signin', controller.signIn.bind(controller));

export default router;
