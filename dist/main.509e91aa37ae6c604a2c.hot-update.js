exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\r\nconst path_1 = __webpack_require__(/*! path */ \"path\");\r\nconst auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ \"./src/modules/auth/auth.module.ts\");\r\nconst produto_module_1 = __webpack_require__(/*! ./modules/produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nlet ApplicationModule = class ApplicationModule {\r\n};\r\nApplicationModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [],\r\n        imports: [\r\n            produto_module_1.ProdutoModule,\r\n            auth_module_1.AuthModule,\r\n            graphql_1.GraphQLModule.forRoot({\r\n                debug: true,\r\n                definitions: {\r\n                    outputAs: \"class\",\r\n                    path: path_1.join(process.cwd(), \"src/graphql.schema.d.ts\"),\r\n                },\r\n                installSubscriptionHandlers: false,\r\n                playground: true,\r\n                typePaths: [\"./**/*.graphql\"],\r\n            }),\r\n        ],\r\n    })\r\n], ApplicationModule);\r\nexports.ApplicationModule = ApplicationModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

};