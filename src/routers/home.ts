import { Router } from 'express';
import { homeController } from 'controllers/controller';

const homeRouter = Router();

homeRouter.get('/', homeController.homeController);

export default homeRouter;
