exports.id = "main";
exports.modules = {

/***/ "./src/shared/filters/dispatch-error.ts":
/*!**********************************************!*\
  !*** ./src/shared/filters/dispatch-error.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst message_code_error_1 = __webpack_require__(/*! ../errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\r\nlet DispatchError = class DispatchError {\r\n    catch(err, res) {\r\n        if (err instanceof message_code_error_1.MessageCodeError) {\r\n            res.setHeader(\"x-message-code-error\", err.messageCode);\r\n            res.setHeader(\"x-message\", err.message);\r\n            res.setHeader(\"x-httpStatus-error\", err.httpStatus);\r\n            return res.status(err.httpStatus).send();\r\n        }\r\n        else if (err instanceof sequelize_1.ValidationError) {\r\n            res.setHeader(\"x-message-code-error\", err.errors[0].type);\r\n            res.setHeader(\"x-message\", err.errors[0].message);\r\n            res.setHeader(\"x-httpStatus-error\", common_1.HttpStatus.BAD_REQUEST);\r\n            return res.status(common_1.HttpStatus.BAD_REQUEST).send();\r\n        }\r\n        else {\r\n            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send();\r\n        }\r\n    }\r\n};\r\nDispatchError = __decorate([\r\n    common_1.Catch(message_code_error_1.MessageCodeError, sequelize_1.ValidationError, common_1.HttpException, Error)\r\n], DispatchError);\r\nexports.DispatchError = DispatchError;\r\n\n\n//# sourceURL=webpack:///./src/shared/filters/dispatch-error.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./config/database */ \"./src/shared/config/database.ts\"));\r\n__export(__webpack_require__(/*! ./config/error-message */ \"./src/shared/config/error-message.ts\"));\r\n__export(__webpack_require__(/*! ./filters/dispatch-error */ \"./src/shared/filters/dispatch-error.ts\"));\r\n__export(__webpack_require__(/*! ./errors/index */ \"./src/shared/errors/index.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/index.ts?");

/***/ })

};