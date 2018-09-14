exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ \"./src/modules/auth/auth.module.ts\");\r\nconst produto_module_1 = __webpack_require__(/*! ./modules/produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nlet ApplicationModule = class ApplicationModule {\r\n};\r\nApplicationModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [],\r\n        imports: [\r\n            produto_module_1.ProdutoModule,\r\n            auth_module_1.AuthModule,\r\n            GraphQLModule,\r\n        ],\r\n    })\r\n], ApplicationModule);\r\nexports.ApplicationModule = ApplicationModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/modules/graphql/graphql.controller.ts":
false,

/***/ "./src/modules/graphql/graphql.module.ts":
false,

/***/ "./src/modules/graphql/graphql.service.ts":
false,

/***/ "./src/modules/graphql/typeDefs.provider.ts":
false,

/***/ "./src/modules/produtos/produto.graphql.ts":
false,

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\r\nfunction bootstrap() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);\r\n        const options = new swagger_1.DocumentBuilder()\r\n            .setTitle(\"AdSoft - API NestJs\")\r\n            .setDescription(\"Estrutura de api usada pela AdSoft com NodeJs\")\r\n            .setVersion(\"0.001\")\r\n            .addTag(\"adsoft-api\")\r\n            .build();\r\n        const document = swagger_1.SwaggerModule.createDocument(app, options);\r\n        swagger_1.SwaggerModule.setup(\"api\", app, document);\r\n        app.useGlobalPipes(new common_1.ValidationPipe({\r\n            dismissDefaultMessages: false,\r\n            transform: true,\r\n        }));\r\n        yield app.listen(3000);\r\n        if (true) {\r\n            module.hot.accept();\r\n            module.hot.dispose(() => app.close());\r\n        }\r\n    });\r\n}\r\nbootstrap();\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "apollo-server-express":
false,

/***/ "graphql-tools":
false,

/***/ "graphql-type-json":
false,

/***/ "magical-mixin":
false

};