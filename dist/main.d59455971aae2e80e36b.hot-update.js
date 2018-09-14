exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\r\nconst http_strategy_1 = __webpack_require__(/*! ./http.strategy */ \"./src/modules/auth/http.strategy.ts\");\r\nlet AuthModule = class AuthModule {\r\n};\r\nAuthModule = __decorate([\r\n    common_1.Module({\r\n        imports: [\r\n            passport_1.PassportModule.register({ defaultStrategy: \"bearer\" }),\r\n        ],\r\n        providers: [auth_service_1.AuthService, http_strategy_1.HttpStrategy],\r\n    })\r\n], AuthModule);\r\nexports.AuthModule = AuthModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.module.ts?");

/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet AuthService = class AuthService {\r\n    validateUser(token) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return false;\r\n        });\r\n    }\r\n};\r\nAuthService = __decorate([\r\n    common_1.Injectable()\r\n], AuthService);\r\nexports.AuthService = AuthService;\r\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.service.ts?");

/***/ }),

/***/ "./src/modules/auth/http.strategy.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/http.strategy.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst passport_http_bearer_1 = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\r\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\r\nlet HttpStrategy = class HttpStrategy extends passport_1.PassportStrategy(passport_http_bearer_1.Strategy) {\r\n    constructor(authService) {\r\n        super();\r\n        this.authService = authService;\r\n    }\r\n    validate(token) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const user = yield this.authService.validateUser(token);\r\n            if (!user) {\r\n                throw new common_1.UnauthorizedException();\r\n            }\r\n            return user;\r\n        });\r\n    }\r\n};\r\nHttpStrategy = __decorate([\r\n    common_1.Injectable(),\r\n    __metadata(\"design:paramtypes\", [auth_service_1.AuthService])\r\n], HttpStrategy);\r\nexports.HttpStrategy = HttpStrategy;\r\n\n\n//# sourceURL=webpack:///./src/modules/auth/http.strategy.ts?");

