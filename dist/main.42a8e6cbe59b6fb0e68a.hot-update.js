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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst passport_http_bearer_1 = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\r\nlet HttpStrategy = class HttpStrategy extends passport_1.PassportStrategy(passport_http_bearer_1.Strategy) {\r\n    constructor(authService) {\r\n        super();\r\n        this.authService = authService;\r\n    }\r\n    validate(token) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const user = yield this.authService.validateUser(token);\r\n            if (!user) {\r\n                throw new common_1.UnauthorizedException();\r\n            }\r\n            return user;\r\n        });\r\n    }\r\n};\r\nHttpStrategy = __decorate([\r\n    common_1.Injectable(),\r\n    __metadata(\"design:paramtypes\", [auth_service_1.AuthService])\r\n], HttpStrategy);\r\nexports.HttpStrategy = HttpStrategy;\r\n\n\n//# sourceURL=webpack:///./src/modules/auth/http.strategy.ts?");

/***/ })

};