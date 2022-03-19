import { Router } from 'express';
import ReviewController from './review.controller';

const router = Router();
const controller = new ReviewController();

router.get('/', controller.getAll.bind(controller));

export default router;
