exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.graphql.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.graphql.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ProdutoTypeDef = {\r\n    input: `\r\n        input ProdutoSearchFilter {\r\n            id: Int\r\n        }\r\n    `,\r\n    query: `\r\n        getProdutos(filter: ProdutoSearchFilter limit: Int offset: Int): [Produto!]!\r\n    `,\r\n    type: `\r\n        type Produto {\r\n            id: Int\r\n            descricao: String\r\n            valor: Float\r\n            estoque: Float\r\n        }\r\n    `,\r\n};\r\nclass ProdutoGraphql {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n        this.resolverProduto = {\r\n            getProdutos: this.getProdutos,\r\n        };\r\n    }\r\n    get getProdutos() {\r\n        return (_, { filter, limit = 10, offset = 0 }) => __awaiter(this, void 0, void 0, function* () {\r\n            limit = Math.min(limit, 100);\r\n            const where = {};\r\n            if (filter) {\r\n                if (filter.id) {\r\n                    where.id = { $eq: filter.id };\r\n                }\r\n                if (filter.descricao) {\r\n                    where.descricao = { $ilike: `%${filter.descricao}%` };\r\n                }\r\n                if (filter.estoque) {\r\n                    where.estoque = { $eq: filter.estoque };\r\n                }\r\n                if (filter.valor) {\r\n                    where.valor = { $eq: filter.valor };\r\n                }\r\n            }\r\n            return yield this.produtoService.getAll({\r\n                limit,\r\n                offset,\r\n                order: [\r\n                    [\"id\", \"ASC\"],\r\n                ],\r\n                where,\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.ProdutoGraphql = ProdutoGraphql;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.graphql.ts?");

/***/ })

};