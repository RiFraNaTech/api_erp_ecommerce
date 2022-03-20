import { Router } from 'express';
import UserController from './auth.controller';

const router = Router();
const controller = new UserController();

router.post('/signin', controller.signIn.bind(controller));

export default router;
