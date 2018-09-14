exports.id = "main";
exports.modules = {

/***/ "./src/modules/database/database.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/database/database.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst database_provider_1 = __webpack_require__(/*! ./database.provider */ \"./src/modules/database/database.provider.ts\");\r\nlet DatabaseModule = class DatabaseModule {\r\n};\r\nDatabaseModule = __decorate([\r\n    common_1.Module({\r\n        exports: [database_provider_1.databaseProvider],\r\n        providers: [database_provider_1.databaseProvider],\r\n    })\r\n], DatabaseModule);\r\nexports.DatabaseModule = DatabaseModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/database/database.module.ts?");

/***/ }),

/***/ "./src/modules/database/database.provider.ts":
/*!***************************************************!*\
  !*** ./src/modules/database/database.provider.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst index_1 = __webpack_require__(/*! ../../shared/index */ \"./src/shared/index.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ../produtos/produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nconst venda_item_entity_1 = __webpack_require__(/*! ../venda_item/venda_item.entity */ \"./src/modules/venda_item/venda_item.entity.ts\");\r\nexports.databaseProvider = {\r\n    provide: \"SequelizeInstance\",\r\n    useFactory: () => {\r\n        let config;\r\n        switch (\"development\") {\r\n            case \"prod\":\r\n            case \"production\":\r\n                config = index_1.databaseConfig.development;\r\n            case \"dev\":\r\n            case \"development\":\r\n                config = index_1.databaseConfig.development;\r\n            default:\r\n                config = index_1.databaseConfig.development;\r\n        }\r\n        const sequelize = new sequelize_typescript_1.Sequelize(config);\r\n        sequelize.addModels([produto_entity_1.Produto, venda_item_entity_1.VendaItem]);\r\n        return sequelize;\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/database/database.provider.ts?");

/***/ })

};