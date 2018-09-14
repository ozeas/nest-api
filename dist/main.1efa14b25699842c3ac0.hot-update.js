exports.id = "main";
exports.modules = {

/***/ "./node_modules/@nestjs/swagger/dist/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DECORATORS_PREFIX = 'swagger';\nexports.DECORATORS = {\n    API_OPERATION: `${exports.DECORATORS_PREFIX}/apiOperation`,\n    API_RESPONSE: `${exports.DECORATORS_PREFIX}/apiResponse`,\n    API_PRODUCES: `${exports.DECORATORS_PREFIX}/apiProduces`,\n    API_CONSUMES: `${exports.DECORATORS_PREFIX}/apiConsumes`,\n    API_USE_TAGS: `${exports.DECORATORS_PREFIX}/apiUseTags`,\n    API_PARAMETERS: `${exports.DECORATORS_PREFIX}/apiParameters`,\n    API_MODEL_PROPERTIES: `${exports.DECORATORS_PREFIX}/apiModelProperties`,\n    API_MODEL_PROPERTIES_ARRAY: `${exports.DECORATORS_PREFIX}/apiModelPropertiesArray`,\n    API_BEARER: `${exports.DECORATORS_PREFIX}/apiBearer`,\n    API_EXCLUDE_ENDPOINT: `${exports.DECORATORS_PREFIX}/apiExcludeEndpoint`,\n    API_OAUTH2: `${exports.DECORATORS_PREFIX}/apiOauth2`\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/constants.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-bearer.decorator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-bearer.decorator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiBearerAuth = () => {\n    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_BEARER, []);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-bearer.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-consumes.decorator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-consumes.decorator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiConsumes = (...mimeTypes) => {\n    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_CONSUMES, mimeTypes);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-consumes.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-exclude-endpoint.decorator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-exclude-endpoint.decorator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiExcludeEndpoint = () => helpers_1.createMethodDecorator(constants_1.DECORATORS.API_EXCLUDE_ENDPOINT, {\n    disable: true\n});\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-exclude-endpoint.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-implicit-body.decorator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-implicit-body.decorator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst initialMetadata = {\n    name: '',\n    required: true,\n    type: String\n};\nexports.ApiImplicitBody = (metadata) => {\n    const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);\n    const param = {\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'body',\n        description: metadata.description,\n        required: metadata.required,\n        type,\n        isArray\n    };\n    return helpers_1.createParamDecorator(param, initialMetadata);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-implicit-body.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-implicit-file.decorator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-implicit-file.decorator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst initialMetadata = {\n    name: '',\n    required: true\n};\nexports.ApiImplicitFile = (metadata) => {\n    const param = {\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'formData',\n        description: metadata.description || '',\n        required: metadata.required || false,\n        type: 'file'\n    };\n    return helpers_1.createParamDecorator(param, initialMetadata);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-implicit-file.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-implicit-header.decorator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-implicit-header.decorator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst initialMetadata = {\n    name: '',\n    required: true\n};\nexports.ApiImplicitHeader = (metadata) => {\n    const param = {\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'header',\n        description: metadata.description,\n        required: metadata.required,\n        type: String\n    };\n    return helpers_1.createParamDecorator(param, initialMetadata);\n};\nexports.ApiImplicitHeaders = (headers) => {\n    const multiMetadata = headers.map(metadata => ({\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'header',\n        description: metadata.description,\n        required: metadata.required,\n        type: String\n    }));\n    return helpers_1.createMultipleParamDecorator(multiMetadata, initialMetadata);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-implicit-header.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-implicit-param.decorator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-implicit-param.decorator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst initialMetadata = {\n    name: '',\n    required: true\n};\nexports.ApiImplicitParam = (metadata) => {\n    const param = {\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'path',\n        description: metadata.description,\n        required: metadata.required,\n        type: metadata.type\n    };\n    return helpers_1.createParamDecorator(param, initialMetadata);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-implicit-param.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-implicit-query.decorator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-implicit-query.decorator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst initialMetadata = {\n    name: '',\n    required: true\n};\nexports.ApiImplicitQuery = (metadata) => {\n    const param = {\n        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,\n        in: 'query',\n        description: metadata.description,\n        required: metadata.required,\n        type: metadata.type,\n        enum: undefined,\n        items: undefined,\n        collectionFormat: undefined\n    };\n    if (metadata.enum) {\n        param.type = String;\n        param.enum = metadata.enum;\n    }\n    if (metadata.isArray) {\n        param.type = Array;\n        if (metadata.enum) {\n            param.items = {\n                type: 'String',\n                enum: metadata.enum\n            };\n            param.collectionFormat = 'multi';\n            param.enum = undefined;\n        }\n        else {\n            param.items = {\n                type: metadata.type\n            };\n            param.collectionFormat = lodash_1.isNil(metadata.collectionFormat)\n                ? 'csv'\n                : metadata.collectionFormat;\n        }\n    }\n    return helpers_1.createParamDecorator(param, initialMetadata);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-implicit-query.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-model-property.decorator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-model-property.decorator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiModelProperty = (metadata = {}) => {\n    const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);\n    return helpers_1.createPropertyDecorator(constants_1.DECORATORS.API_MODEL_PROPERTIES, Object.assign({}, metadata, { type,\n        isArray }));\n};\nexports.ApiModelPropertyOptional = (metadata = {}) => exports.ApiModelProperty(Object.assign({}, metadata, { required: false }));\nexports.ApiResponseModelProperty = (metadata = {}) => exports.ApiModelProperty(Object.assign({}, metadata));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-model-property.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-oauth2.decorator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-oauth2.decorator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiOAuth2Auth = (scopes) => {\n    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_OAUTH2, scopes ? scopes : []);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-oauth2.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-operation.decorator.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-operation.decorator.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst initialMetadata = {\n    summary: ''\n};\nexports.ApiOperation = (metadata) => {\n    return helpers_1.createMethodDecorator(constants_1.DECORATORS.API_OPERATION, lodash_1.pickBy(Object.assign({}, initialMetadata, { summary: lodash_1.isNil(metadata.title)\n            ? initialMetadata.summary\n            : metadata.title, description: metadata.description, operationId: metadata.operationId, deprecated: metadata.deprecated }), lodash_1.negate(lodash_1.isUndefined)));\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-operation.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-produces.decorator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-produces.decorator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiProduces = (...mimeTypes) => {\n    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_PRODUCES, mimeTypes);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-produces.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-response.decorator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-response.decorator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_status_enum_1 = __webpack_require__(/*! @nestjs/common/enums/http-status.enum */ \"@nestjs/common/enums/http-status.enum\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiResponse = (metadata) => {\n    const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);\n    metadata.type = type;\n    metadata.isArray = isArray;\n    metadata.description = metadata.description ? metadata.description : '';\n    const groupedMetadata = { [metadata.status]: lodash_1.omit(metadata, 'status') };\n    return (target, key, descriptor) => {\n        if (descriptor) {\n            const responses = Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, descriptor.value) || {};\n            Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign({}, responses, groupedMetadata), descriptor.value);\n            return descriptor;\n        }\n        const responses = Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, target) || {};\n        Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign({}, responses, groupedMetadata), target);\n        return target;\n    };\n};\nexports.ApiOkResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.OK }));\nexports.ApiCreatedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.CREATED }));\nexports.ApiBadRequestResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.BAD_REQUEST }));\nexports.ApiNotFoundResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_FOUND }));\nexports.ApiInternalServerErrorResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR }));\nexports.ApiBadGatewayResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.BAD_GATEWAY }));\nexports.ApiConflictResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.CONFLICT }));\nexports.ApiForbiddenResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.FORBIDDEN }));\nexports.ApiGatewayTimeoutResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.GATEWAY_TIMEOUT }));\nexports.ApiGoneResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.GONE }));\nexports.ApiMethodNotAllowedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.METHOD_NOT_ALLOWED }));\nexports.ApiNotAcceptableResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_ACCEPTABLE }));\nexports.ApiNotImplementedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_IMPLEMENTED }));\nexports.ApiPayloadTooLargeResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.PAYLOAD_TOO_LARGE }));\nexports.ApiRequestTimeoutResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.REQUEST_TIMEOUT }));\nexports.ApiServiceUnavailableResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.SERVICE_UNAVAILABLE }));\nexports.ApiUnprocessableEntityResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.UNPROCESSABLE_ENTITY }));\nexports.ApiUnsupportedMediaTypeResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE }));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-response.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/api-use-tags.decorator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/api-use-tags.decorator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./node_modules/@nestjs/swagger/dist/decorators/helpers.js\");\nexports.ApiUseTags = (...tags) => {\n    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_USE_TAGS, tags);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/api-use-tags.decorator.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.createMethodDecorator = (metakey, metadata) => {\n    return (target, key, descriptor) => {\n        Reflect.defineMetadata(metakey, metadata, descriptor.value);\n        return descriptor;\n    };\n};\nexports.createClassDecorator = (metakey, metadata) => {\n    return target => {\n        Reflect.defineMetadata(metakey, metadata, target);\n        return target;\n    };\n};\nexports.createPropertyDecorator = (metakey, metadata) => {\n    return (target, propertyKey) => {\n        const properties = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, target) || [];\n        Reflect.defineMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, [...properties, `:${propertyKey}`], target);\n        Reflect.defineMetadata(metakey, Object.assign({ type: Reflect.getMetadata('design:type', target, propertyKey) }, lodash_1.pickBy(metadata, lodash_1.negate(lodash_1.isUndefined))), target, propertyKey);\n    };\n};\nexports.createMixedDecorator = (metakey, metadata) => {\n    return (target, key, descriptor) => {\n        if (descriptor) {\n            Reflect.defineMetadata(metakey, metadata, descriptor.value);\n            return descriptor;\n        }\n        Reflect.defineMetadata(metakey, metadata, target);\n        return target;\n    };\n};\nexports.createParamDecorator = (metadata, initial) => {\n    return (target, key, descriptor) => {\n        const parameters = Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, descriptor.value) || [];\n        Reflect.defineMetadata(constants_1.DECORATORS.API_PARAMETERS, [\n            ...parameters,\n            Object.assign({}, initial, lodash_1.pickBy(metadata, lodash_1.negate(lodash_1.isUndefined)))\n        ], descriptor.value);\n        return descriptor;\n    };\n};\nexports.createMultipleParamDecorator = (multiMetadata, initial) => {\n    return (target, key, descriptor) => {\n        const parameters = Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, descriptor.value) || [];\n        Reflect.defineMetadata(constants_1.DECORATORS.API_PARAMETERS, [\n            ...parameters,\n            ...multiMetadata.map(metadata => (Object.assign({}, initial, lodash_1.pickBy(metadata, lodash_1.negate(lodash_1.isUndefined)))))\n        ], descriptor.value);\n        return descriptor;\n    };\n};\nexports.getTypeIsArrayTuple = (input, isArrayFlag) => {\n    if (!input) {\n        return [input, isArrayFlag];\n    }\n    if (isArrayFlag) {\n        return [input, isArrayFlag];\n    }\n    const isInputArray = lodash_1.isArray(input);\n    const type = isInputArray ? input[0] : input;\n    return [type, isInputArray];\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/helpers.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/decorators/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/decorators/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./api-operation.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-operation.decorator.js\"));\n__export(__webpack_require__(/*! ./api-response.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-response.decorator.js\"));\n__export(__webpack_require__(/*! ./api-produces.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-produces.decorator.js\"));\n__export(__webpack_require__(/*! ./api-consumes.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-consumes.decorator.js\"));\n__export(__webpack_require__(/*! ./api-bearer.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-bearer.decorator.js\"));\n__export(__webpack_require__(/*! ./api-implicit-body.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-implicit-body.decorator.js\"));\n__export(__webpack_require__(/*! ./api-implicit-header.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-implicit-header.decorator.js\"));\n__export(__webpack_require__(/*! ./api-implicit-param.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-implicit-param.decorator.js\"));\n__export(__webpack_require__(/*! ./api-implicit-query.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-implicit-query.decorator.js\"));\n__export(__webpack_require__(/*! ./api-model-property.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-model-property.decorator.js\"));\n__export(__webpack_require__(/*! ./api-use-tags.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-use-tags.decorator.js\"));\n__export(__webpack_require__(/*! ./api-oauth2.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-oauth2.decorator.js\"));\n__export(__webpack_require__(/*! ./api-exclude-endpoint.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-exclude-endpoint.decorator.js\"));\n__export(__webpack_require__(/*! ./api-implicit-file.decorator */ \"./node_modules/@nestjs/swagger/dist/decorators/api-implicit-file.decorator.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/decorators/index.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/document-builder.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/document-builder.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst document_base_1 = __webpack_require__(/*! ./fixtures/document.base */ \"./node_modules/@nestjs/swagger/dist/fixtures/document.base.js\");\nclass DocumentBuilder {\n    constructor() {\n        this.document = document_base_1.documentBase;\n    }\n    setTitle(title) {\n        this.document.info.title = title;\n        return this;\n    }\n    setDescription(description) {\n        this.document.info.description = description;\n        return this;\n    }\n    setVersion(version) {\n        this.document.info.version = version;\n        return this;\n    }\n    setTermsOfService(termsOfService) {\n        this.document.info.termsOfService = termsOfService;\n        return this;\n    }\n    setContactEmail(email) {\n        this.document.info.contact = { email };\n        return this;\n    }\n    setLicense(name, url) {\n        this.document.info.license = { name, url };\n        return this;\n    }\n    setHost(host) {\n        this.document.host = host;\n        return this;\n    }\n    setBasePath(basePath) {\n        this.document.basePath = basePath.startsWith('/')\n            ? basePath\n            : '/' + basePath;\n        return this;\n    }\n    setExternalDoc(description, url) {\n        this.document.externalDocs = { description, url };\n        return this;\n    }\n    setSchemes(...schemes) {\n        this.document.schemes = schemes;\n        return this;\n    }\n    addTag(name, description = '') {\n        this.document.tags = this.document.tags.concat({ name, description });\n        return this;\n    }\n    addBearerAuth(name = 'Authorization', location = 'header', type = 'apiKey') {\n        this.document.securityDefinitions = Object.assign({}, (this.document.securityDefinitions || {}), { bearer: {\n                type,\n                name,\n                in: location\n            } });\n        return this;\n    }\n    addOAuth2(flow = 'password', authorizationUrl, tokenUrl, scopes) {\n        this.document.securityDefinitions = Object.assign({}, (this.document.securityDefinitions || {}), { oauth2: {\n                type: 'oauth2',\n                flow,\n                authorizationUrl,\n                tokenUrl,\n                scopes\n            } });\n        return this;\n    }\n    build() {\n        return this.document;\n    }\n}\nexports.DocumentBuilder = DocumentBuilder;\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/document-builder.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-consumes.explorer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-consumes.explorer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreGlobalApiConsumesMetadata = metatype => {\n    const consumes = Reflect.getMetadata(constants_1.DECORATORS.API_CONSUMES, metatype);\n    return consumes ? { consumes } : undefined;\n};\nexports.exploreApiConsumesMetadata = (instance, prototype, method) => {\n    return Reflect.getMetadata(constants_1.DECORATORS.API_CONSUMES, method);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-consumes.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-exclude-endpoint.explorer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-exclude-endpoint.explorer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreApiExcludeEndpointMetadata = (instance, prototype, method) => {\n    return Reflect.getMetadata(constants_1.DECORATORS.API_EXCLUDE_ENDPOINT, method);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-exclude-endpoint.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-operation.explorer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-operation.explorer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreApiOperationMetadata = (instance, prototype, method) => {\n    return Reflect.getMetadata(constants_1.DECORATORS.API_OPERATION, method);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-operation.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-parameters.explorer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-parameters.explorer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! @nestjs/common/constants */ \"@nestjs/common/constants\");\nconst route_paramtypes_enum_1 = __webpack_require__(/*! @nestjs/common/enums/route-paramtypes.enum */ \"@nestjs/common/enums/route-paramtypes.enum\");\nconst shared_utils_1 = __webpack_require__(/*! @nestjs/common/utils/shared.utils */ \"@nestjs/common/utils/shared.utils\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst constants_2 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreApiParametersMetadata = (definitions, instance, prototype, method) => {\n    const implicitParameters = Reflect.getMetadata(constants_2.DECORATORS.API_PARAMETERS, method);\n    const reflectedParameters = exploreApiReflectedParametersMetadata(instance, prototype, method);\n    const noAnyImplicit = lodash_1.isNil(implicitParameters);\n    if (noAnyImplicit && lodash_1.isNil(reflectedParameters)) {\n        return undefined;\n    }\n    const allReflectedParameters = transformModelToProperties(reflectedParameters || []);\n    const mergedParameters = noAnyImplicit\n        ? allReflectedParameters\n        : lodash_1.map(allReflectedParameters, item => lodash_1.assign(item, lodash_1.find(implicitParameters, ['name', item.name])));\n    const unionParameters = noAnyImplicit\n        ? mergedParameters\n        : lodash_1.unionWith(mergedParameters, implicitParameters, (arrVal, othVal) => {\n            return arrVal.name === othVal.name && arrVal.in === othVal.in;\n        });\n    const paramsWithDefinitions = mapModelsToDefinitons(unionParameters, definitions);\n    const parameters = mapParametersTypes(paramsWithDefinitions);\n    return parameters ? { parameters } : undefined;\n};\nconst DEFAULT_PARAM_TOKEN = '_';\nconst exploreApiReflectedParametersMetadata = (instance, prototype, method) => {\n    const types = Reflect.getMetadata(constants_1.PARAMTYPES_METADATA, instance, method.name);\n    const parametersMetadata = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, instance.constructor, method.name) || {};\n    const parametersWithType = lodash_1.mapValues(parametersMetadata, param => ({\n        type: types[param.index],\n        name: param.data,\n        required: true\n    }));\n    const parameters = lodash_1.omitBy(lodash_1.mapValues(parametersWithType, (val, key) => (Object.assign({}, val, { in: mapParamType(key) }))), val => val.in === DEFAULT_PARAM_TOKEN || (val.name && val.in === 'body'));\n    return !lodash_1.isEmpty(parameters) ? parameters : undefined;\n};\nconst exploreModelProperties = prototype => {\n    const props = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];\n    return props\n        .filter(lodash_1.isString)\n        .filter(prop => prop.charAt(0) === ':' && !shared_utils_1.isFunction(prototype[prop]))\n        .map(prop => prop.slice(1));\n};\nconst isBodyParameter = param => param.in === 'body';\nconst transformModelToProperties = reflectedParameters => {\n    return lodash_1.flatMap(reflectedParameters, (param) => {\n        if (!param || param.type === Object) {\n            return undefined;\n        }\n        const { prototype } = param.type;\n        if (param.name) {\n            return param;\n        }\n        if (isBodyParameter(param)) {\n            const name = param.type && shared_utils_1.isFunction(param.type) ? param.type.name : param.type;\n            return Object.assign({}, param, { name });\n        }\n        const modelProperties = exploreModelProperties(prototype);\n        return modelProperties.map(key => {\n            const reflectedParam = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||\n                {};\n            return Object.assign({}, param, reflectedParam, { name: key });\n        });\n    }).filter(lodash_1.identity);\n};\nconst transformToArrayModelProperty = (metadata, key, type) => {\n    const model = Object.assign({}, metadata, { name: key, type: 'array', items: Object.assign({}, type) });\n    if (metadata.enum !== undefined) {\n        delete model.enum;\n        model.items = Object.assign({}, model.items, { enum: metadata.enum });\n    }\n    return model;\n};\nexports.exploreModelDefinition = (type, definitions) => {\n    const { prototype } = type;\n    const modelProperties = exploreModelProperties(prototype);\n    const propertiesWithType = modelProperties.map(key => {\n        const metadata = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||\n            {};\n        const defaultTypes = [String, Boolean, Number, Object, Array];\n        if (metadata.enum !== undefined) {\n            metadata.enum = getEnumValues(metadata.enum);\n        }\n        const isNotDefaultType = shared_utils_1.isFunction(metadata.type) &&\n            !defaultTypes.find(defaultType => defaultType === metadata.type);\n        if (isNotDefaultType) {\n            const nestedModelName = exports.exploreModelDefinition(metadata.type, definitions);\n            const $ref = getDefinitionPath(nestedModelName);\n            if (metadata.isArray) {\n                return transformToArrayModelProperty(metadata, key, { $ref });\n            }\n            const strippedMetadata = lodash_1.omit(metadata, [\n                'type',\n                'isArray',\n                'collectionFormat',\n                'required'\n            ]);\n            if (Object.keys(strippedMetadata).length === 0) {\n                return { name: key, required: metadata.required, $ref };\n            }\n            return {\n                name: key,\n                required: metadata.required,\n                title: nestedModelName,\n                allOf: [{ $ref }, strippedMetadata]\n            };\n        }\n        const metatype = metadata.type && shared_utils_1.isFunction(metadata.type)\n            ? metadata.type.name\n            : metadata.type;\n        const swaggerType = exports.mapTypesToSwaggerTypes(metatype);\n        const itemType = metadata.enum ? getEnumType(metadata.enum) : swaggerType;\n        if (metadata.isArray) {\n            return transformToArrayModelProperty(metadata, key, { type: itemType });\n        }\n        else if (swaggerType === 'array') {\n            const defaultOnArray = 'string';\n            return transformToArrayModelProperty(metadata, key, {\n                type: defaultOnArray\n            });\n        }\n        else {\n            return Object.assign({}, metadata, { name: key, type: itemType });\n        }\n    });\n    const typeDefinition = {\n        type: 'object',\n        properties: lodash_1.mapValues(lodash_1.keyBy(propertiesWithType, 'name'), property => lodash_1.omit(property, ['name', 'isArray', 'required']))\n    };\n    const typeDefinitionRequiredFields = propertiesWithType\n        .filter(property => property.required != false)\n        .map(property => property.name);\n    if (typeDefinitionRequiredFields.length > 0) {\n        typeDefinition['required'] = typeDefinitionRequiredFields;\n    }\n    definitions.push({\n        [type.name]: typeDefinition\n    });\n    return type.name;\n};\nconst formDataModelTransformation = type => {\n    const { prototype } = type;\n    if (!prototype) {\n        return {};\n    }\n    const modelProperties = exploreModelProperties(prototype);\n    const data = modelProperties.map(key => {\n        const metadata = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||\n            {};\n        const defaultTypes = [String, Boolean, Number];\n        if (defaultTypes.indexOf(metadata.type.name)) {\n            return {\n                name: key,\n                type: metadata.type.name.toLowerCase(),\n                required: metadata.required,\n                in: 'formData'\n            };\n        }\n    });\n    return data;\n};\nconst getEnumValues = (e) => {\n    if (Array.isArray(e)) {\n        return e;\n    }\n    if (typeof e !== 'object') {\n        return [];\n    }\n    const values = [];\n    const uniqueValues = {};\n    for (const key in e) {\n        const value = e[key];\n        if (!uniqueValues.hasOwnProperty(value) &&\n            !uniqueValues.hasOwnProperty(key)) {\n            values.push(value);\n            uniqueValues[value] = value;\n        }\n    }\n    return values;\n};\nconst getEnumType = (values) => {\n    const hasString = values.filter(lodash_1.isString).length > 0;\n    return hasString ? 'string' : 'number';\n};\nconst mapParamType = (key) => {\n    const keyPair = key.split(':');\n    switch (Number(keyPair[0])) {\n        case route_paramtypes_enum_1.RouteParamtypes.BODY:\n            return 'body';\n        case route_paramtypes_enum_1.RouteParamtypes.PARAM:\n            return 'path';\n        case route_paramtypes_enum_1.RouteParamtypes.QUERY:\n            return 'query';\n        case route_paramtypes_enum_1.RouteParamtypes.HEADERS:\n            return 'header';\n        default:\n            return DEFAULT_PARAM_TOKEN;\n    }\n};\nconst hasSchemaDefinition = param => param.schema;\nconst omitParamType = param => lodash_1.omit(param, 'type');\nconst mapParametersTypes = parameters => parameters.map(param => {\n    if (hasSchemaDefinition(param)) {\n        return omitParamType(param);\n    }\n    const { type } = param;\n    const paramWithStringType = lodash_1.pickBy(Object.assign({}, param, { type: type && shared_utils_1.isFunction(type)\n            ? exports.mapTypesToSwaggerTypes(type.name)\n            : exports.mapTypesToSwaggerTypes(type) }), lodash_1.negate(shared_utils_1.isUndefined));\n    if (paramWithStringType.isArray) {\n        return Object.assign({}, paramWithStringType, { type: 'array', items: {\n                type: exports.mapTypesToSwaggerTypes(paramWithStringType.type)\n            } });\n    }\n    return paramWithStringType;\n});\nexports.mapTypesToSwaggerTypes = (type) => {\n    if (!(type && type.charAt)) {\n        return '';\n    }\n    return type.charAt(0).toLowerCase() + type.slice(1);\n};\nconst getDefinitionPath = modelName => `#/definitions/${modelName}`;\nconst mapModelsToDefinitons = (parameters, definitions) => {\n    return parameters.map(param => {\n        if (!isBodyParameter(param)) {\n            return param;\n        }\n        const isFormData = param.in === 'formData';\n        if (isFormData) {\n            return formDataModelTransformation(param.type);\n        }\n        const defaultTypes = [String, Boolean, Number];\n        if (shared_utils_1.isFunction(param.type) &&\n            defaultTypes.some(defaultType => defaultType === param.type)) {\n            return param;\n        }\n        const modelName = exports.exploreModelDefinition(param.type, definitions);\n        const name = param.name ? param.name : modelName;\n        const schema = {\n            $ref: getDefinitionPath(modelName)\n        };\n        if (param.isArray) {\n            return Object.assign({}, param, { name, schema: {\n                    type: 'array',\n                    items: schema\n                } });\n        }\n        return Object.assign({}, param, { name,\n            schema });\n    });\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-parameters.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-produces.explorer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-produces.explorer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreGlobalApiProducesMetadata = metatype => {\n    const produces = Reflect.getMetadata(constants_1.DECORATORS.API_PRODUCES, metatype);\n    return produces ? { produces } : undefined;\n};\nexports.exploreApiProducesMetadata = (instance, prototype, method) => {\n    return Reflect.getMetadata(constants_1.DECORATORS.API_PRODUCES, method);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-produces.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-response.explorer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-response.explorer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst constants_1 = __webpack_require__(/*! @nestjs/common/constants */ \"@nestjs/common/constants\");\nconst shared_utils_1 = __webpack_require__(/*! @nestjs/common/utils/shared.utils */ \"@nestjs/common/utils/shared.utils\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst constants_2 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nconst api_parameters_explorer_1 = __webpack_require__(/*! ./api-parameters.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-parameters.explorer.js\");\nexports.exploreGlobalApiResponseMetadata = (definitions, metatype) => {\n    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, metatype);\n    return responses\n        ? {\n            responses: mapResponsesToSwaggerResponses(responses, definitions)\n        }\n        : undefined;\n};\nexports.exploreApiResponseMetadata = (definitions, instance, prototype, method) => {\n    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, method);\n    if (responses) {\n        return mapResponsesToSwaggerResponses(responses, definitions);\n    }\n    const status = getStatusCode(method);\n    if (status) {\n        return { [status]: { description: '' } };\n    }\n    return undefined;\n};\nconst getStatusCode = method => {\n    const status = Reflect.getMetadata(constants_1.HTTP_CODE_METADATA, method);\n    if (status) {\n        return status;\n    }\n    const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);\n    switch (requestMethod) {\n        case common_1.RequestMethod.POST:\n            return common_1.HttpStatus.CREATED;\n        default:\n            return common_1.HttpStatus.OK;\n    }\n};\nconst omitParamType = param => lodash_1.omit(param, 'type');\nconst mapResponsesToSwaggerResponses = (responses, definitions) => lodash_1.mapValues(lodash_1.mapValues(responses, response => {\n    const { type, isArray } = response;\n    response = lodash_1.omit(response, ['isArray']);\n    if (!type) {\n        return response;\n    }\n    const defaultTypes = [String, Boolean, Number, Object, Array];\n    if (!(shared_utils_1.isFunction(type) &&\n        !defaultTypes.some(defaultType => defaultType === type))) {\n        const metatype = type && shared_utils_1.isFunction(type) ? type.name : type;\n        const swaggerType = api_parameters_explorer_1.mapTypesToSwaggerTypes(metatype);\n        if (isArray) {\n            return Object.assign({}, response, { schema: {\n                    type: 'array',\n                    items: {\n                        type: swaggerType\n                    }\n                } });\n        }\n        return Object.assign({}, response, { schema: {\n                type: swaggerType\n            } });\n    }\n    const name = api_parameters_explorer_1.exploreModelDefinition(type, definitions);\n    if (isArray) {\n        return exports.toArrayResponseWithDefinition(response, name);\n    }\n    return exports.toResponseWithDefinition(response, name);\n}), omitParamType);\nexports.toArrayResponseWithDefinition = (response, name) => (Object.assign({}, response, { schema: {\n        type: 'array',\n        items: {\n            $ref: `#/definitions/${name}`\n        }\n    } }));\nexports.toResponseWithDefinition = (response, name) => (Object.assign({}, response, { schema: {\n        $ref: `#/definitions/${name}`\n    } }));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-response.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-security.explorer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-security.explorer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreGlobalApiSecurityMetadata = metatype => {\n    const bearer = Reflect.getMetadata(constants_1.DECORATORS.API_BEARER, metatype);\n    const oauth2 = Reflect.getMetadata(constants_1.DECORATORS.API_OAUTH2, metatype);\n    const security = [];\n    bearer && security.push({ bearer });\n    oauth2 && security.push({ oauth2 });\n    return security.length > 0 ? { security } : undefined;\n};\nexports.exploreApiSecurityMetadata = (instance, prototype, method) => {\n    const bearer = Reflect.getMetadata(constants_1.DECORATORS.API_BEARER, method);\n    const oauth2 = Reflect.getMetadata(constants_1.DECORATORS.API_OAUTH2, method);\n    const security = [];\n    bearer && security.push({ bearer });\n    oauth2 && security.push({ oauth2 });\n    return security.length > 0 ? security : undefined;\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-security.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/explorers/api-use-tags.explorer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/explorers/api-use-tags.explorer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/@nestjs/swagger/dist/constants.js\");\nexports.exploreGlobalApiUseTagsMetadata = metatype => {\n    const tags = Reflect.getMetadata(constants_1.DECORATORS.API_USE_TAGS, metatype);\n    return tags ? { tags } : undefined;\n};\nexports.exploreApiUseTagsMetadata = (instance, prototype, method) => {\n    return Reflect.getMetadata(constants_1.DECORATORS.API_USE_TAGS, method);\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/explorers/api-use-tags.explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/fixtures/document.base.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/fixtures/document.base.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.documentBase = {\n    swagger: '2.0',\n    info: {\n        description: '',\n        version: '1.0.0',\n        title: ''\n    },\n    basePath: '/',\n    tags: [],\n    schemes: ['http']\n};\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/fixtures/document.base.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./decorators */ \"./node_modules/@nestjs/swagger/dist/decorators/index.js\"));\n__export(__webpack_require__(/*! ./document-builder */ \"./node_modules/@nestjs/swagger/dist/document-builder.js\"));\n__export(__webpack_require__(/*! ./swagger-module */ \"./node_modules/@nestjs/swagger/dist/swagger-module.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/index.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/swagger-explorer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/swagger-explorer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst constants_1 = __webpack_require__(/*! @nestjs/common/constants */ \"@nestjs/common/constants\");\nconst shared_utils_1 = __webpack_require__(/*! @nestjs/common/utils/shared.utils */ \"@nestjs/common/utils/shared.utils\");\nconst metadata_scanner_1 = __webpack_require__(/*! @nestjs/core/metadata-scanner */ \"@nestjs/core/metadata-scanner\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst pathToRegexp = __webpack_require__(/*! path-to-regexp */ \"path-to-regexp\");\nconst api_consumes_explorer_1 = __webpack_require__(/*! ./explorers/api-consumes.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-consumes.explorer.js\");\nconst api_exclude_endpoint_explorer_1 = __webpack_require__(/*! ./explorers/api-exclude-endpoint.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-exclude-endpoint.explorer.js\");\nconst api_operation_explorer_1 = __webpack_require__(/*! ./explorers/api-operation.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-operation.explorer.js\");\nconst api_parameters_explorer_1 = __webpack_require__(/*! ./explorers/api-parameters.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-parameters.explorer.js\");\nconst api_produces_explorer_1 = __webpack_require__(/*! ./explorers/api-produces.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-produces.explorer.js\");\nconst api_response_explorer_1 = __webpack_require__(/*! ./explorers/api-response.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-response.explorer.js\");\nconst api_security_explorer_1 = __webpack_require__(/*! ./explorers/api-security.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-security.explorer.js\");\nconst api_use_tags_explorer_1 = __webpack_require__(/*! ./explorers/api-use-tags.explorer */ \"./node_modules/@nestjs/swagger/dist/explorers/api-use-tags.explorer.js\");\nclass SwaggerExplorer {\n    constructor() {\n        this.metadataScanner = new metadata_scanner_1.MetadataScanner();\n        this.modelsDefinitions = [];\n    }\n    exploreController({ instance, metatype }, modulePath) {\n        const prototype = Object.getPrototypeOf(instance);\n        const explorersSchema = {\n            root: [\n                this.exploreRoutePathAndMethod,\n                api_operation_explorer_1.exploreApiOperationMetadata,\n                api_parameters_explorer_1.exploreApiParametersMetadata.bind(null, this.modelsDefinitions)\n            ],\n            produces: [api_produces_explorer_1.exploreApiProducesMetadata],\n            consumes: [api_consumes_explorer_1.exploreApiConsumesMetadata],\n            security: [api_security_explorer_1.exploreApiSecurityMetadata],\n            tags: [api_use_tags_explorer_1.exploreApiUseTagsMetadata],\n            responses: [api_response_explorer_1.exploreApiResponseMetadata.bind(null, this.modelsDefinitions)]\n        };\n        return this.generateDenormalizedDocument(metatype, prototype, instance, explorersSchema, modulePath);\n    }\n    getModelsDefinitons() {\n        return this.modelsDefinitions;\n    }\n    generateDenormalizedDocument(metatype, prototype, instance, explorersSchema, modulePath) {\n        let path = this.validateRoutePath(this.reflectControllerPath(metatype));\n        if (modulePath) {\n            path = modulePath + path;\n        }\n        const self = this;\n        const globalMetadata = this.exploreGlobalMetadata(metatype);\n        const denormalizedPaths = this.metadataScanner.scanFromPrototype(instance, prototype, name => {\n            const targetCallback = prototype[name];\n            const excludeEndpoint = api_exclude_endpoint_explorer_1.exploreApiExcludeEndpointMetadata(instance, prototype, targetCallback);\n            if (excludeEndpoint && excludeEndpoint.disable) {\n                return;\n            }\n            const methodMetadata = lodash_1.mapValues(explorersSchema, (explorers) => explorers.reduce((metadata, fn) => {\n                const exploredMetadata = fn.call(self, instance, prototype, targetCallback, path);\n                if (!exploredMetadata) {\n                    return metadata;\n                }\n                if (!lodash_1.isArray(exploredMetadata)) {\n                    return Object.assign({}, metadata, exploredMetadata);\n                }\n                return lodash_1.isArray(metadata)\n                    ? [...metadata, ...exploredMetadata]\n                    : exploredMetadata;\n            }, {}));\n            const mergedMethodMetadata = this.mergeMetadata(globalMetadata, lodash_1.omitBy(methodMetadata, lodash_1.isEmpty));\n            this.assignDefaultMimeType(mergedMethodMetadata, 'produces');\n            this.assignDefaultMimeType(mergedMethodMetadata, 'consumes');\n            return Object.assign({ responses: {} }, globalMetadata, mergedMethodMetadata);\n        });\n        return denormalizedPaths;\n    }\n    exploreGlobalMetadata(metatype) {\n        const globalExplorers = [\n            api_produces_explorer_1.exploreGlobalApiProducesMetadata,\n            api_use_tags_explorer_1.exploreGlobalApiUseTagsMetadata,\n            api_consumes_explorer_1.exploreGlobalApiConsumesMetadata,\n            api_security_explorer_1.exploreGlobalApiSecurityMetadata,\n            api_response_explorer_1.exploreGlobalApiResponseMetadata.bind(null, this.modelsDefinitions)\n        ];\n        const globalMetadata = globalExplorers\n            .map(explorer => explorer.call(explorer, metatype))\n            .filter(val => !shared_utils_1.isUndefined(val))\n            .reduce((curr, next) => (Object.assign({}, curr, next)), {});\n        return globalMetadata;\n    }\n    exploreRoutePathAndMethod(instance, prototype, method, globalPath) {\n        const routePath = Reflect.getMetadata(constants_1.PATH_METADATA, method);\n        if (shared_utils_1.isUndefined(routePath)) {\n            return undefined;\n        }\n        const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);\n        const fullPath = globalPath + this.validateRoutePath(routePath);\n        return {\n            method: common_1.RequestMethod[requestMethod].toLowerCase(),\n            path: fullPath === '' ? '/' : fullPath\n        };\n    }\n    reflectControllerPath(metatype) {\n        return Reflect.getMetadata(constants_1.PATH_METADATA, metatype);\n    }\n    validateRoutePath(path) {\n        if (shared_utils_1.isUndefined(path)) {\n            return '';\n        }\n        let pathWithParams = '';\n        for (const item of pathToRegexp.parse(path)) {\n            if (shared_utils_1.isString(item)) {\n                pathWithParams += item;\n            }\n            else {\n                pathWithParams += `${item.prefix}{${item.name}}`;\n            }\n        }\n        return pathWithParams === '/' ? '' : shared_utils_1.validatePath(pathWithParams);\n    }\n    mergeMetadata(globalMetadata, methodMetadata) {\n        return lodash_1.mapValues(methodMetadata, (value, key) => {\n            if (!globalMetadata[key]) {\n                return value;\n            }\n            const globalValue = globalMetadata[key];\n            if (!lodash_1.isArray(globalValue)) {\n                return Object.assign({}, globalValue, value);\n            }\n            return [...globalValue, ...value];\n        });\n    }\n    assignDefaultMimeType(metadata, key) {\n        if (metadata[key]) {\n            return undefined;\n        }\n        const defaultMimeType = 'application/json';\n        metadata[key] = [defaultMimeType];\n    }\n}\nexports.SwaggerExplorer = SwaggerExplorer;\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/swagger-explorer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/swagger-module.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/swagger-module.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst load_package_util_1 = __webpack_require__(/*! @nestjs/common/utils/load-package.util */ \"@nestjs/common/utils/load-package.util\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst swaggerUi = __webpack_require__(/*! swagger-ui-express */ \"./node_modules/swagger-ui-express/index.js\");\nconst swagger_scanner_1 = __webpack_require__(/*! ./swagger-scanner */ \"./node_modules/@nestjs/swagger/dist/swagger-scanner.js\");\nclass SwaggerModule {\n    static createDocument(app, config, options = {}) {\n        const document = this.swaggerScanner.scanApplication(app, options.include || []);\n        return Object.assign({}, config, document, { swagger: '2.0' });\n    }\n    static setup(path, app, document, options) {\n        const validatePath = (path) => path.charAt(0) !== '/' ? '/' + path : path;\n        const httpServer = app.getHttpServer();\n        if (httpServer instanceof core_1.FastifyAdapter) {\n            return this.setupFastify(path, httpServer, document);\n        }\n        const finalPath = validatePath(path);\n        const swaggerHtml = swaggerUi.generateHTML(document, options);\n        app.use(finalPath, swaggerUi.serveFiles(document, options));\n        app.use(finalPath, (req, res) => res.send(swaggerHtml));\n        app.use(finalPath + '-json', (req, res) => res.json(document));\n    }\n    static setupFastify(path, httpServer, document) {\n        httpServer.register(load_package_util_1.loadPackage('fastify-swagger', 'SwaggerModule'), {\n            swagger: document,\n            exposeRoute: true,\n            routePrefix: path,\n            mode: 'static',\n            specification: {\n                document\n            }\n        });\n    }\n}\nSwaggerModule.swaggerScanner = new swagger_scanner_1.SwaggerScanner();\nexports.SwaggerModule = SwaggerModule;\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/swagger-module.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/swagger-scanner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/swagger-scanner.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! @nestjs/common/constants */ \"@nestjs/common/constants\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst swagger_explorer_1 = __webpack_require__(/*! ./swagger-explorer */ \"./node_modules/@nestjs/swagger/dist/swagger-explorer.js\");\nconst swagger_transformer_1 = __webpack_require__(/*! ./swagger-transformer */ \"./node_modules/@nestjs/swagger/dist/swagger-transformer.js\");\nclass SwaggerScanner {\n    constructor() {\n        this.explorer = new swagger_explorer_1.SwaggerExplorer();\n        this.transfomer = new swagger_transformer_1.SwaggerTransformer();\n    }\n    scanApplication(app, includedModules) {\n        const { container } = app;\n        const modules = this.getModules(container.getModules(), includedModules);\n        const denormalizedPaths = lodash_1.map(modules, ({ routes, metatype }) => {\n            const path = metatype\n                ? Reflect.getMetadata(constants_1.MODULE_PATH, metatype)\n                : undefined;\n            return this.scanModuleRoutes(routes, path);\n        });\n        return Object.assign({}, this.transfomer.normalizePaths(lodash_1.flatten(denormalizedPaths)), { definitions: lodash_1.reduce(this.explorer.getModelsDefinitons(), lodash_1.extend) });\n    }\n    scanModuleRoutes(routes, modulePath) {\n        const denormalizedArray = [...routes.values()].map(ctrl => this.explorer.exploreController(ctrl, modulePath));\n        return lodash_1.flatten(denormalizedArray);\n    }\n    getModules(modulesContainer, include) {\n        if (!include || lodash_1.isEmpty(include)) {\n            return [...modulesContainer.values()];\n        }\n        return [...modulesContainer.values()].filter(({ metatype }) => include.some(item => item === metatype));\n    }\n}\nexports.SwaggerScanner = SwaggerScanner;\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/swagger-scanner.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/dist/swagger-transformer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@nestjs/swagger/dist/swagger-transformer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nclass SwaggerTransformer {\n    normalizePaths(denormalizedDoc) {\n        const doc = lodash_1.filter(denormalizedDoc, r => r.root);\n        const groupedByPath = lodash_1.groupBy(doc, ({ root }) => root.path);\n        const paths = lodash_1.mapValues(groupedByPath, routes => {\n            const keyByMethod = lodash_1.keyBy(routes, ({ root }) => root.method);\n            return lodash_1.mapValues(keyByMethod, (route) => {\n                return Object.assign({}, lodash_1.omit(route.root, ['method', 'path']), lodash_1.omit(route, 'root'));\n            });\n        });\n        return {\n            paths,\n        };\n    }\n}\nexports.SwaggerTransformer = SwaggerTransformer;\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/dist/swagger-transformer.js?");

