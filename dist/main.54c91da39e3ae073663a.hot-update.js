exports.id = "main";
exports.modules = {

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_graphql_1 = __webpack_require__(/*! ../produtos/produto.graphql */ \"./src/modules/produtos/produto.graphql.ts\");\r\nexports.typeDefsProvider = {\r\n    provide: \"TypeDefsProvider\",\r\n    useValue: `\r\n        scalar JSON\r\n\r\n        schema {\r\n            query: Query\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.type}\r\n\r\n        type Query {\r\n            ${produto_graphql_1.ProdutoTypeDef.query}\r\n        }\r\n\r\n        ${produto_graphql_1.ProdutoTypeDef.input}\r\n    `,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/typeDefs.provider.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.graphql.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.graphql.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ProdutoTypeDef = {\r\n    input: `\r\n        input ProdutoSearchFilter {\r\n            id: Int\r\n            descricao: String\r\n            estoque: Float\r\n            valor: Float\r\n        }\r\n    `,\r\n    query: `\r\n        getProdutos(filter: ProdutoSearchFilter limit: Int offset: Int): [Produto!]!\r\n    `,\r\n    type: `\r\n        type Produto {\r\n            id: Int\r\n            descricao: String\r\n            valor: Float\r\n            estoque: Float\r\n        }\r\n    `,\r\n};\r\nclass ProdutoGraphql {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n        this.resolverProduto = {\r\n            getProdutos: this.getProdutos,\r\n        };\r\n    }\r\n    get getProdutos() {\r\n        return (_, { filter, limit = 10, offset = 0 }) => __awaiter(this, void 0, void 0, function* () {\r\n            limit = Math.min(limit, 100);\r\n            const where = {};\r\n            if (filter) {\r\n                if (filter.id) {\r\n                    where.id = { $eq: filter.id };\r\n                }\r\n                if (filter.email) {\r\n                    where.email = { $ilike: `%${filter.email}%` };\r\n                }\r\n                if (filter.firstName) {\r\n                    where.firstName = { $ilike: `%${filter.firstName}%` };\r\n                }\r\n                if (filter.lastName) {\r\n                    where.lastName = { $ilike: `%${filter.lastName}%` };\r\n                }\r\n            }\r\n            return yield this.produtoService.getAll({\r\n                limit,\r\n                offset,\r\n                order: [\r\n                    [\"id\", \"ASC\"],\r\n                ],\r\n                where,\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.ProdutoGraphql = ProdutoGraphql;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.graphql.ts?");

/***/ })

};