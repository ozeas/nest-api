exports.id = "main";
exports.modules = {

/***/ "./src/modules/database/database.provider.ts":
/*!***************************************************!*\
  !*** ./src/modules/database/database.provider.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst index_1 = __webpack_require__(/*! ../../shared/index */ \"./src/shared/index.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ../produtos/produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nexports.databaseProvider = {\r\n    provide: 'SequelizeInstance',\r\n    useFactory: () => {\r\n        let config;\r\n        switch (\"development\") {\r\n            case 'prod':\r\n            case 'production':\r\n                config = index_1.databaseConfig.development;\r\n            case 'dev':\r\n            case 'development':\r\n                config = index_1.databaseConfig.development;\r\n            default:\r\n                config = index_1.databaseConfig.development;\r\n        }\r\n        const sequelize = new sequelize_typescript_1.Sequelize(config);\r\n        sequelize.addModels([produto_entity_1.Produto]);\r\n        return sequelize;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/database/database.provider.ts?");

/***/ })

};