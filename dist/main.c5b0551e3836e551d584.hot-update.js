exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/produto.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\r\nexports.produtoProvider = {\r\n    provide: \"ProdutoModel\",\r\n    useValue: produto_entity_1.Produto,\r\n};\r\nexports.repositoryProvide = {\r\n    provide: \"ProdutoRepository\",\r\n    useClass: produto_repository_1.ProdutoRepository,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.provider.ts?");

/***/ })

};