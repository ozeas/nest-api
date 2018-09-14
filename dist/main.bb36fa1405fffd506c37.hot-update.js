exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ \"./src/modules/auth/auth.module.ts\");\r\nconst graphql_module_1 = __webpack_require__(/*! ./modules/graphql/graphql.module */ \"./src/modules/graphql/graphql.module.ts\");\r\nconst produto_module_1 = __webpack_require__(/*! ./modules/produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nlet ApplicationModule = class ApplicationModule {\r\n};\r\nApplicationModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [],\r\n        imports: [\r\n            produto_module_1.ProdutoModule,\r\n            auth_module_1.AuthModule,\r\n            graphql_module_1.GraphqlModule,\r\n        ],\r\n    })\r\n], ApplicationModule);\r\nexports.ApplicationModule = ApplicationModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/modules/graphql/graphql.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/graphql/graphql.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst graphql_service_1 = __webpack_require__(/*! ./graphql.service */ \"./src/modules/graphql/graphql.service.ts\");\r\nlet GraphqlController = class GraphqlController {\r\n    constructor(graphqlService) {\r\n        this.graphqlService = graphqlService;\r\n    }\r\n    create(req, res, next) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return apollo_server_express_1.graphqlExpress({\r\n                schema: this.graphqlService.schema,\r\n            })(req, res, next);\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Post(\"graphql\"),\r\n    __param(0, common_1.Request()), __param(1, common_1.Response()), __param(2, common_1.Next()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], GraphqlController.prototype, \"create\", null);\r\nGraphqlController = __decorate([\r\n    common_1.Controller(),\r\n    __metadata(\"design:paramtypes\", [graphql_service_1.GraphqlService])\r\n], GraphqlController);\r\nexports.GraphqlController = GraphqlController;\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/graphql.controller.ts?");

/***/ }),

/***/ "./src/modules/graphql/graphql.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/graphql/graphql.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst produto_module_1 = __webpack_require__(/*! ../produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nconst graphql_controller_1 = __webpack_require__(/*! ./graphql.controller */ \"./src/modules/graphql/graphql.controller.ts\");\r\nconst graphql_service_1 = __webpack_require__(/*! ./graphql.service */ \"./src/modules/graphql/graphql.service.ts\");\r\nconst typeDefs_provider_1 = __webpack_require__(/*! ./typeDefs.provider */ \"./src/modules/graphql/typeDefs.provider.ts\");\r\nlet GraphqlModule = class GraphqlModule {\r\n    configure(consumer) {\r\n        consumer.apply().forRoutes(graphql_controller_1.GraphqlController);\r\n    }\r\n};\r\nGraphqlModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [graphql_controller_1.GraphqlController],\r\n        modules: [\r\n            produto_module_1.ProdutoModule,\r\n        ],\r\n        providers: [\r\n            graphql_service_1.GraphqlService,\r\n            typeDefs_provider_1.typeDefsProvider,\r\n        ],\r\n    })\r\n], GraphqlModule);\r\nexports.GraphqlModule = GraphqlModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/graphql.module.ts?");

/***/ }),

/***/ "./src/modules/graphql/graphql.service.ts":
/*!************************************************!*\
  !*** ./src/modules/graphql/graphql.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\r\nconst GraphQLJSON = __webpack_require__(/*! graphql-type-json */ \"graphql-type-json\");\r\nconst magical_mixin_1 = __webpack_require__(/*! magical-mixin */ \"magical-mixin\");\r\nconst produto_graphql_1 = __webpack_require__(/*! ../produtos/produto.graphql */ \"./src/modules/produtos/produto.graphql.ts\");\r\nlet GraphqlService = class GraphqlService extends magical_mixin_1.mixin(produto_graphql_1.ProdutoGraphql) {\r\n    constructor(typeDefsProvider) {\r\n        super();\r\n        this.typeDefsProvider = typeDefsProvider;\r\n    }\r\n    get schema() {\r\n        return graphql_tools_1.makeExecutableSchema({\r\n            resolvers: this.resolvers,\r\n            typeDefs: this.typeDefsProvider,\r\n        });\r\n    }\r\n    get resolvers() {\r\n        return {\r\n            JSON: GraphQLJSON,\r\n            Query: Object.assign({}, this.resolverProduto),\r\n        };\r\n    }\r\n};\r\nGraphqlService = __decorate([\r\n    common_1.Component(),\r\n    __param(0, common_1.Inject(\"TypeDefsProvider\")),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], GraphqlService);\r\nexports.GraphqlService = GraphqlService;\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/graphql.service.ts?");

/***/ }),

/***/ "./src/modules/graphql/typeDefs.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/graphql/typeDefs.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_graphql_1 = __webpack_require__(/*! ../produtos/produto.graphql */ \"./src/modules/produtos/produto.graphql.ts\");\r\nexports.typeDefsProvider = {\r\n    provide: \"TypeDefsProvider\",\r\n    useValue: `\r\n        scalar JSON\r\n\r\n        schema {\r\n            query: Query\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.type}\r\n\r\n        type Query {\r\n            ${produto_graphql_1.ProdutoTypeDef.query}\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.input}\r\n    `,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/typeDefs.provider.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.graphql.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.graphql.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ProdutoTypeDef = {\r\n    input: `\r\n        input ProdutoSearchFilter {\r\n            id: Int\r\n            descricao: String\r\n            estoque: Float\r\n            valor: Float\r\n        }\r\n    `,\r\n    query: `\r\n        getProdutos(filter: ProdutoSearchFilter limit: Int offset Int): [Produto!]!\r\n    `,\r\n    type: `\r\n        type Produto {\r\n            id: Int\r\n            descricao: String\r\n            valor: Float\r\n            estoque: Float\r\n        }\r\n    `,\r\n};\r\nclass ProdutoGraphql {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n        this.resolverProduto = {\r\n            getProdutos: this.getProdutos,\r\n        };\r\n    }\r\n    get getProdutos() {\r\n        return (_, { filter, limit = 10, offset = 0 }) => __awaiter(this, void 0, void 0, function* () {\r\n            limit = Math.min(limit, 100);\r\n            const where = {};\r\n            if (filter) {\r\n                if (filter.id) {\r\n                    where.id = { $eq: filter.id };\r\n                }\r\n                if (filter.email) {\r\n                    where.email = { $ilike: `%${filter.email}%` };\r\n                }\r\n                if (filter.firstName) {\r\n                    where.firstName = { $ilike: `%${filter.firstName}%` };\r\n                }\r\n                if (filter.lastName) {\r\n                    where.lastName = { $ilike: `%${filter.lastName}%` };\r\n                }\r\n            }\r\n            return yield this.produtoService.getAll({\r\n                limit,\r\n                offset,\r\n                order: [\r\n                    [\"id\", \"ASC\"],\r\n                ],\r\n                where,\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.ProdutoGraphql = ProdutoGraphql;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.graphql.ts?");

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

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "graphql-type-json":
/*!************************************!*\
  !*** external "graphql-type-json" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-type-json\");\n\n//# sourceURL=webpack:///external_%22graphql-type-json%22?");

/***/ }),

/***/ "magical-mixin":
/*!********************************!*\
  !*** external "magical-mixin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"magical-mixin\");\n\n//# sourceURL=webpack:///external_%22magical-mixin%22?");

/***/ })

};