exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.module.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst database_module_1 = __webpack_require__(/*! ../database/database.module */ \"./src/modules/database/database.module.ts\");\r\nconst produto_controller_1 = __webpack_require__(/*! ./produto.controller */ \"./src/modules/produtos/produto.controller.ts\");\r\nconst produto_provider_1 = __webpack_require__(/*! ./produto.provider */ \"./src/modules/produtos/produto.provider.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nlet ProdutoModule = class ProdutoModule {\r\n    configure(consumer) {\r\n        consumer\r\n            .apply()\r\n            .forRoutes({ path: \"/produtos\", method: common_1.RequestMethod.GET }, { path: \"/produtos\", method: common_1.RequestMethod.POST }, { path: \"/produtos/:id\", method: common_1.RequestMethod.PUT }, { path: \"/produtos/:id\", method: common_1.RequestMethod.DELETE });\r\n    }\r\n};\r\nProdutoModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [produto_controller_1.ProdutoController],\r\n        imports: [\r\n            database_module_1.DatabaseModule,\r\n            passport_1.PassportModule.register({ defaultStrategy: \"bearer\" }),\r\n        ],\r\n        providers: [\r\n            produto_repository_1.ProdutoRepository,\r\n            produto_provider_1.produtoProvider,\r\n            produto_service_1.ProdutoService,\r\n            produto_provider_1.repositoryProvide,\r\n        ],\r\n    })\r\n], ProdutoModule);\r\nexports.ProdutoModule = ProdutoModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.module.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/produto.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nexports.produtoProvider = {\r\n    provide: \"ProdutoModel\",\r\n    useValue: produto_entity_1.Produto,\r\n};\r\nexports.repositoryProvide = {\r\n    provide: \"ProdutoRepository\",\r\n    useClass: produto_repository_1.ProdutoRepository,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.provider.ts?");

/***/ })

};