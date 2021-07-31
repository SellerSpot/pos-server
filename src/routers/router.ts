import { IResponse, ROUTES, STATUS_CODE } from '@sellerspot/universal-types';
import { Router } from 'express';
import billSettingsRouter from './billSettings';

const rootRouter = Router();

// all routers goes here
rootRouter.use('/', billSettingsRouter);

rootRouter.get(ROUTES.POS.INFO, (_, res) => {
    res.status(STATUS_CODE.OK).send(<IResponse>{ status: true, data: 'POS server heartbeat' });
});

rootRouter.all('*', (_, res) => res.status(STATUS_CODE.NOT_FOUND));

export { rootRouter };
