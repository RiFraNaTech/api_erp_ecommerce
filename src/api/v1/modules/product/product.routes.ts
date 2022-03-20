import { Router } from 'express';
import { isAdmin, isAuth } from '../../middlewares/auth.middleware';
import ProductController from './product.controller';

const router = Router();
const controller = new ProductController();

// Listar todos los productos y buscar por nombre de producto
router.get('/', isAuth, controller.getAll.bind(controller));

// Buscar producto por id
router.get('/:id', isAuth, controller.getProductById.bind(controller));

// Guardar un nuevo producto
router.post('/', isAuth, isAdmin, controller.getAll.bind(controller));

export default router;
