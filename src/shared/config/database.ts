/* tslint:disable */
import { IDatabaseConfig } from "./interfaces/data-base.interface";

export const databaseConfig: IDatabaseConfig = {
    development: {
        database: process.env.DB_NAME || "dataplus",
        dialect: process.env.DB_DIALECT || "mssql",
        dialectOptions: {
            encrypt: true
        },
        force: true,
        host: process.env.DB_HOST || "192.168.0.244",
        logging: false,
        password: process.env.DB_PASSWORD || "123456789",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "sa",
    },
    production: {
        database: process.env.DB_NAME || "dataplus",
        dialect: process.env.DB_DIALECT || "mssql",
        force: true,
        host: process.env.DB_HOST || "192.168.0.244",
        logging: false,
        password: process.env.DB_PASSWORD || "123456789",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "sa",
        dialectOptions: {
            encrypt: true
        },
    },
    test: {
        database: process.env.DB_NAME || "dataplus",
        dialect: process.env.DB_DIALECT || "mssql",
        force: true,
        host: process.env.DB_HOST || "192.168.0.244",
        logging: false,
        password: process.env.DB_PASSWORD || "123456789",
        port: Number(process.env.DB_PORT) || 1433,
        timezone: "-03:00",
        username: process.env.DB_USER || "sa",
        dialectOptions: {
            encrypt: true
        },
    },
};
