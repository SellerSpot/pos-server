import { DbConnectionManager, DB_NAMES, models } from '@sellerspot/database-models';
import { DatabaseConnectionError, logger } from '@sellerspot/universal-functions';
import { CONFIG } from 'configs/config';
import mongoose from 'mongoose';

/**
 * Globals configure db
 *
 * configures the base db connection and sets the connnection in the global coreDb variable
 */
export const configureDB = (): void => {
    const connectionObject = mongoose.createConnection(CONFIG.GET_DATABASE_CONNECTION_URL(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        poolSize: 10, // to have multiple connection in case of bottle neck
    });

    connectionObject.on('error', (err: Error) => {
        logger.error(`Error Connecting to ${DB_NAMES.CORE_DB}, ${err.message}`);
        throw new DatabaseConnectionError();
    });

    connectionObject.once('open', () => {
        // initialize database-models with connection object
        DbConnectionManager.intialize(connectionObject);
        logger.info(`Connected to ${DB_NAMES.CORE_DB}`);
        models.handsake === true && logger.info(`All models registeded to runtime`);
    });
};
