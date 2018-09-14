exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.controller.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.controller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst Message = __webpack_require__(/*! ../../shared/messages/message-code-success */ \"./src/shared/messages/message-code-success.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nconst produto_dto_1 = __webpack_require__(/*! ./validators/produto-dto */ \"./src/modules/produtos/validators/produto-dto.ts\");\r\nlet ProdutoController = class ProdutoController {\r\n    constructor(produtoService) {\r\n        this.produtoService = produtoService;\r\n    }\r\n    index(res, options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const produtos = yield this.produtoService.getAll(options);\r\n            return res.status(common_1.HttpStatus.OK).json(produtos);\r\n        });\r\n    }\r\n    create(res, produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.create(produto);\r\n                return res.status(common_1.HttpStatus.CREATED).json(Message.CRIADO);\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n    show(res, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const produto = yield this.produtoService.get(id);\r\n            return res.status(common_1.HttpStatus.OK).json(produto);\r\n        });\r\n    }\r\n    update(res, produto, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.update(id, produto);\r\n                return res.status(common_1.HttpStatus.OK).json(Message.ATUALIZADO);\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n    delete(res, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.produtoService.delete(id);\r\n                return res.status(common_1.HttpStatus.OK).send();\r\n            }\r\n            catch (error) {\r\n                return res.status(common_1.HttpStatus.BAD_GATEWAY).json(error);\r\n            }\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(\"produtos\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Query()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"index\", null);\r\n__decorate([\r\n    common_1.Post(\"produtos\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Body()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, produto_dto_1.ProdutoValidate]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"create\", null);\r\n__decorate([\r\n    common_1.Get(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"show\", null);\r\n__decorate([\r\n    common_1.Put(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"update\", null);\r\n__decorate([\r\n    common_1.Delete(\"produtos/:id\"),\r\n    __param(0, common_1.Res()), __param(1, common_1.Param(\"id\")),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Number]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ProdutoController.prototype, \"delete\", null);\r\nProdutoController = __decorate([\r\n    common_1.Controller(),\r\n    common_1.Catch(common_1.HttpException),\r\n    __metadata(\"design:paramtypes\", [produto_service_1.ProdutoService])\r\n], ProdutoController);\r\nexports.ProdutoController = ProdutoController;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.controller.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/produto-dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/produtos/validators/produto-dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass ProdutoValidate {\r\n}\r\n__decorate([\r\n    swagger_1.ApiModelProperty(),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.MaxLength(40, {\r\n        message: \"Descrição não deve ser maior que 40 caracters.\",\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], ProdutoValidate.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty(),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], ProdutoValidate.prototype, \"valor\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty(),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], ProdutoValidate.prototype, \"estoque\", void 0);\r\nexports.ProdutoValidate = ProdutoValidate;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/produto-dto.ts?");

/***/ })

};