/***/ }),

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst index_1 = __webpack_require__(/*! ../../shared/index */ \"./src/shared/index.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ../produtos/produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nexports.databaseProvider = {\r\n    provide: \"SequelizeInstance\",\r\n    useFactory: () => {\r\n        let config;\r\n        switch (\"development\") {\r\n            case \"prod\":\r\n            case \"production\":\r\n                config = index_1.databaseConfig.development;\r\n            case \"dev\":\r\n            case \"development\":\r\n                config = index_1.databaseConfig.development;\r\n            default:\r\n                config = index_1.databaseConfig.development;\r\n        }\r\n        const sequelize = new sequelize_typescript_1.Sequelize(config);\r\n        sequelize.addModels([produto_entity_1.Produto]);\r\n        return sequelize;\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/database/database.provider.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.controller.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.controller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst Message = __webpack_require__(/*! ../../shared/messages/message-code-success */ \"./src/shared/messages/message-code-success.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nconst validators_1 = __webpack_require__(/*! ./validators */ \"./src/modules/produtos/validators/index.ts\");\r\nlet ProdutoController = class ProdutoController {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n    }\r\n    index(res, options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const produtos = yield this.produtoService.getAll(options);\r\n            return res.status(common_1.HttpStatus.OK).json(produtos);\r\n        });\r\n    }\r\n    create(res, produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.create(produto);\r\n                return res.status(common_1.HttpStatus.CREATED).json(Message.CRIADO);\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n    show(res, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const produto = yield this.produtoService.get(id);\r\n            return res.status(common_1.HttpStatus.OK).json(produto);\r\n        });\r\n    }\r\n    update(res, produto, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.update(id, produto);\r\n                return res.status(common_1.HttpStatus.OK).json(Message.ATUALIZADO);\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n    delete(res, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.delete(id);\r\n                return res.status(common_1.HttpStatus.ACCEPTED).json(Message.DELETADO);\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    swagger_1.ApiResponse({ status: 200, description: \"Produto[{}]\" }),\r\n    common_1.Get(\"produtos\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Query()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"index\", null);\r\n__decorate([\r\n    swagger_1.ApiResponse({ status: 201, description: \"Criado com sucesso\" }),\r\n    swagger_1.ApiForbiddenResponse({ description: \"Houve um erro ao criar o objeto\" }),\r\n    common_1.Post(\"produtos\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Body()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, validators_1.CreateProdutoValidate]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"create\", null);\r\n__decorate([\r\n    swagger_1.ApiResponse({ status: 200, description: \"Produto{}\" }),\r\n    common_1.Get(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"show\", null);\r\n__decorate([\r\n    swagger_1.ApiResponse({ status: 200, description: \"Atualizado com sucesso\" }),\r\n    swagger_1.ApiForbiddenResponse({ description: \"Houve um erro ao editar os dados\" }),\r\n    common_1.Put(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, validators_1.UpdateProdutoValidate, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"update\", null);\r\n__decorate([\r\n    swagger_1.ApiResponse({ status: 202, description: \"Excluído com sucesso\" }),\r\n    swagger_1.ApiForbiddenResponse({ description: \"Houve um erro ao excluir os dados\" }),\r\n    common_1.Delete(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"delete\", null);\r\nProdutoController = __decorate([\r\n    common_1.Controller(),\r\n    common_1.Catch(common_1.HttpException),\r\n    __metadata(\"design:paramtypes\", [produto_service_1.ProdutoService])\r\n], ProdutoController);\r\nexports.ProdutoController = ProdutoController;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.controller.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst database_module_1 = __webpack_require__(/*! ../database/database.module */ \"./src/modules/database/database.module.ts\");\r\nconst produto_controller_1 = __webpack_require__(/*! ./produto.controller */ \"./src/modules/produtos/produto.controller.ts\");\r\nconst produto_provider_1 = __webpack_require__(/*! ./produto.provider */ \"./src/modules/produtos/produto.provider.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nconst produto_resolvers_1 = __webpack_require__(/*! ./produto.resolvers */ \"./src/modules/produtos/produto.resolvers.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nlet ProdutoModule = class ProdutoModule {\r\n    configure(consumer) {\r\n        consumer\r\n            .apply()\r\n            .forRoutes({ path: \"/produtos\", method: common_1.RequestMethod.GET }, { path: \"/produtos\", method: common_1.RequestMethod.POST }, { path: \"/produtos/:id\", method: common_1.RequestMethod.PUT }, { path: \"/produtos/:id\", method: common_1.RequestMethod.DELETE });\r\n    }\r\n};\r\nProdutoModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [produto_controller_1.ProdutoController],\r\n        imports: [\r\n            database_module_1.DatabaseModule,\r\n            passport_1.PassportModule.register({ defaultStrategy: \"bearer\" }),\r\n        ],\r\n        providers: [\r\n            produto_repository_1.ProdutoRepository,\r\n            produto_provider_1.produtoProvider,\r\n            produto_service_1.ProdutoService,\r\n            produto_provider_1.repositoryProvide,\r\n            produto_resolvers_1.ProdutoResolvers,\r\n        ],\r\n    })\r\n], ProdutoModule);\r\nexports.ProdutoModule = ProdutoModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.module.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../../shared/errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nlet ProdutoRepository = class ProdutoRepository {\r\n    constructor(produtoRepository, sequelizeInstance) {\r\n        this.produtoRepository = produtoRepository;\r\n        this.sequelizeInstance = sequelizeInstance;\r\n    }\r\n    findAll(options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let filtro = {};\r\n            if (options) {\r\n                filtro = Object.assign({}, { where: options });\r\n            }\r\n            return yield this.produtoRepository.findAll(filtro);\r\n        });\r\n    }\r\n    findById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.produtoRepository.findById(id);\r\n        });\r\n    }\r\n    create(produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                    return yield this.produtoRepository.create(produto, {\r\n                        returning: true,\r\n                        transaction,\r\n                    });\r\n                }));\r\n            }\r\n            catch (error) {\r\n                throw new message_code_error_1.MessageCodeError(\"generic:onCreate\");\r\n            }\r\n        });\r\n    }\r\n    update(id, data) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                const produto = yield this.produtoRepository.findById(id, {\r\n                    transaction,\r\n                });\r\n                if (!produto) {\r\n                    throw new message_code_error_1.MessageCodeError(\"generic:onUpdate\");\r\n                }\r\n                return yield produto_entity_1.Produto.update(data, { where: { id }, transaction });\r\n            }));\r\n        });\r\n    }\r\n    delete(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                    return yield this.produtoRepository.destroy({\r\n                        transaction,\r\n                        where: { id },\r\n                    });\r\n                }));\r\n            }\r\n            catch (error) {\r\n                throw new message_code_error_1.MessageCodeError(\"generic:onDelete\");\r\n            }\r\n        });\r\n    }\r\n};\r\nProdutoRepository = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"ProdutoModel\")),\r\n    __param(1, common_1.Inject(\"SequelizeInstance\")),\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], ProdutoRepository);\r\nexports.ProdutoRepository = ProdutoRepository;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.repository.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.resolvers.ts":
/*!***************************************************!*\
  !*** ./src/modules/produtos/produto.resolvers.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nlet ProdutoResolvers = class ProdutoResolvers {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n    }\r\n    getProdutos() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.produtoService.getAll();\r\n        });\r\n    }\r\n    findOneById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.produtoService.get(id);\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    graphql_1.Query(),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoResolvers.prototype, \"getProdutos\", null);\r\n__decorate([\r\n    graphql_1.Query(\"produto\"),\r\n    __param(0, graphql_1.Args(\"id\", common_1.ParseIntPipe)),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoResolvers.prototype, \"findOneById\", null);\r\nProdutoResolvers = __decorate([\r\n    graphql_1.Resolver(\"Produto\"),\r\n    __metadata(\"design:paramtypes\", [produto_service_1.ProdutoService])\r\n], ProdutoResolvers);\r\nexports.ProdutoResolvers = ProdutoResolvers;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.resolvers.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/create-produto-dto.ts":
/*!***************************************************************!*\
  !*** ./src/modules/produtos/validators/create-produto-dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CreateProdutoValidate {\r\n}\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        maximum: 40,\r\n        required: true,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.MaxLength(40, {\r\n        message: \"Descrição não deve ser maior que 40 caracters.\",\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CreateProdutoValidate.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: true,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], CreateProdutoValidate.prototype, \"valor\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: true,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], CreateProdutoValidate.prototype, \"estoque\", void 0);\r\nexports.CreateProdutoValidate = CreateProdutoValidate;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/create-produto-dto.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/validators/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./create-produto-dto */ \"./src/modules/produtos/validators/create-produto-dto.ts\"));\r\n__export(__webpack_require__(/*! ./update-produto-dto */ \"./src/modules/produtos/validators/update-produto-dto.ts\"));\r\n__export(__webpack_require__(/*! ./searc-produto-dto */ \"./src/modules/produtos/validators/searc-produto-dto.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/index.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/searc-produto-dto.ts":
/*!**************************************************************!*\
  !*** ./src/modules/produtos/validators/searc-produto-dto.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass SearchProdutoValidate {\r\n}\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        maximum: 40,\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsOptional(),\r\n    __metadata(\"design:type\", String)\r\n], SearchProdutoValidate.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsOptional(),\r\n    __metadata(\"design:type\", Number)\r\n], SearchProdutoValidate.prototype, \"valor\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsOptional(),\r\n    __metadata(\"design:type\", Number)\r\n], SearchProdutoValidate.prototype, \"estoque\", void 0);\r\nexports.SearchProdutoValidate = SearchProdutoValidate;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/searc-produto-dto.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/update-produto-dto.ts":
/*!***************************************************************!*\
  !*** ./src/modules/produtos/validators/update-produto-dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass UpdateProdutoValidate {\r\n}\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        maximum: 40,\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.MaxLength(40, {\r\n        message: \"Descrição não deve ser maior que 40 caracters.\",\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UpdateProdutoValidate.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], UpdateProdutoValidate.prototype, \"valor\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], UpdateProdutoValidate.prototype, \"estoque\", void 0);\r\nexports.UpdateProdutoValidate = UpdateProdutoValidate;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/update-produto-dto.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\r\nfunction bootstrap() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);\r\n        const options = new swagger_1.DocumentBuilder()\r\n            .setTitle(\"AdSoft - API NestJs\")\r\n            .setDescription(\"Estrutura de api usada pela AdSoft com NodeJs\")\r\n            .setVersion(\"0.001\")\r\n            .addTag(\"adsoft-api\")\r\n            .build();\r\n        const document = swagger_1.SwaggerModule.createDocument(app, options);\r\n        swagger_1.SwaggerModule.setup(\"api\", app, document);\r\n        app.useGlobalPipes(new common_1.ValidationPipe({\r\n            dismissDefaultMessages: false,\r\n            transform: true,\r\n        }));\r\n        yield app.listen(3000);\r\n        if (true) {\r\n            module.hot.accept();\r\n            module.hot.dispose(() => app.close());\r\n        }\r\n    });\r\n}\r\nbootstrap();\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/shared/config/database.ts":
/*!***************************************!*\
  !*** ./src/shared/config/database.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.databaseConfig = {\r\n    development: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n    production: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n    test: {\r\n        database: process.env.DB_NAME || \"datateste\",\r\n        dialect: \"mssql\",\r\n        force: true,\r\n        host: process.env.DB_HOST || \"192.168.0.244\",\r\n        logging: false,\r\n        password: process.env.DB_PASSWORD || \"123456789\",\r\n        port: Number(process.env.DB_PORT) || 1433,\r\n        timezone: \"-02:00\",\r\n        username: process.env.DB_USER || \"sa\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/config/database.ts?");

/***/ }),

