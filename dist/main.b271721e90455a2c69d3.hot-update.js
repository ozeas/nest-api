exports.id = "main";
exports.modules = {

/***/ "./node_modules/magical-mixin/dist/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/magical-mixin/dist/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Methods = /** @class */ (function () {\n    function Methods() {\n    }\n    return Methods;\n}());\nexports.Methods = Methods;\n// export function mixin<A, B, C, D, R = PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>): R\n// export function mixin<A, B, C, D, E, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>): R\n// export function mixin<A, B, C, D, E, F, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>, F>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>, f: Ctor<F>): R\n// export function mixin<A, B, C, D, E, F, G, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>, F>, G>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>, f: Ctor<F>, g: Ctor<G>): R\nfunction mixin() {\n    var as = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        as[_i] = arguments[_i];\n    }\n    return as.reduce(function (c, a) {\n        c.prototype = __assign({}, c.prototype, a.prototype);\n        return c;\n    }, /** @class */ (function () {\n        function class_1() {\n        }\n        return class_1;\n    }()));\n}\nexports.mixin = mixin;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/magical-mixin/dist/src/index.js?");

/***/ }),

/***/ "./src/modules/produtos/produto.mixin.ts":
/*!***********************************************!*\
  !*** ./src/modules/produtos/produto.mixin.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Mixin {\r\n    a() {\r\n        return 1;\r\n    }\r\n}\r\nexports.Mixin = Mixin;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.mixin.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.service.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst magical_mixin_1 = __webpack_require__(/*! magical-mixin */ \"./node_modules/magical-mixin/dist/src/index.js\");\r\nconst produto_mixin_1 = __webpack_require__(/*! ./produto.mixin */ \"./src/modules/produtos/produto.mixin.ts\");\r\nlet ProdutoService = class ProdutoService extends magical_mixin_1.mixin(produto_mixin_1.Mixin) {\r\n    constructor(repository) {\r\n        super();\r\n        this.repository = repository;\r\n    }\r\n    getAll(options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.repository.findAll(options);\r\n        });\r\n    }\r\n    get(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return yield this.repository.findById(id);\r\n        });\r\n    }\r\n    create(produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.create(produto);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n    update(id, produto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.update(id, produto);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n    delete(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.repository.delete(id);\r\n            }\r\n            catch (error) {\r\n                throw error;\r\n            }\r\n        });\r\n    }\r\n};\r\nProdutoService = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject(\"ProdutoRepository\")),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], ProdutoService);\r\nexports.ProdutoService = ProdutoService;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.service.ts?");

/***/ })

};