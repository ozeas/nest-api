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

/***/ }),

/***/ "./src/modules/produtos/produto.entity.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst tableOptions = {\r\n    tableName: \"produto\",\r\n    timestamps: false,\r\n};\r\nlet Produto = class Produto extends sequelize_typescript_1.Model {\r\n};\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        allowNull: false,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        type: sequelize_typescript_1.DataType.NUMERIC,\r\n        unique: true,\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"id\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Length({ min: 1, max: 40 }),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.CHAR(40),\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], Produto.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"valor\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"estoque\", void 0);\r\nProduto = __decorate([\r\n    sequelize_typescript_1.Table(tableOptions)\r\n], Produto);\r\nexports.Produto = Produto;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.entity.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.module.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst database_module_1 = __webpack_require__(/*! ../database/database.module */ \"./src/modules/database/database.module.ts\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst produto_controller_1 = __webpack_require__(/*! ./produto.controller */ \"./src/modules/produtos/produto.controller.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nconst produto_provider_1 = __webpack_require__(/*! ./produto.provider */ \"./src/modules/produtos/produto.provider.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nlet ProdutoModule = class ProdutoModule {\r\n    configure(consumer) {\r\n        consumer\r\n            .apply()\r\n            .forRoutes({ path: '/produtos', method: common_1.RequestMethod.GET }, { path: '/produtos', method: common_1.RequestMethod.POST }, { path: '/produtos/:id', method: common_1.RequestMethod.PUT }, { path: '/produtos/:id', method: common_1.RequestMethod.DELETE });\r\n    }\r\n};\r\nProdutoModule = __decorate([\r\n    common_1.Module({\r\n        imports: [\r\n            database_module_1.DatabaseModule,\r\n            passport_1.PassportModule.register({ defaultStrategy: 'bearer' }),\r\n        ],\r\n        providers: [\r\n            produto_repository_1.ProdutoRepository,\r\n            produto_provider_1.produtoProvider,\r\n            produto_service_1.ProdutoService,\r\n            produto_provider_1.repositoryProvide\r\n        ],\r\n        controllers: [produto_controller_1.ProdutoController]\r\n    })\r\n], ProdutoModule);\r\nexports.ProdutoModule = ProdutoModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.module.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/produto.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nexports.produtoProvider = {\r\n    provide: 'ProdutoModel',\r\n    useValue: produto_entity_1.Produto\r\n};\r\nexports.repositoryProvide = {\r\n    provide: 'ProdutoRepository',\r\n    useClass: produto_repository_1.ProdutoRepository\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.provider.ts?");

/***/ })

};