/***/ "./src/shared/config/error-message.ts":
/*!********************************************!*\
  !*** ./src/shared/config/error-message.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nexports.errorMessagesConfig = {\r\n    \"generic:notFound\": {\r\n        errorMessage: \"Objeto não encontrado\",\r\n        httpStatus: common_1.HttpStatus.NOT_FOUND,\r\n        type: \"notFound\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onCreate\": {\r\n        errorMessage: \"Houve um erro ao criar o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onCreate\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onDelete\": {\r\n        errorMessage: \"Houve um erro ao excluir o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onDelete\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onUpdate\": {\r\n        errorMessage: \"Houve um erro ao editar o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onUpdate\",\r\n        userMessage: \"\",\r\n    },\r\n    \"request:unauthorized\": {\r\n        errorMessage: \"Acesso não autorizado.\",\r\n        httpStatus: common_1.HttpStatus.UNAUTHORIZED,\r\n        type: \"unauthorized\",\r\n        userMessage: \"Acesso não autorizado.\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/config/error-message.ts?");

/***/ }),

/***/ "./src/shared/errors/index.ts":
/*!************************************!*\
  !*** ./src/shared/errors/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./message-code-error */ \"./src/shared/errors/message-code-error.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/errors/index.ts?");

/***/ }),

/***/ "./src/shared/errors/message-code-error.ts":
/*!*************************************************!*\
  !*** ./src/shared/errors/message-code-error.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst error_message_1 = __webpack_require__(/*! ../config/error-message */ \"./src/shared/config/error-message.ts\");\r\nclass MessageCodeError extends Error {\r\n    constructor(messageCode) {\r\n        super();\r\n        const errorMessageConfig = this.getMessageFromMessageCode(messageCode);\r\n        if (!errorMessageConfig) {\r\n            throw new Error(\"Unable to find message code error.\");\r\n        }\r\n        Error.captureStackTrace(this, this.constructor);\r\n        this.name = this.constructor.name;\r\n        this.httpStatus = errorMessageConfig.httpStatus;\r\n        this.messageCode = messageCode;\r\n        this.errorMessage = errorMessageConfig.errorMessage;\r\n        this.message = errorMessageConfig.userMessage;\r\n    }\r\n    getMessageFromMessageCode(messageCode) {\r\n        let errorMessageConfig;\r\n        Object.keys(error_message_1.errorMessagesConfig).some((key) => {\r\n            if (key === messageCode) {\r\n                errorMessageConfig = error_message_1.errorMessagesConfig[key];\r\n                return true;\r\n            }\r\n            return false;\r\n        });\r\n        if (!errorMessageConfig) {\r\n            throw new Error(\"Unable to find the given message code error.\");\r\n        }\r\n        return errorMessageConfig;\r\n    }\r\n}\r\nexports.MessageCodeError = MessageCodeError;\r\n\n\n//# sourceURL=webpack:///./src/shared/errors/message-code-error.ts?");

