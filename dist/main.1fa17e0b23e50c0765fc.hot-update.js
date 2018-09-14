exports.id = "main";
exports.modules = {

/***/ "./node_modules/typescript-mix/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/typescript-mix/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction mix(client, mixins) {\r\n    var clientKeys = Object.getOwnPropertyNames(client.prototype);\r\n    for (var _i = 0, mixins_1 = mixins; _i < mixins_1.length; _i++) {\r\n        var mixin = mixins_1[_i];\r\n        var mixinMixables = getMixables(clientKeys, mixin);\r\n        Object.defineProperties(client.prototype, mixinMixables);\r\n    }\r\n}\r\n/**\r\n * Returns a map of mixables. That is things that can be mixed in\r\n */\r\nfunction getMixables(clientKeys, mixin) {\r\n    var descriptors = {};\r\n    switch (typeof mixin) {\r\n        case \"object\":\r\n            descriptors = getMixables(mixin);\r\n            break;\r\n        case \"function\":\r\n            descriptors = getMixables(mixin.prototype);\r\n            break;\r\n    }\r\n    return descriptors;\r\n    function getMixables(obj) {\r\n        var map = {};\r\n        Object.getOwnPropertyNames(obj).map(function (key) {\r\n            if (clientKeys.indexOf(key) < 0) {\r\n                var descriptor = Object.getOwnPropertyDescriptor(obj, key);\r\n                if (descriptor === undefined)\r\n                    return;\r\n                if (descriptor.get || descriptor.set) {\r\n                    map[key] = descriptor;\r\n                }\r\n                else if (typeof descriptor.value === \"function\") {\r\n                    map[key] = descriptor;\r\n                }\r\n            }\r\n        });\r\n        return map;\r\n    }\r\n}\r\n/**\r\n * Takes a list of classes or object literals and adds their methods\r\n * to the class calling it.\r\n */\r\nfunction use() {\r\n    var options = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        options[_i] = arguments[_i];\r\n    }\r\n    return function (target, propertyKey) {\r\n        mix(target.constructor, options.reverse());\r\n    };\r\n}\r\nexports.use = use;\r\n/**\r\n * Takes a method as a parameter and add it to the class calling it.\r\n */\r\nfunction delegate(method) {\r\n    return function (target, propertyKey) {\r\n        target.constructor.prototype[propertyKey] = method;\r\n    };\r\n}\r\nexports.delegate = delegate;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/typescript-mix/dist/index.js?");

/***/ }),

/***/ "./src/modules/produtos/produto.mixin.ts":
/*!***********************************************!*\
  !*** ./src/modules/produtos/produto.mixin.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Mixin {\r\n}\r\nexports.Mixin = Mixin;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.mixin.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.service.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst typescript_mix_1 = __webpack_require__(/*! typescript-mix */ \"./node_modules/typescript-mix/dist/index.js\");\r\nconst produto_mixin_1 = __webpack_require__(/*! ./produto.mixin */ \"./src/modules/produtos/produto.mixin.ts\");\r\nlet ProdutoService = class ProdutoService {\r\n    constructor(repository) {\r\n        this.repository = repository;\r\n    }\r\n    getAll(options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.repository.findAll(options);\r\n        });\r\n    }\r\n    get(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.repository.findById(id);\r\n        });\r\n    }\r\n    create(produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.create(produto);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n    update(id, produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.update(id, produto);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n    delete(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.delete(id);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    typescript_mix_1.use(produto_mixin_1.Mixin),\r\n    __metadata(\"design:type\", Object)\r\n], ProdutoService.prototype, \"this\", void 0);\r\nProdutoService = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"ProdutoRepository\")),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], ProdutoService);\r\nexports.ProdutoService = ProdutoService;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.service.ts?");

/***/ })

};