exports.id = "main";
exports.modules = {

/***/ "./src/modules/produtos/produto.entity.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nconst tableOptions = {\r\n    timestamps: false,\r\n    tableName: 'produto'\r\n};\r\nlet Produto = class Produto extends sequelize_typescript_1.Model {\r\n};\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.NUMERIC,\r\n        allowNull: false,\r\n        autoIncrement: true,\r\n        unique: true,\r\n        primaryKey: true\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"id\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Length({ min: 1, max: 40 }),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.CHAR(40)\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], Produto.prototype, \"descricao\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2)\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"valor\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2)\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], Produto.prototype, \"estoque\", void 0);\r\nProduto = __decorate([\r\n    sequelize_typescript_1.Table(tableOptions)\r\n], Produto);\r\nexports.Produto = Produto;\r\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.entity.ts?");

/***/ })

};