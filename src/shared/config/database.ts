import { IDatabaseConfig } from "./interfaces/data-base.interface";

export const databaseConfig: IDatabaseConfig = {
    development: {
        database: process.env.DB_NAME || "",
        dialect: process.env.DB_DIALECT,
        force: true,
        host: process.env.DB_HOST || "",
        logging: false,
        password: process.env.DB_PASSWORD || "",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "",
    },
    production: {
        database: process.env.DB_NAME || "",
        dialect: process.env.DB_DIALECT,
        force: true,
        host: process.env.DB_HOST || "",
        logging: false,
        password: process.env.DB_PASSWORD || "",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "",
    },
    test: {
        database: process.env.DB_NAME || "",
        dialect: process.env.DB_DIALECT,
        force: true,
        host: process.env.DB_HOST || "",
        logging: false,
        password: process.env.DB_PASSWORD || "",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "",
    },
};