/***/ }),

/***/ "./node_modules/@nestjs/swagger/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@nestjs/swagger/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nexports.__esModule = true;\n__export(__webpack_require__(/*! ./dist */ \"./node_modules/@nestjs/swagger/dist/index.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/@nestjs/swagger/index.js?");

/***/ }),

/***/ "./node_modules/swagger-ui-express/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swagger-ui-express/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar favIconHtml = '<link rel=\"icon\" type=\"image/png\" href=\"./favicon-32x32.png\" sizes=\"32x32\" />' +\n                  '<link rel=\"icon\" type=\"image/png\" href=\"./favicon-16x16.png\" sizes=\"16x16\" />'\n\nvar swaggerInit\n\nvar generateHTML = function (swaggerDoc, opts, options, customCss, customfavIcon, swaggerUrl, customeSiteTitle) {\n  var isExplorer\n  var customJs\n  if (opts && typeof opts === 'object') {\n    isExplorer = opts.explorer\n    options = opts.swaggerOptions\n    customCss = opts.customCss\n    customJs = opts.customJs\n    customfavIcon = opts.customfavIcon\n    swaggerUrl = opts.swaggerUrl\n    customeSiteTitle = opts.customSiteTitle\n  } else {\n    //support legacy params based function\n    isExplorer = opts\n  }\n\toptions = options || {};\n  var explorerString = isExplorer ? '' : '.swagger-ui .topbar .download-url-wrapper { display: none }';\n    customCss = explorerString + ' ' + customCss || explorerString;\n    customfavIcon = customfavIcon || false;\n    customeSiteTitle = customeSiteTitle || 'Swagger UI';\n\tvar html = fs.readFileSync(__dirname + '/indexTemplate.html');\n    try {\n    \tfs.unlinkSync(__dirname + '/index.html');\n    } catch (e) {\n\n    }\n\n    var favIconString = customfavIcon ? '<link rel=\"icon\" href=\"' + customfavIcon + '\" />' : favIconHtml;\n    var htmlWithCustomCss = html.toString().replace('<% customCss %>', customCss);\n    var htmlWithFavIcon = htmlWithCustomCss.replace('<% favIconString %>', favIconString);\n    var htmlWithCustomJs = htmlWithFavIcon.replace('<% customJs %>', customJs ? `<script src=\"${customJs}\"></script>` : '');\n\n    var initOptions = {\n      swaggerDoc: swaggerDoc || undefined,\n      customOptions: options,\n      swaggerUrl: swaggerUrl || undefined\n    }\n    var js = fs.readFileSync(__dirname + '/swagger-ui-init.js');\n    swaggerInit = js.toString().replace('<% swaggerOptions %>', stringify(initOptions))\n    return htmlWithCustomJs.replace('<% title %>', customeSiteTitle)\n}\n\nvar setup = function (swaggerDoc, opts, options, customCss, customfavIcon, swaggerUrl, customeSiteTitle) {\n    var htmlWithOptions = generateHTML(swaggerDoc, opts, options, customCss, customfavIcon, swaggerUrl, customeSiteTitle)\n    return function (req, res) { res.send(htmlWithOptions) };\n};\n\nfunction swaggerInitFn (req, res, next) {\n  if (req.url === '/swagger-ui-init.js') {\n    res.set('Content-Type', 'application/javascript')\n    res.send(swaggerInit)\n  } else {\n    next()\n  }\n}\n\nvar swaggerInitFunction = function (swaggerDoc, opts) {\n  var js = fs.readFileSync(__dirname + '/swagger-ui-init.js');\n  var swaggerInitFile = js.toString().replace('<% swaggerOptions %>', stringify(opts))\n  return function (req, res, next) {\n    if (req.url === '/swagger-ui-init.js') {\n      res.set('Content-Type', 'application/javascript')\n      res.send(swaggerInitFile)\n    } else {\n      next()\n    }\n  }\n} \n\nvar serveFiles = function (swaggerDoc, opts) {\n  opts = opts || {}\n  var initOptions = {\n    swaggerDoc: swaggerDoc || undefined,\n    customOptions: opts.swaggerOptions || {},\n    swaggerUrl: opts.swaggerUrl || {}\n  }\n  var swaggerInitWithOpts = swaggerInitFunction(swaggerDoc, initOptions)\n  return [swaggerInitWithOpts, express.static(__dirname + '/static')]\n}\n\nvar serve = [swaggerInitFn, express.static(__dirname + '/static')];\nvar serveWithOptions = options => [swaggerInitFn, express.static(__dirname + '/static', options)];\n\nvar stringify = function (obj, prop) {\n  var placeholder = '____FUNCTIONPLACEHOLDER____';\n  var fns = [];\n  var json = JSON.stringify(obj, function (key, value) {\n    if (typeof value === 'function') {\n      fns.push(value);\n      return placeholder;\n    }\n    return value;\n  }, 2);\n  json = json.replace(new RegExp('\"' + placeholder + '\"', 'g'), function (_) {\n    return fns.shift();\n  });\n  return 'var options = ' + json + ';';\n};\n\nmodule.exports = {\n\tsetup: setup,\n\tserve: serve,\n  serveWithOptions: serveWithOptions,\n  generateHTML: generateHTML,\n  serveFiles: serveFiles\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./node_modules/swagger-ui-express/index.js?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\r\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"./node_modules/@nestjs/swagger/index.js\");\r\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\r\nfunction bootstrap() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);\r\n        const options = new swagger_1.DocumentBuilder()\r\n            .setTitle(\"AdSoft - API NestJs\")\r\n            .setDescription(\"Estrutura de api usada pela AdSoft com NodeJs\")\r\n            .setVersion(\"0.001\")\r\n            .addTag(\"adsoft-api\")\r\n            .build();\r\n        const document = swagger_1.SwaggerModule.createDocument(app, options);\r\n        swagger_1.SwaggerModule.setup(\"api\", app, document);\r\n        app.useGlobalPipes(new common_1.ValidationPipe({\r\n            dismissDefaultMessages: false,\r\n            transform: true,\r\n        }));\r\n        yield app.listen(3000);\r\n        if (true) {\r\n            module.hot.accept();\r\n            module.hot.dispose(() => app.close());\r\n        }\r\n    });\r\n}\r\nbootstrap();\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "@nestjs/common/constants":
/*!*******************************************!*\
  !*** external "@nestjs/common/constants" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common/constants\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common/constants%22?");

/***/ }),