/***/ }),

/***/ "./src/shared/filters/dispatch-error.ts":
/*!**********************************************!*\
  !*** ./src/shared/filters/dispatch-error.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nlet DispatchError = class DispatchError {\r\n    catch(err, res) {\r\n        if (err instanceof message_code_error_1.MessageCodeError) {\r\n            res.setHeader(\"x-message-code-error\", err.messageCode);\r\n            res.setHeader(\"x-message\", err.message);\r\n            res.setHeader(\"x-httpStatus-error\", err.httpStatus);\r\n            return res.status(err.httpStatus).send();\r\n        }\r\n        else if (err instanceof sequelize_1.ValidationError) {\r\n            res.setHeader(\"x-message-code-error\", err.errors[0].type);\r\n            res.setHeader(\"x-message\", err.errors[0].message);\r\n            res.setHeader(\"x-httpStatus-error\", common_1.HttpStatus.BAD_REQUEST);\r\n            return res.status(common_1.HttpStatus.BAD_REQUEST).send();\r\n        }\r\n        else {\r\n            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send();\r\n        }\r\n    }\r\n};\r\nDispatchError = __decorate([\r\n    common_1.Catch(message_code_error_1.MessageCodeError, sequelize_1.ValidationError, common_1.HttpException, Error)\r\n], DispatchError);\r\nexports.DispatchError = DispatchError;\r\n\n\n//# sourceURL=webpack:///./src/shared/filters/dispatch-error.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./config/database */ \"./src/shared/config/database.ts\"));\r\n__export(__webpack_require__(/*! ./config/error-message */ \"./src/shared/config/error-message.ts\"));\r\n__export(__webpack_require__(/*! ./filters/dispatch-error */ \"./src/shared/filters/dispatch-error.ts\"));\r\n__export(__webpack_require__(/*! ./errors/index */ \"./src/shared/errors/index.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/index.ts?");

/***/ }),

/***/ "./src/shared/messages/message-code-success.ts":
/*!*****************************************************!*\
  !*** ./src/shared/messages/message-code-success.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CRIADO = {\r\n    message: \"Criado com sucesso\",\r\n    status: 201,\r\n};\r\nexports.ATUALIZADO = {\r\n    message: \"Atualizado com sucesso\",\r\n    status: 200,\r\n};\r\nexports.DELETADO = {\r\n    message: \"Excluído com sucesso\",\r\n    status: 202,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/messages/message-code-success.ts?");

/***/ })

};