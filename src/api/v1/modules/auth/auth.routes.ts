import { Router } from 'express';
import UserController from './auth.controller';

const router = Router();
const controller = new UserController();

// SignIn - Login - Iniciar Sesion
router.post('/signin', controller.signIn.bind(controller));

// SignUp - Register - Registrar Usuario
router.post('/signup', controller.signUp.bind(controller));

export default router;
