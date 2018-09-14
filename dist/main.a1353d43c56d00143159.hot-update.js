exports.id = "main";
exports.modules = {

/***/ "./src/modules/venda_item/venda_item.entity.ts":
/*!*****************************************************!*\
  !*** ./src/modules/venda_item/venda_item.entity.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\r\nconst produto_entity_1 = __webpack_require__(/*! ../produtos/produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\r\nconst tableOptions = {\r\n    tableName: \"venda_item\",\r\n    timestamps: false,\r\n};\r\nlet VendaItem = class VendaItem extends sequelize_typescript_1.Model {\r\n};\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        allowNull: false,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        type: sequelize_typescript_1.DataType.NUMERIC,\r\n        unique: true,\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], VendaItem.prototype, \"id\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.NUMERIC,\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], VendaItem.prototype, \"venda_id\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], VendaItem.prototype, \"unitario\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], VendaItem.prototype, \"quantidade\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.Column({\r\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),\r\n    }),\r\n    __metadata(\"design:type\", Number)\r\n], VendaItem.prototype, \"total\", void 0);\r\n__decorate([\r\n    sequelize_typescript_1.BelongsTo(() => produto_entity_1.Produto, {\r\n        as: \"owner\",\r\n        foreignKey: \"produto_id\",\r\n    }),\r\n    __metadata(\"design:type\", produto_entity_1.Produto)\r\n], VendaItem.prototype, \"produto\", void 0);\r\nVendaItem = __decorate([\r\n    sequelize_typescript_1.Table(tableOptions)\r\n], VendaItem);\r\nexports.VendaItem = VendaItem;\r\n\n\n//# sourceURL=webpack:///./src/modules/venda_item/venda_item.entity.ts?");

/***/ })

};