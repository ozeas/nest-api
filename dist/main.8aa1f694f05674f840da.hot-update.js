exports.id = "main";
exports.modules = {

/***/ "./src/modules/venda_item/venda_item.resolvers.ts":
/*!********************************************************!*\
  !*** ./src/modules/venda_item/venda_item.resolvers.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\r\nconst venda_item_service_1 = __webpack_require__(/*! ./venda_item.service */ \"./src/modules/venda_item/venda_item.service.ts\");\r\nlet VendaItemResolvers = class VendaItemResolvers {\r\n    constructor(vendaItemService) {\r\n        this.vendaItemService = vendaItemService;\r\n    }\r\n    getVendaItems(vendaId, limit = 100, offset = 0) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const where = {};\r\n            if (vendaId) {\r\n                where.venda_id = { $like: `%${vendaId}%` };\r\n            }\r\n            return yield this.vendaItemService.getAll({\r\n                limit,\r\n                offset,\r\n                order: [\r\n                    [\"id\", \"ASC\"],\r\n                ],\r\n                where,\r\n            });\r\n        });\r\n    }\r\n    findOneById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.vendaItemService.get(id);\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    graphql_1.Query(),\r\n    __param(0, graphql_1.Args(\"vendaId\")),\r\n    __param(1, graphql_1.Args(\"limit\")),\r\n    __param(2, graphql_1.Args(\"offset\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [String, Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], VendaItemResolvers.prototype, \"getVendaItems\", null);\r\n__decorate([\r\n    graphql_1.Query(\"vendaItem\"),\r\n    __param(0, graphql_1.Args(\"id\", common_1.ParseIntPipe)),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], VendaItemResolvers.prototype, \"findOneById\", null);\r\nVendaItemResolvers = __decorate([\r\n    graphql_1.Resolver(\"VendaItem\"),\r\n    __metadata(\"design:paramtypes\", [venda_item_service_1.VendaItemService])\r\n], VendaItemResolvers);\r\nexports.VendaItemResolvers = VendaItemResolvers;\r\n\n\n//# sourceURL=webpack:///./src/modules/venda_item/venda_item.resolvers.ts?");

/***/ })

};