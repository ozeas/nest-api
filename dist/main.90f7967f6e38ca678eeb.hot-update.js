exports.id = "main";
exports.modules = {

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\r\nconst instance = express();\r\ninstance.use(bodyParser.json());\r\ninstance.use(bodyParser.urlencoded({ extended: false }));\r\nfunction bootstrap() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule, instance);\r\n        yield app.listen(3000);\r\n    });\r\n}\r\nbootstrap().then(() => console.log(\"Application is listening on port 3000.\"));\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

};