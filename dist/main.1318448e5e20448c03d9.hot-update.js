exports.id = "main";
exports.modules = {

/***/ "./src/shared/config/database.ts":
/*!***************************************!*\
  !*** ./src/shared/config/database.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.databaseConfig = {\r\n    development: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n    production: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n    test: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/config/database.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./config/database */ \"./src/shared/config/database.ts\"));\r\n__export(__webpack_require__(/*! ./config/error-message */ \"./src/shared/config/error-message.ts\"));\r\n__export(__webpack_require__(/*! ./filters/dispatch-error */ \"./src/shared/filters/dispatch-error.ts\"));\r\n__export(__webpack_require__(/*! ./errors/index */ \"./src/shared/errors/index.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/index.ts?");

/***/ })

};