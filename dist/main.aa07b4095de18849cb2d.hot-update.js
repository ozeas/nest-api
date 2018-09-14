exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/validators/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/validators/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./create-produto-dto */ \"./src/modules/produtos/validators/create-produto-dto.ts\"));\r\n__export(__webpack_require__(/*! ./update-produto-dto */ \"./src/modules/produtos/validators/update-produto-dto.ts\"));\r\n__export(__webpack_require__(/*! ./search-produto-dto */ \"./src/modules/produtos/validators/search-produto-dto.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/index.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/search-produto-dto.ts":
/*!***************************************************************!*\
  !*** ./src/modules/produtos/validators/search-produto-dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass SearchProdutoValidate {\r\n}\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        maximum: 40,\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.MaxLength(40, {\r\n        message: \"Descrição não deve ser maior que 40 caracters.\",\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], SearchProdutoValidate.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], SearchProdutoValidate.prototype, \"valor\", void 0);\r\n__decorate([\r\n    swagger_1.ApiModelProperty({\r\n        required: false,\r\n    }),\r\n    class_validator_1.IsNotEmpty(),\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], SearchProdutoValidate.prototype, \"estoque\", void 0);\r\nexports.SearchProdutoValidate = SearchProdutoValidate;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/search-produto-dto.ts?");

/***/ })

};