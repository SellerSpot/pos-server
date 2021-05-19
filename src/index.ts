import expresss, { Application } from 'express';
import 'express-async-errors';
import { CONFIG, configureDB } from 'configs/config';
import rootRouter from 'routers/router';
import {
    logger,
    middlewares,
    applyGracefullShutDownHandler,
} from '@sellerspot/universal-functions';

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
const server = app.listen(CONFIG.PORT, () =>
    logger.info(`SellerSpot Pos Server Started at the PORT ${CONFIG.PORT}`),
);

applyGracefullShutDownHandler(server);
