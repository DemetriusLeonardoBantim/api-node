import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMainController } from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const userSurveysController = new SurveysController();
const sendMailController = new SendMainController();

router.post('/users', userController.create);
router.post('/surveys', userSurveysController.create);
router.get('/surveys', userSurveysController.show);
router.post('/sendMail', sendMailController.execute);

export { router };