/***/ "@nestjs/common/enums/http-status.enum":
/*!********************************************************!*\
  !*** external "@nestjs/common/enums/http-status.enum" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common/enums/http-status.enum\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common/enums/http-status.enum%22?");

/***/ }),

/***/ "@nestjs/common/enums/route-paramtypes.enum":
/*!*************************************************************!*\
  !*** external "@nestjs/common/enums/route-paramtypes.enum" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common/enums/route-paramtypes.enum\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common/enums/route-paramtypes.enum%22?");

/***/ }),

/***/ "@nestjs/common/utils/load-package.util":
/*!*********************************************************!*\
  !*** external "@nestjs/common/utils/load-package.util" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common/utils/load-package.util\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common/utils/load-package.util%22?");

/***/ }),

/***/ "@nestjs/common/utils/shared.utils":
/*!****************************************************!*\
  !*** external "@nestjs/common/utils/shared.utils" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common/utils/shared.utils\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common/utils/shared.utils%22?");

/***/ }),

/***/ "@nestjs/core/metadata-scanner":
/*!************************************************!*\
  !*** external "@nestjs/core/metadata-scanner" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/core/metadata-scanner\");\n\n//# sourceURL=webpack:///external_%22@nestjs/core/metadata-scanner%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path-to-regexp\");\n\n//# sourceURL=webpack:///external_%22path-to-regexp%22?");

/***/ })

};