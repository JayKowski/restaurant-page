/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/about.css":
/*!***********************!*\
  !*** ./css/about.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./css/about.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/about.css?");

/***/ }),

/***/ "./css/contact.css":
/*!*************************!*\
  !*** ./css/contact.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./contact.css */ \"./node_modules/css-loader/dist/cjs.js!./css/contact.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/contact.css?");

/***/ }),

/***/ "./css/menu.css":
/*!**********************!*\
  !*** ./css/menu.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./css/menu.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/menu.css?");

/***/ }),

/***/ "./css/navbar.css":
/*!************************!*\
  !*** ./css/navbar.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./navbar.css */ \"./node_modules/css-loader/dist/cjs.js!./css/navbar.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/navbar.css?");

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./css/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/styles.css?");

/***/ }),

/***/ "./images/about-bckgrnd-edit.jpg":
/*!***************************************!*\
  !*** ./images/about-bckgrnd-edit.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/about-bckgrnd-edit.853d3378517685231542581634d13d02.jpg\");\n\n//# sourceURL=webpack:///./images/about-bckgrnd-edit.jpg?");

/***/ }),

/***/ "./images/food-art.jpg":
/*!*****************************!*\
  !*** ./images/food-art.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/food-art.32c07bad040c338a87ff04255f627a6b.jpg\");\n\n//# sourceURL=webpack:///./images/food-art.jpg?");

/***/ }),

/***/ "./images/menu-banner-edit.jpg":
/*!*************************************!*\
  !*** ./images/menu-banner-edit.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/menu-banner-edit.34a92dc007a38e1a8ed9c39e9be3094b.jpg\");\n\n//# sourceURL=webpack:///./images/menu-banner-edit.jpg?");

/***/ }),

/***/ "./images/pepperoni-pizza.jpg":
/*!************************************!*\
  !*** ./images/pepperoni-pizza.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pepperoni-pizza.12b68130ae3ca4e2c2ed09b2cd4b1c7d.jpg\");\n\n//# sourceURL=webpack:///./images/pepperoni-pizza.jpg?");

/***/ }),

