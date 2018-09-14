exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.repository.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.repository.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../../shared/errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nlet ProdutoRepository = class ProdutoRepository {\r\n    constructor(produtoRepository, sequelizeInstance) {\r\n        this.produtoRepository = produtoRepository;\r\n        this.sequelizeInstance = sequelizeInstance;\r\n    }\r\n    findAll(options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let filtro = {};\r\n            if (options) {\r\n                filtro = Object.assign({}, { where: options });\r\n            }\r\n            return yield this.produtoRepository.findAll(filtro);\r\n        });\r\n    }\r\n    findById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.produtoRepository.findById(id);\r\n        });\r\n    }\r\n    create(produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                return yield this.produtoRepository.create(produto, {\r\n                    returning: true,\r\n                    transaction,\r\n                });\r\n            }));\r\n        });\r\n    }\r\n    update(id, data) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                const produto = yield this.produtoRepository.findById(id, {\r\n                    transaction,\r\n                });\r\n                if (!produto) {\r\n                    throw new message_code_error_1.MessageCodeError(\"generic:notFound\");\r\n                }\r\n                return yield produto_entity_1.Produto.update(data, { where: { id }, transaction });\r\n            }));\r\n        });\r\n    }\r\n    delete(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\r\n                return yield this.produtoRepository.destroy({\r\n                    transaction,\r\n                    where: { id },\r\n                });\r\n            }));\r\n        });\r\n    }\r\n};\r\nProdutoRepository = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"ProdutoModel\")),\r\n    __param(1, common_1.Inject(\"SequelizeInstance\")),\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], ProdutoRepository);\r\nexports.ProdutoRepository = ProdutoRepository;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.repository.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nlet DispatchError = class DispatchError {\r\n    catch(err, res) {\r\n        if (err instanceof message_code_error_1.MessageCodeError) {\r\n            res.setHeader('x-message-code-error', err.messageCode);\r\n            res.setHeader('x-message', err.message);\r\n            res.setHeader('x-httpStatus-error', err.httpStatus);\r\n            return res.status(err.httpStatus).send();\r\n        }\r\n        else if (err instanceof sequelize_1.ValidationError) {\r\n            res.setHeader('x-message-code-error', err.errors[0].type);\r\n            res.setHeader('x-message', err.errors[0].message);\r\n            res.setHeader('x-httpStatus-error', common_1.HttpStatus.BAD_REQUEST);\r\n            return res.status(common_1.HttpStatus.BAD_REQUEST).send();\r\n        }\r\n        else {\r\n            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send();\r\n        }\r\n    }\r\n};\r\nDispatchError = __decorate([\r\n    common_1.Catch(message_code_error_1.MessageCodeError, sequelize_1.ValidationError, common_1.HttpException, Error)\r\n], DispatchError);\r\nexports.DispatchError = DispatchError;\r\n\n\n//# sourceURL=webpack:///./src/shared/filters/dispatch-error.ts?");

/***/ })

};