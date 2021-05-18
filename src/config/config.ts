import { DB_NAMES } from '@sellerspot/database-models';

export * from './databaseConfig';

export const CONFIG = {
    ENV: process.env.ENV,
    PORT: JSON.parse(process.env.PORT),
    DATABASE_SERVER_URL: process.env.DATABASE_SERVER_URL,
    DATABASE_SERVER_QUERY: process.env.DATABASE_SERVER_QUERY,
    GET_DATABASE_CONNECTION_URL: (): string =>
        CONFIG.DATABASE_SERVER_URL + DB_NAMES.CORE_DB + CONFIG.DATABASE_SERVER_QUERY, // subject to change (core db)
    APP_SECRET: process.env.APP_SECRET,
    DOMAIN: process.env.DOMAIN,
};
