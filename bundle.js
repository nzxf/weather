/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Light.ttf */ \"./src/fonts/Poppins-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Medium.ttf */ \"./src/fonts/Poppins-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Bold.ttf */ \"./src/fonts/Poppins-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'light';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: 'med';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: 'bold';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n:root {\n  --blackish: linear-gradient(to bottom left, #757575, #212121);\n  --blackish2: linear-gradient(to left, #4b4b4b, #3f3f3f);\n  --greyish: rgba(255, 255, 255, 0.6);;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  font-family: 'med';\n  font-size: 1.1rem;\n  color: #eeeeee;\n  /* border: solid 1px orange; */\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: scroll;\n}\n\n#content {\n  width: 90%;\n  height: 95%;\n  display: grid;\n  grid-template-columns: 1fr minmax(50px, 300px);\n  grid-template-rows: 45px 1fr auto;\n  gap: 7.5px;\n  overflow: hidden;\n}\n\n.topbar {\n  grid-column: 1/3;\n\n  background-image: var(--blackish);\n  width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 15px;\n  border-radius: 20px;\n  padding: 5px 20px;\n}\n\n.app-name {\n  font-family: 'bold';\n  font-size: 1.25rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n/* SEARCH BAR  */\n\nform {\n  background-image: var(--blackish2);\n  display: grid;\n  grid-template-columns: 1fr 25px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  padding: 0 10px;\n}\n\nform > input {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\nform > button {\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 1.2rem;\n}\n\n/* TEMPERATURE SCALE AND SYSTEM MEASUREMENT */\n\n.pref-button {\n  width: 75px;\n  background-color: transparent;\n  cursor: pointer;\n  font-family: 'med';\n  font-size: 1rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.pref-button:hover {\n  font-family: 'bold';\n  color: white;\n}\n\n/* MAIN CITY */\n\n.main-body {\n  width: 100%;\n  color: white;\n}\n\n.main-container {\n  background-image: linear-gradient(to bottom right, #39375D, #171C36);\n  background-image: var(--blackish);\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  padding: 20px;\n\n  display: grid;\n  grid-template-rows: auto 1fr auto auto;\n  row-gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n  column-gap: 5px;\n}\n\n.top-container {\n  grid-column: 1/6;\n  display: flex;\n  justify-content: space-between;\n}\n\n.geo-container {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n}\n\n.date-container {\n  display: flex;\n  flex-direction: column;\n  text-align: end;\n}\n\n.main-city,\n.main-date {\n  height: 100%;\n  font-family: 'bold';\n  /* padding: 5px 0; */\n  font-size: 1.2rem;\n}\n\n.main-country,\n.main-time {\n  height: 100%;\n  /* padding: 5px 0; */\n  font-size: 1rem;\n  color: var(--greyish);\n}\n\n.main-icon {\n  grid-column: 1/6;\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.main-weather {\n  grid-column: 1/6;\n  text-align: center;\n  font-family: 'bold';\n  font-size: 1.5rem;\n}\n\n.temp-container {\n  grid-column: 1/2;\n  text-align: center;\n}\n\n.sub-container:after {\n  text-align: center;\n  content: attr(data-hover);\n  border-radius: 15px;\n  border: solid 1px grey;\n  background-color: rgba(128, 128, 128, 0.5);\n  padding: 0px 5px;\n  position: absolute;\n  opacity: 0;\n  transform: translate(0px, -25px);\n}\n\n.sub-container:hover:after {\n  opacity: 1;\n}\n\n.temp-icon-c {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/1146/1146866.png);\n}\n.temp-icon-f {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/1146/1146868.png);\n}\n\n.humid-icon {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/2828/2828802.png);\n}\n.humid-container {\n  grid-column: 2/3;\n  text-align: center;\n}\n\n.wind-container {\n  grid-column: 3/4;\n  text-align: center;\n}\n.wind-icon {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/1146/1146907.png);\n}\n.uv-container {\n  grid-column: 4/5;\n  text-align: center;\n}\n.uv-icon {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/4005/4005885.png);\n}\n.cloud-container {\n  grid-column: 5/6;\n  text-align: center;\n}\n.cloud-icon {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/1146/1146877.png);\n}\n\n.sub-container {\n  display: flex;\n  flex-direction: column;\n  gap: 7.5px;\n  padding: 10px 0;\n}\n\n.sub-icon {\n  height: 30px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.hidden {\n  display: none;\n}\n\n/* 7 DAYS FORECAST */\n\n.end-body {\n  grid-column: 1/2;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n  gap: 5px;\n  overflow: hidden;\n}\n\n.day-container {\n  background-image: var(--blackish);\n  border-radius: 20px;\n  display: grid;\n  justify-content: center;\n  align-items: start;\n  grid-template-rows: repeat(2, auto) 45px 1fr;\n  text-align: center;\n  padding: 7.5px 5px;\n  color: white;\n  font-size: 0.9rem;\n  overflow: hidden;\n}\n\n.end-date {\n  font-family: 'med';\n  font-size: 0.9rem;\n}\n\n.end-day {\n  font-family: 'bold';\n  font-size: 0.9rem;\n}\n\n.end-icon {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n\n  border-top: solid 10px transparent;\n}\n\n.end-weather {\n  font-size: 0.9em;\n  padding: 5px;\n}\n\n.sidebar {\n  grid-row: 2/3;\n  grid-column: 2/3;\n\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, auto);\n  gap: 5px;\n  overflow: hidden;\n}\n\n.side-container {\n  display: grid;\n  grid-template-columns: 1fr 45px 85px;\n  grid-template-rows: auto 1fr;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-image: var(--blackish);\n  border-radius: 25px 25px 25px 25px;\n  color: white;\n  padding: 7.5px 15px;\n  gap: 2.5px;\n}\n\n.side-city {\n  font-family: 'bold';\n}\n\n.side-country {\n  grid-row: 2/3;\n  font-family: 'med';\n  font-size: 0.8rem;\n  color: var(--greyish)\n}\n\n.side-icon {\n  grid-row: 1/3;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 45px;\n}\n\n.side-temp {\n  grid-row: 1/2;\n  grid-column: 3/4;\n  font-family: 'bold';\n}\n\n.side-time {\n    grid-row: 2/3;\n    grid-column: 3/4;\n    font-family: 'med';\n    font-size: 0.9rem;\n    color: rgba(255, 255, 255, 0.6);\n}\n\n/* ATTRIBUTES */\n\n.sidebar-end {\n  grid-column: 2/2;\n  grid-row: 3/4;\n  background-image: var(--blackish2);\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  text-align: center;\n}\n\n.att {\n  font-size: .9rem;\n  \n}\n\n\n.weather-api {\n  background-image: url(https://cdn.weatherapi.com/v4/images/weatherapi_logo.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  width: 100px;\n}\n\n@media (max-width: 900px) {\n  #content {\n    width: 98%;\n    height: 98%;\n    grid-template-columns: 1fr;\n  }\n  .side-container {\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n  .side-city {\n    font-size: 0.8rem;\n  }\n\n  .side-country,\n  .side-temp,\n  .side-weather,\n  .side-time {\n    display: none;\n  }\n  .side-icon {\n    width: 35px;\n    height: 35px;\n  }\n  .weather-api {\n    height: 60px;\n    width: 80px;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  #content {\n    grid-template-columns: 1fr;\n    column-gap: 0;\n  }\n  .sidebar,\n  .sidebar-end {\n    display: none;\n  }\n  .end-weather {\n    font-size: 0.8em;\n  }\n}\n\n/* ANIMATION */\n\n.levitate {\n  background-image: url(https://cdn-icons-png.flaticon.com/512/8841/8841321.png);\n  animation: levitate 4s ease-in-out;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n@keyframes levitate {\n  0% {\n    transform: translateY(-15px);\n  }\n  50% {\n    transform: translateY(-30px);\n  }\n  100% {\n    transform: translateY(-15px);\n  }\n}\n\n\n.shake {\n  animation: shake .3s;\n}\n@keyframes shake {\n  0% {\n    transform: rotate(0deg);\n  }\n    33% {\n    transform: rotate(-2deg);\n  }\n    66% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.slide-in {\n  animation: slide-in .8s ease-in-out;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateY(1000px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.side-container-0,\n.day-container-0 {\n  animation-delay: 0s;\n  transform: translateY(0px)\n}\n.side-container-1,\n.day-container-1 {\n  animation-delay: 0.2s;\n  transform: translateY(0px)\n}\n.side-container-2,\n.day-container-2 {\n  animation-delay: 0.4s;\n  transform: translateY(0px)\n}\n.side-container-3,\n.day-container-3 {\n  animation-delay: 0.6s;\n  transform: translateY(0px)\n}\n.side-container-4,\n.day-container-4 {\n  animation-delay: 0.8s;\n  transform: translateY(0px)\n}\n.side-container-5,\n.day-container-5 {\n  animation-delay: 1s;\n  transform: translateY(0px)\n}\n.sidebar-end,\n.day-container-6 {\n  animation-delay: 1.2s;\n  transform: translateY(0px)\n}\n\n\n.outside {\n  transform: translateY(1000px)\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weath/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weath/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weath/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weath/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weath/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weath/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/codes.js":
/*!**********************!*\
  !*** ./src/codes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherCodes: () => (/* binding */ weatherCodes)\n/* harmony export */ });\n// SIMPLIFIED WEATHER CODES\nconst weatherCodes = {\n  clear: [1000],\n  cloud: [1003, 1006, 1009],\n  rain: [\n    1063, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1072, 1150,\n    1153, 1168, 1171, 1180, 1183,\n  ],\n  snow: [\n    1066, 1069, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237,\n    1249, 1252, 1255, 1258,\n  ],\n  storm: [1261, 1264, 1087, 1117, 1273, 1276, 1279, 1282],\n  mist: [1135, 1147, 1030],\n};\n\n\n\n\n//# sourceURL=webpack://weath/./src/codes.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myFunctions: () => (/* binding */ myFunctions)\n/* harmony export */ });\nconst myFunctions = (() => {\n  // RANDOM NUMBER BETWEEN TWO NUMBERS\n  const randomBetween = (min, max) => {\n    return Math.floor(Math.random() * (max + 1 - min) + min);\n  };\n  // GET A WEEK START FROM TOMORROW\n  const aWeekFromNow = () => {\n    let result = [];\n    let daysOfWeek = [\n      'Sunday',\n      'Monday',\n      'Tuesday',\n      'Wednesday',\n      'Thursday',\n      'Friday',\n      'Saturday',\n    ];\n    let theDay = daysOfWeek[new Date().getDay()];\n    let index = daysOfWeek.indexOf(theDay);\n    for (let i = index; i < daysOfWeek.length; i++) {\n      result.push(daysOfWeek[i].slice(0, 3));\n    }\n    for (let i = 0; i < index; i++) {\n      result.push(daysOfWeek[i]);\n    }\n    return result;\n  };\n  // PICK A CITY FROM EACH CONTINENTS\n  const sideCities = (data) => {\n    let result = [];\n    let max = 9;\n    result.push(\n      data.africanCities[randomBetween(0, max)],\n      data.asianCities[randomBetween(0, max)],\n      data.europeanCities[randomBetween(0, max)],\n      data.northAmericanCities[randomBetween(0, max)],\n      data.southAmericanCities[randomBetween(0, max)],\n      data.australiaOceaniaCities[randomBetween(0, max)]\n    );\n    return result;\n  };\n  // TRANSLATE RAWDATE INTO PRESENTABLE DAY & TIME\n  const dayMaker = (dateString) => {\n    let aDay = new Date(dateString);\n    const optionsDay = { weekday: 'short', hour: 'numeric', minute: 'numeric' };\n    return aDay.toLocaleDateString(undefined, optionsDay);\n  };\n  // TRANSLATE RAWDATE INTO PRESENTABLE DATE\n  const dateMaker = (dateString) => {\n    let aDate = new Date(dateString);\n    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };\n    return aDate.toLocaleDateString(undefined, optionsDate);\n  };\n  // EXTRACT ONLY HOURS & MINUTES\n  const extractTime = (string) => string.slice(11, 13) + string.slice(14, 16);\n  // IS IT DAY OR NIGHT\n  const dayOrNight = (string) => {\n    if (parseInt(string) <= 600 || parseInt(string) >= 1800) {\n      return 'night';\n    }\n    return 'day';\n  };\n\n  return {\n    randomBetween,\n    aWeekFromNow,\n    sideCities,\n    dayMaker,\n    dateMaker,\n    extractTime,\n    dayOrNight,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weath/./src/functions.js?");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   firstIcons: () => (/* binding */ firstIcons),\n/* harmony export */   icons: () => (/* binding */ icons),\n/* harmony export */   secondaryIcons: () => (/* binding */ secondaryIcons)\n/* harmony export */ });\nconst firstIcons = {\n  day: 'https://cdn-icons-png.flaticon.com/512/9755/9755203.png',\n  night: 'https://cdn-icons-png.flaticon.com/512/9755/9755205.png',\n};\n\nconst secondaryIcons = {\n  clear: '',\n  cloudy: 'https://cdn-icons-png.flaticon.com/512/7774/7774262.png',\n  drizzly: 'https://cdn-icons-png.flaticon.com/512/7774/7774399.png',\n  rainy: 'https://cdn-icons-png.flaticon.com/512/7774/7774399.png',\n  snowy: 'https://cdn-icons-png.flaticon.com/512/7774/7774317.png',\n  thundery: 'https://cdn-icons-png.flaticon.com/512/7774/7774254.png',\n  stormy: 'https://cdn-icons-png.flaticon.com/512/7774/7774407.png',\n};\n\nconst icons = {\n  day: {\n    clear: 'https://cdn-icons-png.flaticon.com/512/8841/8841321.png',\n    cloud: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png',\n    rain: 'https://cdn-icons-png.flaticon.com/512/1146/1146915.png',\n    snowy: 'https://cdn-icons-png.flaticon.com/512/1146/1146878.png',\n  },\n  night: {\n    clear: 'https://cdn-icons-png.flaticon.com/512/2987/2987960.png',\n    cloud: 'https://cdn-icons-png.flaticon.com/512/1146/1146900.png',\n    rain: 'https://cdn-icons-png.flaticon.com/512/1146/1146857.png',\n    snowy: 'https://cdn-icons-png.flaticon.com/512/1146/1146862.png',\n  },\n  neutral: {\n    mist: 'https://cdn-icons-png.flaticon.com/512/7774/7774309.png',\n    storm: 'https://cdn-icons-png.flaticon.com/512/1146/1146860.png',\n  },\n  err: 'https://cdn-icons-png.flaticon.com/512/2797/2797387.png',\n};\n\n\n\n\n//# sourceURL=webpack://weath/./src/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"./src/icons.js\");\n/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codes */ \"./src/codes.js\");\n/* harmony import */ var _worlds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worlds */ \"./src/worlds.js\");\n\n\n\n\n\n\nconst aWeekFromNow = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.aWeekFromNow;\nconst sideCities = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.sideCities;\nconst dayMaker = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.dayMaker;\nconst dateMaker = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.dateMaker;\nconst extractTime = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.extractTime;\nconst dayOrNight = _functions__WEBPACK_IMPORTED_MODULE_1__.myFunctions.dayOrNight;\n\nconst weatherCodeTranslator = (dayOrNight, code) => {\n  // NEUTRAL\n  if (_codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.storm.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.neutral.storm;\n  }\n  if (_codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.mist.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.neutral.mist;\n  }\n  // DAY\n  if (dayOrNight === 'day' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.clear.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.day.clear;\n  }\n  if (dayOrNight === 'day' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.cloud.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.day.cloud;\n  }\n  if (dayOrNight === 'day' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.rain.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.day.rain;\n  }\n  if (dayOrNight === 'day' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.snow.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.day.snow;\n  }\n  // NIGHT\n  if (dayOrNight === 'night' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.clear.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.night.clear;\n  }\n  if (dayOrNight === 'night' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.cloud.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.night.cloud;\n  }\n  if (dayOrNight === 'night' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.rain.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.night.rain;\n  }\n  if (dayOrNight === 'night' && _codes__WEBPACK_IMPORTED_MODULE_3__.weatherCodes.snow.includes(code)) {\n    return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.night.snow;\n  }\n  // NONE ABOVE = ERROR\n  return _icons__WEBPACK_IMPORTED_MODULE_2__.icons.err;\n};\n\nconst animateElement = (className, animationName, iteration = 'infinity') => {\n  const targets = document.querySelectorAll(className);\n  targets.forEach((target) => target.classList.add(animationName));\n  if (iteration !== 'infinty') {\n    targets.forEach((target) =>\n      target.addEventListener('animationend', () => {\n        target.classList.remove(animationName);\n        target.classList.remove('outside');\n      })\n    );\n  }\n\n};\n\n// API WEATHER\nconst API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';\n\nconst tellWeather = async (api, city) => {\n  const url = 'https://api.weatherapi.com/v1/';\n  const cors = { mode: 'cors' };\n  const res = await fetch(`${url}current.json?key=${api}&q=${city}`, cors);\n  const data = await res.json();\n  return data;\n};\nconst tellForecast = async (api, zipcode, days) => {\n  const url = 'https://api.weatherapi.com/v1/';\n  const res = await fetch(\n    `${url}forecast.json?key=${api}&q=${zipcode}&days=${days}`\n  );\n  const data = await res.json();\n  return data;\n};\nconst userFrom = async (api, key) => {\n  const url = 'https://api.weatherapi.com/v1/';\n  const cors = { mode: 'cors' };\n  const res = await fetch(`${url}current.json?key=${api}&q=${key}`, cors);\n  const data = await res.json();\n  return data.location.name;\n};\n\nfunction fillMainBody(cityData) {\n  //  MAIN ICON\n  let localTime = dayOrNight(extractTime(cityData.location.localtime));\n  let weatherCode = cityData.current.condition.code;\n  let weatherIcon = weatherCodeTranslator(localTime, weatherCode);\n  const mainIcon = document.querySelector('.main-icon');\n  mainIcon.style.backgroundImage = `url(${weatherIcon}`;\n  // CITY\n  const mainCity = document.querySelector('.main-city');\n  mainCity.textContent = cityData.location.name;\n  // COUNTRY\n  const mainCountry = document.querySelector('.main-country');\n  mainCountry.textContent = cityData.location.country;\n  // // LOCALE DATE\n  const mainDate = document.querySelector('.main-date');\n  mainDate.textContent = dateMaker(cityData.location.localtime);\n  // // LOCALE TIME\n  const mainTime = document.querySelector('.main-time');\n  mainTime.textContent = dayMaker(cityData.location.localtime);\n  // // MAIN WEATHER\n  const mainWeather = document.querySelector('.main-weather');\n  mainWeather.textContent = cityData.current.condition.text.toUpperCase();\n  // // TEMPERATURES\n  const tempC = document.querySelector('.temp-celcius');\n  tempC.textContent = `${cityData.current.temp_c} °C`;\n  const tempF = document.querySelector('.temp-fahrenheit');\n  tempF.textContent = `${cityData.current.temp_f} °F`;\n  // // HUMIDITY\n  const humid = document.querySelector('.humid');\n  humid.textContent = `${cityData.current.humidity}%`;\n  // // WIND\n  const windMet = document.querySelector('.wind-metric');\n  windMet.textContent = `${cityData.current.wind_mph} mph`;\n  const windImp = document.querySelector('.wind-imperial');\n  windImp.textContent = `${cityData.current.wind_kph} kph`;\n  // UV\n  const uv = document.querySelector('.uv');\n  uv.textContent = `${cityData.current.uv}.0`;\n  // CLOUD\n  const cloud = document.querySelector('.cloud');\n  cloud.textContent = `${cityData.current.cloud}%`;\n}\nfunction fillEndBody(cityData) {\n  let dataArr = cityData.forecast.forecastday;\n  let weekDays = aWeekFromNow();\n  for (let i = 0; i < 7; i++) {\n    // DATE\n    const date = document.querySelector(`.end-date-${i}`);\n    date.textContent = dataArr[i].date.slice(8, 10);\n    // DAY\n    const day = document.querySelector(`.end-day-${i}`);\n    day.textContent = weekDays[i].slice(0, 3);\n    // ICON\n    let weatherCode = dataArr[i].day.condition.code;\n    let weatherIcon = weatherCodeTranslator('day', weatherCode);\n    const icon = document.querySelector(`.end-icon-${i}`);\n    icon.style.backgroundImage = `url(${weatherIcon})`;\n    // WEATHER\n    const weather = document.querySelector(`.end-weather-${i}`);\n    weather.textContent = dataArr[i].day.condition.text;\n  }\n}\nasync function checkInput(userInput) {\n  if (!userInput) {\n    return console.log('input invalid, empty');\n  } else {\n    let cityData = await tellForecast(API_KEY_WEATHER, userInput, 7);\n    fillMainBody(cityData);\n    fillEndBody(cityData);\n  }\n}\nasync function fillSidebar(cityArray) {\n  for (let i = 0; i < cityArray.length; i++) {\n    const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);\n    // CITY\n    const sideCity = document.querySelector(`.side-city-${i}`);\n    sideCity.textContent = data.location.name;\n    // COUNTRY\n    const sideCountry = document.querySelector(`.side-country-${i}`);\n    sideCountry.textContent = data.location.country;\n    // ICON\n    let localTime = dayOrNight(extractTime(data.location.localtime));\n    let weatherCode = data.current.condition.code;\n    let weatherIcon = weatherCodeTranslator(localTime, weatherCode);\n    const sideIcon = document.querySelector(`.side-icon-${i}`);\n    sideIcon.style.backgroundImage = `url(${weatherIcon})`;\n    // TEMPERTATURE CELCIUS\n    const sideTempC = document.querySelector(`.side-temp-c-${i}`);\n    sideTempC.textContent = `${data.current.temp_c} °C`;\n    // TEMPERTATURE FAHRENHEIT\n    const sideTempF = document.querySelector(`.side-temp-f-${i}`, 'hidden');\n    sideTempF.textContent = `${data.current.temp_f} °F`;\n    // LOCAL TIME\n    const sideTime = document.querySelector(`.side-time-${i}`);\n    sideTime.textContent = dayMaker(data.location.localtime);\n    // ANIMATION\n    animateElement(`.side-container-${i}`, 'slide-in', 'once')\n  }\n  animateElement('.sidebar-end', 'slide-in', 'once')\n}\n\nconst firstLoad = async () => {\n  let userLoc = await userFrom(API_KEY_WEATHER, 'auto:ip');\n  await checkInput(userLoc);\n  animateElement('.main-icon', 'levitate', 'infinity');\n  animateElement('.day-container', 'slide-in', 'once');\n  fillSidebar(sideCities(_worlds__WEBPACK_IMPORTED_MODULE_4__.worlds));\n};\n\n// SEARCH INPUT\nconst form = document.querySelector('form');\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  await checkInput(document.querySelector('#search').value);\n  animateElement('.main-container', 'shake', 'once');\n  animateElement('.day-container', 'slide-in', 'once');\n});\n\n// TEMPERATURE SCALE\nconst tempButton = document.querySelector('.temperature-button');\ntempButton.addEventListener('click', () => {\n  if (tempButton.textContent === 'Celcius') {\n    tempButton.textContent = 'Fahrenheit';\n  } else {\n    tempButton.textContent = 'Celcius';\n  }\n  // TEMP VALUE (MAIN BODY)\n  const temps = document.querySelectorAll('.temp');\n  temps.forEach((temp) => temp.classList.toggle('hidden'));\n  // TEMP ICON (MAIN BODY)\n  const iconTemps = document.querySelectorAll('.temp-icon');\n  iconTemps.forEach((iconTemp) => iconTemp.classList.toggle('hidden'));\n  // TEMP VALUES (SIDEBAR)\n  const sideTemps = document.querySelectorAll('.side-temp');\n  sideTemps.forEach((sideTemp) => sideTemp.classList.toggle('hidden'));\n});\n// MEASUREMT SYSTEM\nconst sysButton = document.querySelector('.sys-measure-button');\nconst windMeasures = document.querySelectorAll('.wind');\nsysButton.addEventListener('click', () => {\n  if (sysButton.textContent === 'Metric') {\n    sysButton.textContent = 'Imperial';\n  } else {\n    sysButton.textContent = 'Metric';\n  }\n  windMeasures.forEach((measure) => measure.classList.toggle('hidden'));\n});\n\nfirstLoad();\n\n\n//# sourceURL=webpack://weath/./src/index.js?");