/***/ "./images/restaurant-pic.jpg":
/*!***********************************!*\
  !*** ./images/restaurant-pic.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/restaurant-pic.2c0c6d8fc7f67ccb5c31e33bbab9b5ed.jpg\");\n\n//# sourceURL=webpack:///./images/restaurant-pic.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/about.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/about.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_about_bckgrnd_edit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/about-bckgrnd-edit.jpg */ \"./images/about-bckgrnd-edit.jpg\");\n/* harmony import */ var _images_food_art_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/food-art.jpg */ \"./images/food-art.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_about_bckgrnd_edit_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_food_art_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body,\\r\\nhtml {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* rest of the stuff here */\\r\\n\\r\\n.wrapper .sections {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper .back-img {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: 100%;\\r\\n  float: left;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .about .title {\\r\\n  font-family: 'Pacifico', cursive;\\r\\n  font-size: 120px;\\r\\n  text-align: center;\\r\\n  color: #fff;\\r\\n  margin: 60px 0 0 0;\\r\\n}\\r\\n\\r\\n.sections .description hr {\\r\\n  border: 0;\\r\\n  height: 1px;\\r\\n  background-image: linear-gradient(to right, rgba(20, 0, 17, 0), rgba(239, 91, 91, 0.75), rgba(20, 0, 17, 0));\\r\\n  width: 90%;\\r\\n  color: rgb(239, 91, 91);\\r\\n}\\r\\n\\r\\n.wrapper .sections .about hr {\\r\\n  border: 0;\\r\\n  height: 1px;\\r\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .about .about-deets {\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n  width: 50%;\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-size: 30px;\\r\\n  color: #cdcdcd;\\r\\n}\\r\\n\\r\\n/* description styles begin here henceforth */\\r\\n\\r\\n.sections .description {\\r\\n  text-align: center;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-color: #f4f5f5;\\r\\n  height: 100%;\\r\\n  float: right;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.sections .open-times {\\r\\n  margin: 50px auto 0;\\r\\n  width: 85%;\\r\\n  background-color: rgba(244, 245, 245, 0.75);\\r\\n  backdrop-filter: blur(3px);\\r\\n  padding-bottom: 20px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n.sections .description h1 {\\r\\n  font-family: 'Pacifico', cursive;\\r\\n}\\r\\n\\r\\n.sections .description .days-heading {\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\n.sections .description ul {\\r\\n  font-family: 'Merriweather Sans', sans-serif;\\r\\n  list-style-type: none;\\r\\n  text-align: start;\\r\\n  margin: 0 auto;\\r\\n  width: 55%;\\r\\n}\\r\\n\\r\\n.sections .description .day-name {\\r\\n  padding-right: 25px;\\r\\n}\\r\\n\\r\\n.sections .description .day-time {\\r\\n  position: relative;\\r\\n  left: 40px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/about.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/contact.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/contact.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_menu_banner_edit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu-banner-edit.jpg */ \"./images/menu-banner-edit.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_menu_banner_edit_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body,\\r\\nhtml {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* banner stuff here */\\r\\n\\r\\n.wrapper .sections {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .contact-img {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: 100%;\\r\\n  float: left;\\r\\n  width: 60%;\\r\\n\\r\\n  /* overflow-y: auto; */\\r\\n}\\r\\n\\r\\n.wrapper .sections .contact-sect {\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n  float: right;\\r\\n  width: 40%;\\r\\n  overflow-y: auto;\\r\\n  background-color: #F4F5F5;\\r\\n}\\r\\n\\r\\n.wrapper .sections .contact-banner .title {\\r\\n  font-family: 'Pacifico', cursive;\\r\\n  font-size: 110px;\\r\\n  text-align: center;\\r\\n  color: #fff;\\r\\n  margin: 60px 0 0 0;\\r\\n}\\r\\n\\r\\n.wrapper .sections .contact-banner hr {\\r\\n  border: 0;\\r\\n  height: 1px;\\r\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .contact-banner .about-deets {\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n  width: 50%;\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-size: 33px;\\r\\n  color: #cdcdcd;\\r\\n}\\r\\n\\r\\n/* contact form stuff here */\\r\\n\\r\\n.sections .contact-items .form-area {\\r\\n  margin: 0 auto;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.contact-items .form-area .heading {\\r\\n  margin: 5px auto;\\r\\n  text-align: center;\\r\\n  font-family: 'Oswald', sans-serif;\\r\\n}\\r\\n\\r\\n.contact-items .form-area p {\\r\\n  width: 85%;\\r\\n  margin: 5px auto;\\r\\n  font-family: 'Cairo', sans-serif;\\r\\n}\\r\\n\\r\\n.sections .contact-sect form {\\r\\n  width: 60%;\\r\\n  margin: 15px auto;\\r\\n  border: 1px solid #aaa;\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n  font-family: 'Cairo', sans-serif;\\r\\n\\r\\n  /* padding-left: 15%; */\\r\\n}\\r\\n\\r\\n.contact-sect form label {\\r\\n  font-size: 15px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.contact-sect form input[type=text],\\r\\n.contact-sect form input[type=number],\\r\\n.contact-sect form input[type=email] {\\r\\n  width: 92%;\\r\\n  padding: 8px;\\r\\n  margin-bottom: 8px;\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.contact-sect form input[type=submit] {\\r\\n  padding: 7px;\\r\\n  margin-top: 5px;\\r\\n  background-color: #77e4e0;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 4px;\\r\\n  color: #444;\\r\\n  width: 30%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/contact.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/menu.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_menu_banner_edit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu-banner-edit.jpg */ \"./images/menu-banner-edit.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_menu_banner_edit_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* menu banner stuff here */\\r\\n\\r\\n.wrapper .sections {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .menu-img {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: 100%;\\r\\n  float: left;\\r\\n  width: 60%;\\r\\n\\r\\n  /* overflow-y: auto; */\\r\\n}\\r\\n\\r\\n.wrapper .sections .menu-sect {\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n  float: right;\\r\\n  width: 40%;\\r\\n  overflow-y: auto;\\r\\n  background-color: #F4F5F5;\\r\\n}\\r\\n\\r\\n.wrapper .sections .menu-banner .title {\\r\\n  font-family: 'Pacifico', cursive;\\r\\n  font-size: 110px;\\r\\n  text-align: center;\\r\\n  color: #fff;\\r\\n  margin: 60px 0 0 0;\\r\\n}\\r\\n\\r\\n.wrapper .sections .menu-banner hr {\\r\\n  border: 0;\\r\\n  height: 1px;\\r\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.wrapper .sections .menu-banner .about-deets {\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n  width: 50%;\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-size: 33px;\\r\\n  color: #cdcdcd;\\r\\n}\\r\\n\\r\\n/* Menu section here */\\r\\n\\r\\n.sections .menu-items h1 {\\r\\n  margin: 10px;\\r\\n  text-align: center;\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\n/* dishes */\\r\\n\\r\\n.menu-items .dishes .heading {\\r\\n  text-align: center;\\r\\n  font-family: 'Noto Sans', sans-serif;\\r\\n  margin: 0 16px 0 16px;\\r\\n}\\r\\n\\r\\n.menu-items .dishes .dish {\\r\\n  width: 95%;\\r\\n  margin: 15px auto;\\r\\n  padding-bottom: 5px;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.menu-items .dishes .dish-image {\\r\\n  display: inline-block;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.menu-items .dishes img {\\r\\n  vertical-align: sub;\\r\\n  padding: 10px;\\r\\n  margin-top: 10px;\\r\\n  width: 160px;\\r\\n  height: 80px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.menu-items .dishes .ingredients {\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.menu-items .dishes .dish-info {\\r\\n  margin: 10px 0;\\r\\n  display: inline-block;\\r\\n  width: 55%;\\r\\n  font-family: 'Oswald', sans-serif;\\r\\n}\\r\\n\\r\\n.menu-items .dishes .size-price {\\r\\n  margin: 4px;\\r\\n  padding: 5px;\\r\\n  color: #aaa;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/navbar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/navbar.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"nav {\\r\\n  background-color: #77e4e0;\\r\\n  overflow: auto;\\r\\n  /* opacity: 1; */\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\nnav .media {\\r\\n  padding: 0 3% 0 1%;\\r\\n  text-align: center;\\r\\n  margin: 10px 0;\\r\\n  width: 10%;\\r\\n  float: left;\\r\\n}\\r\\n\\r\\nnav .media .icon {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nnav .media i {\\r\\n  width: 22px;\\r\\n  height: 18px;\\r\\n  padding: 5px;\\r\\n  font-size: 19px;\\r\\n  border: 1px solid #000;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  list-style-type: none;\\r\\n  padding: 4px 1%;\\r\\n  margin: auto;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  color: #23001e;\\r\\n  font-family: 'Dancing Script', cursive;\\r\\n  font-family: 'Great Vibes', cursive;\\r\\n  font-weight: bolder;\\r\\n  font-size: 27px;\\r\\n  display: inline-block;\\r\\n  padding: 0 4%;\\r\\n  width: 15%;\\r\\n}\\r\\n\\r\\nnav .link:hover {\\r\\n  cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/navbar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_restaurant_pic_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/restaurant-pic.jpg */ \"./images/restaurant-pic.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_restaurant_pic_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body,\\r\\nhtml {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: 100%;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n/* WRAPPER STUFF */\\r\\n.wrapper .rest-info {\\r\\n  position: absolute;\\r\\n  left: 34%;\\r\\n  top: 25%;\\r\\n  text-align: center;\\r\\n  background-color: rgba(29, 146, 175, 0.4);\\r\\n  border-radius: 12%;\\r\\n  padding: 40px 25px;\\r\\n}\\r\\n\\r\\n.wrapper .welcome .rest-logo {\\r\\n  width: 150px;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.wrapper .rest-info p {\\r\\n  margin: 0;\\r\\n  font-family: 'Amatic SC', cursive;\\r\\n  font-weight: bolder;\\r\\n  font-size: 50px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.wrapper .rest-info hr {\\r\\n  border: 1px solid #5f0f40;\\r\\n}\\r\\n\\r\\n.wrapper .rest-dine {\\r\\n  width: 100px;\\r\\n  height: 50px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: aboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutPage\", function() { return aboutPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/about.css */ \"./css/about.css\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_about_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst sections = document.querySelector('.sections');\r\n\r\nfunction aboutBanner() {\r\n  const banner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'back-img', '');\r\n  const about = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'about', '');\r\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'About');\r\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\r\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `Kowski's eats is a restaurant for everyone of all ages.\r\n                                Our meals are fairly priced and at high quality too. \\n\\n Spare sometime and \r\n                                pay us a visit!`);\r\n\r\n  // /////////// APPEND;\r\n  sections.appendChild(banner);\r\n  banner.appendChild(about);\r\n  about.appendChild(h1);\r\n  about.appendChild(hr);\r\n  about.appendChild(p);\r\n}\r\n\r\nfunction aboutDescription() {\r\n  const description = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'description', '');\r\n  const openTimes = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'open-times', '');\r\n  const headOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', '', 'Opening Hours');\r\n  const rule = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\r\n  const weekdays = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'weekdays', '');\r\n  const headTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'days-heading', 'Weekdays');\r\n  const weekdaysUl = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'days-open', '');\r\n  const liOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\r\n  const spanOneDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Monday');\r\n  const spanOneTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\r\n  const liTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\r\n  const spanTwoDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Tuesday');\r\n  const spanTwoTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\r\n  const liThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\r\n  const spanThreeDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Wednesday');\r\n  const spanThreeTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\r\n  const liFour = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\r\n  const spanFourDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Thursday');\r\n  const spanFourTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 4:00pm');\r\n  const liFive = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekday', '');\r\n  const spanFiveDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Friday');\r\n  const spanFiveTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 4:00pm');\r\n  const weekends = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'weekends', '');\r\n  const headThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'days-heading', 'Weekends');\r\n  const weekendsUl = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'days-open', '');\r\n  const liSix = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekend', '');\r\n  const spanSixDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Saturday');\r\n  const spanSixTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\r\n  const liSeven = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'weekend', '');\r\n  const spanSevenDay = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-name', 'Sunday');\r\n  const spanSevenTime = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'day-time', '8:00am - 6:00pm');\r\n  sections.appendChild(description);\r\n  description.appendChild(openTimes);\r\n  openTimes.appendChild(headOne);\r\n  openTimes.appendChild(rule);\r\n  openTimes.appendChild(weekdays);\r\n  weekdays.appendChild(headTwo);\r\n  weekdays.appendChild(weekdaysUl);\r\n  weekdaysUl.appendChild(liOne);\r\n  liOne.appendChild(spanOneDay);\r\n  liOne.appendChild(spanOneTime);\r\n  weekdaysUl.appendChild(liTwo);\r\n  liTwo.appendChild(spanTwoDay);\r\n  liTwo.appendChild(spanTwoTime);\r\n  weekdaysUl.appendChild(liThree);\r\n  liThree.appendChild(spanThreeDay);\r\n  liThree.appendChild(spanThreeTime);\r\n  weekdaysUl.appendChild(liFour);\r\n  liFour.appendChild(spanFourDay);\r\n  liFour.appendChild(spanFourTime);\r\n  weekdaysUl.appendChild(liFive);\r\n  liFive.appendChild(spanFiveDay);\r\n  liFive.appendChild(spanFiveTime);\r\n  description.appendChild(weekends);\r\n  openTimes.appendChild(weekends);\r\n  weekends.appendChild(headThree);\r\n  weekends.appendChild(weekendsUl);\r\n  weekendsUl.appendChild(liSix);\r\n  liSix.appendChild(spanSixDay);\r\n  liSix.appendChild(spanSixTime);\r\n  weekendsUl.appendChild(liSeven);\r\n  liSeven.appendChild(spanSevenDay);\r\n  liSeven.appendChild(spanSevenTime);\r\n}\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nfunction aboutPage() {\r\n  wrapper.appendChild(sections);\r\n  aboutBanner();\r\n  aboutDescription();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return contactPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/contact.css */ \"./css/contact.css\");\n/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_contact_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst sections = document.querySelector('.sections');\r\n\r\nfunction formElemGen(lFor, lCont, iType, iId, iName) {\r\n  let el;\r\n  if (lFor !== '') {\r\n    el = document.createElement('label');\r\n    el.setAttribute('for', `${lFor}`);\r\n    el.innerText = `${lCont}`;\r\n  } else {\r\n    el = document.createElement('input');\r\n    el.setAttribute('type', `${iType}`);\r\n    el.setAttribute('id', `${iId}`);\r\n    el.setAttribute('name', `${iName}`);\r\n  }\r\n  return el;\r\n}\r\n\r\nfunction contactBanner() {\r\n  const contactImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-img tabcontent', '');\r\n  const contBanner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-banner', '');\r\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'Contact us!');\r\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\r\n  const slogan = 'Here at Kowski\\'s eats, we make time for everyone too.Please reach out to us with any questions \\n\\n Don\\'t assume anything!';\r\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `${slogan}`);\r\n  // ////APPEND;\r\n  sections.appendChild(contactImg);\r\n  contactImg.appendChild(contBanner);\r\n  contBanner.appendChild(h1);\r\n  contBanner.appendChild(hr);\r\n  contBanner.appendChild(p);\r\n}\r\n\r\nfunction contactForm() {\r\n  const contactSect = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-sect tabcontent', '');\r\n  const contactItems = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'contact-items', '');\r\n  const formArea = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'form-area', '');\r\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'heading', 'Contact Us!');\r\n  const text = 'We understand that we cannot have all the details about us or how we operate in one static website, so incase you have more questions to ask, fill in the contact form below. \\n Reservation requests can also be submitted through here.';\r\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', `${text}`);\r\n  const form = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', '', '');\r\n  form.setAttribute('action', '#');\r\n\r\n  const label1 = formElemGen('name', 'Name', '', '', '');\r\n  const input1 = formElemGen('', '', 'text', 'name', 'name');\r\n\r\n  const label2 = formElemGen('number', 'Phone number', '', '', '');\r\n  const input2 = formElemGen('', '', 'number', 'number', 'number');\r\n\r\n  const label3 = formElemGen('email', 'Email', '', '', '');\r\n  const input3 = formElemGen('', '', 'email', 'email', 'email');\r\n\r\n  const label4 = formElemGen('others', 'Anything here', '', '', '');\r\n  const input4 = formElemGen('', '', 'text', 'others', 'others');\r\n\r\n  const submit = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', '', '');\r\n  submit.setAttribute('type', 'Submit');\r\n  submit.setAttribute('value', 'Send');\r\n  // ///////APPEND;\r\n  sections.append(contactSect);\r\n  contactSect.appendChild(contactItems);\r\n  contactItems.appendChild(formArea);\r\n  formArea.appendChild(h1);\r\n  formArea.appendChild(p);\r\n  formArea.appendChild(form);\r\n  form.appendChild(label1);\r\n  form.appendChild(input1);\r\n  form.appendChild(label2);\r\n  form.appendChild(input2);\r\n  form.appendChild(label3);\r\n  form.appendChild(input3);\r\n  form.appendChild(label4);\r\n  form.appendChild(input4);\r\n  form.appendChild(submit);\r\n}\r\n\r\nfunction contactPage() {\r\n  wrapper.appendChild(sections);\r\n  contactBanner();\r\n  contactForm();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElement; });\nfunction createElement(element, theClass, cont) {\r\n  const el = document.createElement(`${element}`);\r\n  if (theClass.length !== 0) {\r\n    el.classList += `${theClass}`;\r\n  }\r\n  if (cont.length !== 0) {\r\n    el.innerText += `${cont}`;\r\n  }\r\n  return el;\r\n}\n\n//# sourceURL=webpack:///./src/elementFactory.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return homePage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst sections = document.querySelector('.sections');\r\n\r\nfunction mainBody() {\r\n  const mainDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'bg-img', '');\r\n  const main = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'welcome', '');\r\n  const infoDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'rest-info', '');\r\n  const logoImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'rest-logo', '');\r\n  logoImg.setAttribute('src', '../images/restaurant-logo.png');\r\n  const nameP = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', 'KOWSKI\\'S EATS');\r\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\r\n  const sloganP = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', 'DELICACY MADE DELICIOUS');\r\n  const dineImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'rest-dine', '');\r\n  dineImg.setAttribute('src', '../images/dine.png');\r\n\r\n  mainDiv.appendChild(main);\r\n  main.appendChild(infoDiv);\r\n  infoDiv.appendChild(logoImg);\r\n  infoDiv.appendChild(nameP);\r\n  infoDiv.appendChild(hr);\r\n  infoDiv.appendChild(sloganP);\r\n  infoDiv.appendChild(dineImg);\r\n  sections.appendChild(mainDiv);\r\n}\r\n\r\nfunction homePage() {\r\n  wrapper.appendChild(sections);\r\n  mainBody();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction cleanPage() {\r\n  const sect = document.querySelector('.sections');\r\n  sect.innerHTML = '';\r\n}\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\n\r\nObject(_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(wrapper);\r\nObject(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst links = document.querySelector('.links');\r\nlinks.addEventListener('click', (e) => {\r\n  if (e.target.innerText === 'Contact') {\r\n    cleanPage();\r\n    Object(_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  } else if (e.target.innerText === 'Menu') {\r\n    cleanPage();\r\n    Object(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  } else if (e.target.innerText === 'About') {\r\n    cleanPage();\r\n    Object(_about__WEBPACK_IMPORTED_MODULE_2__[\"aboutPage\"])();\r\n  } else if (e.target.innerText === 'Home') {\r\n    cleanPage();\r\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuPage; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/menu.css */ \"./css/menu.css\");\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_menu_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_pepperoni_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pepperoni-pizza.jpg */ \"./images/pepperoni-pizza.jpg\");\n\n\n// import images;\n\n\n\n\nconst wrapper = document.querySelector('.wrapper');\n\nfunction menuItem(foodName, src) {\n  const dish = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish', '');\n  const dishImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish-image', '');\n  const img = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', '', '');\n  img.setAttribute('src', `${src}`);\n  const dishInfo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dish-info', '');\n  const h3 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'heading', `${foodName}`);\n  const ingredient = 'Tomato, Basil, wheat, turkey pepperoni, mozarella cheese';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'ingredients', `${ingredient}`);\n  const span1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Small: $3');\n  const span2 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Medium: $5');\n  const span3 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'size-price', 'Large: $10');\n  // //////APPEND ;\n\n  dish.appendChild(dishImg);\n  dishImg.appendChild(img);\n  dish.appendChild(dishInfo);\n  dishInfo.appendChild(h3);\n  dishInfo.appendChild(p);\n  dishInfo.appendChild(span1);\n  dishInfo.appendChild(span2);\n  dishInfo.appendChild(span3);\n\n  return dish;\n}\nconst sections = document.querySelector('.sections');\n\n\nfunction menuBanner() {\n  const menuImg = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-img', '');\n  const menuBanner = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-banner', '');\n  const h1 = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'title', 'Menu');\n  const hr = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hr', '', '');\n  const slogan = 'Here at Kowski\\'s eats we make something for everyone. Please browse our menu and find something you love \\n\\n All meals listed are prepared in a short time!';\n  const p = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'about-deets', `${slogan}`);\n  // ///////APPEND;\n  sections.appendChild(menuImg);\n  menuImg.appendChild(menuBanner);\n  menuBanner.appendChild(h1);\n  menuBanner.appendChild(hr);\n  menuBanner.appendChild(p);\n}\n\nfunction menuSection() {\n  const menuSect = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-sect', '');\n  const menuItems = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-items', '');\n  const dishes = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'dishes', '');\n  const hOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'PIZZA: ');\n  const dish1 = menuItem('PEPPERONI PIZZA', `${_images_pepperoni_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}`);\n  const dish2 = menuItem('BOREWORES PIZZA', '../images/borewores-pizza.jpg');\n  const dish3 = menuItem('VEGE PIZZA', '../images/vege-pizza.jpg');\n  const hTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'DRINKS: ');\n  const drink1 = menuItem('BLUEBERRY SMOOTHIE', '../images/blueberry-smoothie.jpeg');\n  const drink2 = menuItem('COCONUT SMOOTHIE', '../images/coconut-smoothie.jpeg');\n  const drink3 = menuItem('STRAWBERRY SMOOTHIE', '../images/strawberry-smoothie.jpeg');\n  const hThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'menu-title', 'DESSERT: ');\n  const dess1 = menuItem('MACAROONS', '../images/macaroons.jpeg');\n  const dess2 = menuItem('CHEESE CAKE', '../images/cheese-cake.jpeg');\n  const dess3 = menuItem('STRAWBERRY SMOOTHIE', '../images/chocolate-cake.jpeg');\n  // //////APPEND ;\n  menuSect.appendChild(menuItems);\n  menuItems.appendChild(dishes);\n  dishes.appendChild(hOne);\n  dishes.appendChild(dish1);\n  dishes.appendChild(dish2);\n  dishes.appendChild(dish3);\n  dishes.appendChild(hTwo);\n  dishes.appendChild(drink1);\n  dishes.appendChild(drink2);\n  dishes.appendChild(drink3);\n  dishes.appendChild(hThree);\n  dishes.appendChild(dess1);\n  dishes.appendChild(dess2);\n  dishes.appendChild(dess3);\n\n  sections.appendChild(menuSect);\n}\n\nfunction menuPage() {\n  wrapper.appendChild(sections);\n  menuBanner();\n  menuSection();\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigation; });\n/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ \"./src/elementFactory.js\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction navigation(parent) {\n  const nav = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', 'navigation', '');\n  const mediaDiv = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'media', '');\n  const iconSpanOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'icon', '');\n  const instaLogo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', 'fab fa-instagram', '');\n  const iconSpanTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'icon', '');\n  const faceLogo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', 'fab fa-facebook-f', '');\n  const list = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'links', '');\n  const linkOne = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Home');\n  const linkTwo = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'About');\n  const linkThree = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Menu');\n  const linkFour = Object(_elementFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'link', 'Contact');\n  // //////////////// APPENDING ELEMENTS ;\n  parent.appendChild(nav);\n  nav.appendChild(mediaDiv);\n  mediaDiv.appendChild(iconSpanOne);\n  iconSpanOne.appendChild(instaLogo);\n  iconSpanOne.appendChild(instaLogo);\n  mediaDiv.appendChild(iconSpanTwo);\n  iconSpanTwo.appendChild(faceLogo);\n  nav.appendChild(list);\n  list.appendChild(linkOne);\n  list.appendChild(linkTwo);\n  list.appendChild(linkThree);\n  list.appendChild(linkFour);\n}\n\n//# sourceURL=webpack:///./src/navigation.js?");

/***/ })

/******/ });