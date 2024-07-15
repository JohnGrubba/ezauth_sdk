/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ezauth"] = factory();
	else
		root["ezauth"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EZAuthClient.ts":
/*!*****************************!*\
  !*** ./src/EZAuthClient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EZAuthClient: () => (/* binding */ EZAuthClient)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar EZAuthClient = /** @class */ (function () {\n    function EZAuthClient(server_url) {\n        this.server_url = server_url.replace(/\\/$/, '');\n        console.log('EZAuth initialized');\n    }\n    EZAuthClient.prototype.health = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var response, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, fetch(\"\".concat(this.server_url, \"/up\"))];\n                    case 1:\n                        response = _a.sent();\n                        return [2 /*return*/, response.ok];\n                    case 2:\n                        error_1 = _a.sent();\n                        return [2 /*return*/, false];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    EZAuthClient.prototype.checkLoggedIn = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var response, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, fetch(\"\".concat(this.server_url, \"/profile\"), {\n                                credentials: \"include\"\n                            })];\n                    case 1:\n                        response = _a.sent();\n                        return [2 /*return*/, response.ok];\n                    case 2:\n                        error_2 = _a.sent();\n                        return [2 /*return*/, false];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    EZAuthClient.prototype.signup = function (email, username, password, user_data) {\n        return __awaiter(this, void 0, void 0, function () {\n            var response, errorDetail;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch(\"\".concat(this.server_url, \"/signup\"), {\n                            method: 'POST',\n                            headers: {\n                                'Content-Type': 'application/json',\n                            },\n                            body: JSON.stringify(__assign(__assign({}, user_data), { email: email, username: username, password: password }))\n                        })];\n                    case 1:\n                        response = _a.sent();\n                        if (!(response.status === 200)) return [3 /*break*/, 2];\n                        console.info(\"User Created and Logged In\");\n                        return [3 /*break*/, 5];\n                    case 2:\n                        if (!(response.status === 204)) return [3 /*break*/, 3];\n                        console.info(\"Confirmation E-Mail was sent\");\n                        return [3 /*break*/, 5];\n                    case 3: return [4 /*yield*/, response.json()];\n                    case 4:\n                        errorDetail = _a.sent();\n                        throw errorDetail;\n                    case 5: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    EZAuthClient.prototype.login = function (credential, password, two_factor) {\n        return __awaiter(this, void 0, void 0, function () {\n            var response, errorDetail;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch(\"\".concat(this.server_url, \"/login\"), {\n                            method: 'POST',\n                            headers: {\n                                'Content-Type': 'application/json',\n                            },\n                            body: JSON.stringify({\n                                identifier: credential,\n                                password: password,\n                                two_factor_code: two_factor\n                            }),\n                            credentials: \"include\"\n                        })];\n                    case 1:\n                        response = _a.sent();\n                        if (!(response.status === 200)) return [3 /*break*/, 2];\n                        console.info(\"Logged In\");\n                        return [3 /*break*/, 4];\n                    case 2: return [4 /*yield*/, response.json()];\n                    case 3:\n                        errorDetail = _a.sent();\n                        throw errorDetail;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return EZAuthClient;\n}());\n\n\n\n//# sourceURL=webpack://ezauth/./src/EZAuthClient.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EZAuthClient: () => (/* reexport safe */ _EZAuthClient__WEBPACK_IMPORTED_MODULE_0__.EZAuthClient)\n/* harmony export */ });\n/* harmony import */ var _EZAuthClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EZAuthClient */ \"./src/EZAuthClient.ts\");\n\n\n\n//# sourceURL=webpack://ezauth/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});