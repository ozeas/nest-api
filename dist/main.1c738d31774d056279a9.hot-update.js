exports.id = "main";
exports.modules = {

/***/ "./src/shared/config/database.ts":
/*!***************************************!*\
  !*** ./src/shared/config/database.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.databaseConfig = {\r\n    development: {\r\n        username: process.env.DB_USER || 'sa',\r\n        password: process.env.DB_PASSWORD || '123456789',\r\n        database: process.env.DB_NAME || 'datateste',\r\n        host: process.env.DB_HOST || '192.168.0.244',\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        dialect: 'mssql',\r\n        logging: false,\r\n        force: true,\r\n        timezone: '-02:00'\r\n    },\r\n    production: {\r\n        username: process.env.DB_USER || 'sa',\r\n        password: process.env.DB_PASSWORD || '123456789',\r\n        database: process.env.DB_NAME || 'datateste',\r\n        host: process.env.DB_HOST || '192.168.0.244',\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        dialect: 'mssql',\r\n        logging: false,\r\n        force: true,\r\n        timezone: '-02:00'\r\n    },\r\n    test: {\r\n        username: process.env.DB_USER || 'sa',\r\n        password: process.env.DB_PASSWORD || '123456789',\r\n        database: process.env.DB_NAME || 'datateste',\r\n        host: process.env.DB_HOST || '192.168.0.244',\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        dialect: 'mssql',\r\n        logging: true,\r\n        force: true,\r\n        timezone: '-02:00'\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/config/database.ts?");

/***/ })

};