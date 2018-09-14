exports.id = "main";
exports.modules = {

/***/ "./src/shared/errors/message-code-error.ts":
/*!*************************************************!*\
  !*** ./src/shared/errors/message-code-error.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst error_message_1 = __webpack_require__(/*! ../config/error-message */ \"./src/shared/config/error-message.ts\");\r\nclass MessageCodeError extends Error {\r\n    constructor(messageCode) {\r\n        super();\r\n        const errorMessageConfig = this.getMessageFromMessageCode(messageCode);\r\n        if (!errorMessageConfig) {\r\n            throw new Error(\"Unable to find message code error.\");\r\n        }\r\n        Error.captureStackTrace(this, this.constructor);\r\n        this.name = this.constructor.name;\r\n        this.httpStatus = errorMessageConfig.httpStatus;\r\n        this.messageCode = messageCode;\r\n        this.errorMessage = errorMessageConfig.errorMessage;\r\n        this.message = errorMessageConfig.userMessage;\r\n    }\r\n    getMessageFromMessageCode(messageCode) {\r\n        let errorMessageConfig;\r\n        Object.keys(error_message_1.errorMessagesConfig).some((key) => {\r\n            if (key === messageCode) {\r\n                errorMessageConfig = error_message_1.errorMessagesConfig[key];\r\n                return true;\r\n            }\r\n            return false;\r\n        });\r\n        if (!errorMessageConfig) {\r\n            throw new Error(\"Unable to find the given message code error.\");\r\n        }\r\n        return errorMessageConfig;\r\n    }\r\n}\r\nexports.MessageCodeError = MessageCodeError;\r\n\n\n//# sourceURL=webpack:///./src/shared/errors/message-code-error.ts?");

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