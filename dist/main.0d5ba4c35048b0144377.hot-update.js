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

/***/ }),

/***/ "./src/modules/produtos/produto.repository.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.repository.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../../shared/errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nlet ProdutoRepository = class ProdutoRepository {\r\n    constructor(produtoRepository, sequelizeInstance) {\r\n        this.produtoRepository = produtoRepository;\r\n        this.sequelizeInstance = sequelizeInstance;\r\n    }\r\n    findAll(options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let filtro = {};\r\n            if (options) {\r\n                filtro = Object.assign({}, { where: options });\r\n            }\r\n            return yield this.produtoRepository.findAll(filtro);\r\n        });\r\n    }\r\n    findById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.produtoRepository.findById(id);\r\n        });\r\n    }\r\n    create(produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                    return yield this.produtoRepository.create(produto, {\r\n                        returning: true,\r\n                        transaction,\r\n                    });\r\n                }));\r\n            }\r\n            catch (error) {\r\n                throw new message_code_error_1.MessageCodeError(\"generic:onCreate\");\r\n            }\r\n        });\r\n    }\r\n    update(id, data) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                const produto = yield this.produtoRepository.findById(id, {\r\n                    transaction,\r\n                });\r\n                if (!produto) {\r\n                    throw new message_code_error_1.MessageCodeError(\"generic:notFound\");\r\n                }\r\n                return yield produto_entity_1.Produto.update(data, { where: { id }, transaction });\r\n            }));\r\n        });\r\n    }\r\n    delete(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                    return yield this.produtoRepository.destroy({\r\n                        transaction,\r\n                        where: { id },\r\n                    });\r\n                }));\r\n            }\r\n            catch (error) {\r\n                throw new message_code_error_1.MessageCodeError(\"generic:onDelete\");\r\n            }\r\n        });\r\n    }\r\n};\r\nProdutoRepository = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"ProdutoModel\")),\r\n    __param(1, common_1.Inject(\"SequelizeInstance\")),\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], ProdutoRepository);\r\nexports.ProdutoRepository = ProdutoRepository;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.repository.ts?");

/***/ })

};