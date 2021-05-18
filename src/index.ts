import expresss, { Application } from 'express';
import 'express-async-errors';
import { CONFIG, configureDB } from './config/config';
import rootRouter from './router/router';
import { logger, middlewares } from '@sellerspot/universal-functions';

// globals
const app: Application = expresss();

// db configurations
configureDB();

//common middlewares applied
middlewares.applyCommon(app);

// router setup
app.use('/', rootRouter);

// error handler
app.use(middlewares.errorHandler);

// listeners
app.listen(CONFIG.PORT, () =>
    logger.info(`SellerSpot Pos Server Started at the PORT ${CONFIG.PORT}`),
);