/***/ }),

/***/ "./src/worlds.js":
/*!***********************!*\
  !*** ./src/worlds.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   worlds: () => (/* binding */ worlds)\n/* harmony export */ });\nconst worlds = {\n  africanCities: [\n    'Cairo',\n    'Lagos',\n    'Kinshasa',\n    'Johannesburg',\n    'Nairobi',\n    'Addis Ababa',\n    'Accra',\n    'Dar es Salaam',\n    'Abuja',\n    'Casablanca',\n  ],\n  asianCities: [\n    'Tokyo',\n    'Shanghai',\n    'Jakarta',\n    'Delhi',\n    'Seoul',\n    'Bangkok',\n    'Istanbul',\n    'Tehran',\n    'Mumbai',\n    'Beijing',\n  ],\n  europeanCities: [\n    'London',\n    'Paris',\n    'Berlin',\n    'Madrid',\n    'Rome',\n    'Athens',\n    'Amsterdam',\n    'Oslo',\n    'Dublin',\n    'Stockholm',\n  ],\n  northAmericanCities: [\n    'New York',\n    'Los Angeles',\n    'Toronto',\n    'Mexico',\n    'Chicago',\n    'Houston',\n    'Vancouver',\n    'Montreal',\n    'Philadelphia',\n    'Calgary',\n  ],\n  southAmericanCities: [\n    'São Paulo',\n    'Buenos Aires',\n    'Rio de Janeiro',\n    'Lima',\n    'Bogotá',\n    'Santiago',\n    'Caracas',\n    'Quito',\n    'La Paz',\n    'Asunción',\n  ],\n  australiaOceaniaCities: [\n    'Sydney',\n    'Melbourne',\n    'Auckland',\n    'Brisbane',\n    'Perth',\n    'Adelaide',\n    'Honolulu',\n    'Suva',\n    'Port Moresby',\n    'Noumea',\n  ],\n};\n\n\n\n\n//# sourceURL=webpack://weath/./src/worlds.js?");

/***/ }),

/***/ "./src/fonts/Poppins-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/Poppins-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdb29a5d7ccf57ff05a3.ttf\";\n\n//# sourceURL=webpack://weath/./src/fonts/Poppins-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Light.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Poppins-Light.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7641a0f76ca9ef6c252c.ttf\";\n\n//# sourceURL=webpack://weath/./src/fonts/Poppins-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Medium.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Poppins-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"673ed42382ab264e0bf5.ttf\";\n\n//# sourceURL=webpack://weath/./src/fonts/Poppins-Medium.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;