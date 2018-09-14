exports.id = "main";
exports.modules = {

/***/ "./src/shared/config/error-message.ts":
/*!********************************************!*\
  !*** ./src/shared/config/error-message.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nexports.errorMessagesConfig = {\r\n    \"generic:notFound\": {\r\n        errorMessage: \"Objeto não encontrado\",\r\n        httpStatus: common_1.HttpStatus.NOT_FOUND,\r\n        type: \"notFound\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onCreate\": {\r\n        errorMessage: \"Houve um erro ao criar o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onCreate\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onDelete\": {\r\n        errorMessage: \"Houve um erro ao excluir o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onDelete\",\r\n        userMessage: \"\",\r\n    },\r\n    \"generic:onUpdate\": {\r\n        errorMessage: \"Houve um erro ao editar o objeto.\",\r\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\r\n        type: \"onUpdate\",\r\n        userMessage: \"\",\r\n    },\r\n    \"request:unauthorized\": {\r\n        errorMessage: \"Acesso não autorizado.\",\r\n        httpStatus: common_1.HttpStatus.UNAUTHORIZED,\r\n        type: \"unauthorized\",\r\n        userMessage: \"Acesso não autorizado.\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/config/error-message.ts?");

/***/ })

};