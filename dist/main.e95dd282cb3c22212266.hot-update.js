exports.id = "main";
exports.modules = {

/***/ "./src/modules/graphql/graphql.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/graphql/graphql.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst produto_module_1 = __webpack_require__(/*! ../produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\r\nconst produto_service_1 = __webpack_require__(/*! ../produtos/produto.service */ \"./src/modules/produtos/produto.service.ts\");\r\nconst graphql_controller_1 = __webpack_require__(/*! ./graphql.controller */ \"./src/modules/graphql/graphql.controller.ts\");\r\nconst graphql_service_1 = __webpack_require__(/*! ./graphql.service */ \"./src/modules/graphql/graphql.service.ts\");\r\nconst typeDefs_provider_1 = __webpack_require__(/*! ./typeDefs.provider */ \"./src/modules/graphql/typeDefs.provider.ts\");\r\nlet GraphqlModule = class GraphqlModule {\r\n    configure(consumer) {\r\n        consumer.apply().forRoutes(graphql_controller_1.GraphqlController);\r\n    }\r\n};\r\nGraphqlModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [graphql_controller_1.GraphqlController],\r\n        modules: [\r\n            produto_module_1.ProdutoModule,\r\n        ],\r\n        providers: [\r\n            graphql_service_1.GraphqlService,\r\n            typeDefs_provider_1.typeDefsProvider,\r\n            produto_service_1.ProdutoService,\r\n        ],\r\n    })\r\n], GraphqlModule);\r\nexports.GraphqlModule = GraphqlModule;\r\n\n\n//# sourceURL=webpack:///./src/modules/graphql/graphql.module.ts?");

/***/ })

};