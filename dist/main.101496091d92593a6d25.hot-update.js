exports.id = "main";
exports.modules = {

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\r\nconst GraphQLJSON = __webpack_require__(/*! graphql-type-json */ \"graphql-type-json\");\r\nconst magical_mixin_1 = __webpack_require__(/*! magical-mixin */ \"magical-mixin\");\r\nconst produto_graphql_1 = __webpack_require__(/*! ../produtos/produto.graphql */ \"./src/modules/produtos/produto.graphql.ts\");\r\nlet GraphqlService = class GraphqlService extends magical_mixin_1.mixin(produto_graphql_1.ProdutoGraphql) {\r\n    constructor(typeDefsProvider) {\r\n        super();\r\n        this.typeDefsProvider = typeDefsProvider;\r\n    }\r\n    get schema() {\r\n        return graphql_tools_1.makeExecutableSchema({\r\n            resolvers: this.resolvers,\r\n            typeDefs: this.typeDefsProvider,\r\n        });\r\n    }\r\n    get resolvers() {\r\n        return {\r\n            JSON: GraphQLJSON,\r\n            Query: Object.assign({}, this.resolverProduto),\r\n        };\r\n    }\r\n};\r\nGraphqlService = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"TypeDefsProvider\")),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], GraphqlService);\r\nexports.GraphqlService = GraphqlService;\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/graphql.service.ts?");

/***/ }),

/***/ "./src/modules/graphql/typeDefs.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/graphql/typeDefs.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_graphql_1 = __webpack_require__(/*! ../produtos/produto.graphql */ \"./src/modules/produtos/produto.graphql.ts\");\r\nexports.typeDefsProvider = {\r\n    provide: \"TypeDefsProvider\",\r\n    useValue: `\r\n        scalar JSON\r\n\r\n        schema {\r\n            query: Query\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.type}\r\n\r\n        type Query {\r\n            ${produto_graphql_1.ProdutoTypeDef.query}\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.input}\r\n    `,\r\n};\r\nconsole.log(exports.typeDefsProvider);\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/typeDefs.provider.ts?");

/***/ })

};