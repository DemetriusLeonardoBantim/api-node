import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';

const router = Router();

const userController = new UserController();
const userSurveysController = new SurveysController();

router.post('/users', userController.create);
router.post('/surveys', userSurveysController.create);
router.get('/surveys', userSurveysController.show);
export { router };
