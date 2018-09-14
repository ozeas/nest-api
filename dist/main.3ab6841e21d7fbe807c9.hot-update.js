exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ \"./src/modules/auth/auth.module.ts\");\r\nconst produto_module_1 = __webpack_require__(/*! ./modules/produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nlet ApplicationModule = class ApplicationModule {\r\n};\r\nApplicationModule = __decorate([\r\n    common_1.Module({\r\n        imports: [produto_module_1.ProdutoModule, auth_module_1.AuthModule],\r\n        controllers: []\r\n    })\r\n], ApplicationModule);\r\nexports.ApplicationModule = ApplicationModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\r\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\r\nconst http_strategy_1 = __webpack_require__(/*! ./http.strategy */ \"./src/modules/auth/http.strategy.ts\");\r\nlet AuthModule = class AuthModule {\r\n};\r\nAuthModule = __decorate([\r\n    common_1.Module({\r\n        imports: [\r\n            passport_1.PassportModule.register({ defaultStrategy: \"bearer\" }),\r\n        ],\r\n        providers: [auth_service_1.AuthService, http_strategy_1.HttpStrategy],\r\n    })\r\n], AuthModule);\r\nexports.AuthModule = AuthModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.module.ts?");

/***/ })

};