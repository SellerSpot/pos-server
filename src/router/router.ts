import { Router } from 'express';
import { IResponse, STATUS_CODE, ROUTES } from '@sellerspot/universal-types';
import homeRouter from './home';

const rootRouter = Router();

rootRouter.use(homeRouter);

rootRouter.get(ROUTES.POS.INFO, (_, res) =>
    res.status(STATUS_CODE.OK).send(<IResponse>{ status: true, data: 'Pos server heartbeat' }),
);

rootRouter.all('*', (_, res) => res.status(STATUS_CODE.NOT_FOUND));

export default rootRouter;
