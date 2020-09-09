"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/main.js?{"page":"pages%2Fdetail-video%2FsubNVue%2Fvideo"} ***!
  \***************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-video/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/detail-video/subNVue/video'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-lg": {
    "borderRadius": "14rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-top-lg": {
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-bottom-lg": {
    "borderBottomRightRadius": "14rpx",
    "borderBottomLeftRadius": "14rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "text-main": {
    "color": "#FB7299"
  },
  "text-main-hover": {
    "color": "#FB85A7"
  },
  "text-main-disabled": {
    "color": "#FB85A7"
  },
  "bg-main": {
    "backgroundColor": "#FB7299"
  },
  "bg-main-hover": {
    "backgroundColor": "#FB85A7"
  },
  "bg-main-disabled": {
    "backgroundColor": "#FB85A7"
  },
  "border-main": {
    "borderColor": "#FB7299"
  },
  "line-h": {
    "lineHeight": 1.2
  },
  "f-divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F4"
  }
}

/***/ }),
/* 4 */
/*!*******************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=466e0921&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"21dec0aa\",\n  false,\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixvTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmUwOTIxJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYLjIuNy4xNC4yMDIwMDYxOC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyMWRlYzBhYVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=466e0921&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["bg-dark"] },
    [
      _c(
        "u-video",
        {
          ref: "video",
          staticStyle: { width: "750rpx", height: "225px" },
          attrs: {
            id: "video",
            src: _vm.src,
            poster: _vm.poster,
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            enableProgressGesture: false
          },
          on: {
            fullscreenchange: _vm.fullscreenchange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.isplay = true
            },
            pause: function($event) {
              _vm.isplay = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoBox
                },
                [
                  _c("view", {
                    staticClass: [
                      "position-absolute",
                      "left-0",
                      "right-0",
                      "top-0",
                      "bottom-0"
                    ],
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd
                    }
                  }),
                  _vm.fullScreenStatus &&
                  (_vm.showStatusBarStatus || _vm.lockScreenStatus)
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          staticStyle: { width: "80px" }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "rounded",
                                "flex",
                                "align-center",
                                "justify-center"
                              ],
                              staticStyle: {
                                width: "60px",
                                height: "60px",
                                backgroundColor: "rgba(0,0,0,0.4)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["iconfont"],
                                  class: _vm.lockScreenStatus
                                    ? "text-main"
                                    : "text-white"
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showToastStatus
                    ? _c(
                        "view",
                        {
                          staticClass: ["p-2", "rounded"],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.3)" }
                        },
                        [
                          _vm.toast.type === "progress"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                      "/" +
                                      _vm._s(_vm._f("formatTime")(_vm.duration))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.toast.type === "msg"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [_vm._v(_vm._s(_vm.toast.msg))]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-top",
                            "position-absolute",
                            "top-0",
                            "left-0",
                            "right-0",
                            "flex",
                            "justify-between",
                            "align-center"
                          ],
                          staticStyle: { height: "44px" }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [
                              _c(
                                "view",
                                { staticClass: ["flex", "align-center"] },
                                [
                                  _c("f-icon-btn", {
                                    attrs: { icon: "\ue612" },
                                    on: { click: _vm.fullOrExitScreen }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["flex", "align-center", "px-2"]
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: {
                                        fontSize: "15px",
                                        lines: "1"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.title))]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-bottom",
                            "position-absolute",
                            "bottom-0",
                            "left-0",
                            "right-0"
                          ]
                        },
                        [
                          _c("view", { staticStyle: { height: "88px" } }, [
                            _c(
                              "view",
                              {
                                staticClass: ["flex-1"],
                                staticStyle: {
                                  paddingLeft: "15px",
                                  paddingRight: "15px"
                                }
                              },
                              [
                                _c("f-slider", {
                                  attrs: {
                                    duration: _vm.duration,
                                    currentTime: _vm.currentTime
                                  },
                                  on: {
                                    change: _vm.sliderChange,
                                    update: _vm.sliderUpdate
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "view",
                              {
                                staticClass: [
                                  "flex",
                                  "align-stretch",
                                  "justify-between"
                                ],
                                staticStyle: { height: "44px" }
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: ["flex"] },
                                  [
                                    !_vm.isplay
                                      ? _c("f-icon-btn", {
                                          attrs: { icon: "\ue63a", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        })
                                      : _c("f-icon-btn", {
                                          attrs: { icon: "\ue605", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        }),
                                    _c(
                                      "view",
                                      {
                                        staticClass: [
                                          "flex",
                                          "align-center",
                                          "justify-center"
                                        ],
                                        staticStyle: { width: "80px" }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: [
                                              "font-sm",
                                              "text-white"
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  _vm.currentTime
                                                )
                                              ) +
                                                "/" +
                                                _vm._s(
                                                  _vm._f("formatTime")(
                                                    _vm.duration
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _c("f-icon-btn", {
                                      attrs: { icon: "\ue697", size: "22" }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", { staticClass: ["flex"] }, [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("speed")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v(_vm._s(_vm.rate) + "X")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("quality")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatQuality")(
                                                _vm.quality
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("video")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v("选集")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm.fullScreenStatus && _vm.showDrawer
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "flex-column"
                          ],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                        },
                        [
                          _vm.drawerType === "speed"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.rateList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeRate(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item === _vm.rate
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm.drawerType === "video"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "300px" }
                                },
                                [
                                  _c(
                                    "scroll-view",
                                    {
                                      staticClass: ["flex-1", "p-2"],
                                      attrs: { scrollY: "true" }
                                    },
                                    _vm._l(_vm.videoList, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "view",
                                        {
                                          key: index,
                                          staticClass: [
                                            "border",
                                            "p-2",
                                            "flex",
                                            "rounded",
                                            "mb-2"
                                          ],
                                          on: {
                                            click: function($event) {
                                              _vm.changeVideo(item, index)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["text-white"],
                                              class:
                                                _vm.videoIndex === index
                                                  ? "text-main"
                                                  : "text-white",
                                              staticStyle: {
                                                fontSize: "14px",
                                                lines: "1"
                                              }
                                            },
                                            [_vm._v(_vm._s(item.title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.qualityList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeQuality(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item.value === _vm.quality
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-top",
                "position-fixed",
                "top-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c("view", { style: "height: " + _vm.statusBarHeight + "px;" }),
              _c(
                "view",
                {
                  staticClass: ["flex", "align-center"],
                  staticStyle: { height: "44px" }
                },
                [
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue612" },
                    on: { click: _vm.backPage }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-bottom",
                "position-fixed",
                "bottom-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex", "align-stretch"],
                  staticStyle: { height: "44px" }
                },
                [
                  !_vm.isplay
                    ? _c("f-icon-btn", {
                        attrs: { icon: "\ue63a", size: "22" },
                        on: { click: _vm.playOrPause }
                      })
                    : _c("f-icon-btn", {
                        attrs: { icon: "\ue605", size: "22" },
                        on: { click: _vm.playOrPause }
                      }),
                  _c(
                    "view",
                    { staticClass: ["flex-1"] },
                    [
                      _c("f-slider", {
                        attrs: {
                          duration: _vm.duration,
                          currentTime: _vm.currentTime
                        },
                        on: {
                          change: _vm.sliderChange,
                          update: _vm.sliderUpdate
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "align-center", "justify-center"],
                      staticStyle: { width: "80px" }
                    },
                    [
                      _c("u-text", { staticClass: ["font-sm", "text-white"] }, [
                        _vm._v(
                          _vm._s(_vm._f("formatTime")(_vm.currentTime)) +
                            "/" +
                            _vm._s(_vm._f("formatTime")(_vm.duration))
                        )
                      ])
                    ]
                  ),
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue800", size: "22" },
                    on: { click: _vm.fullOrExitScreen }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*******************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQiwwa0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYLjIuNy4xNC4yMDIwMDYxOC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYLjIuNy4xNC4yMDIwMDYxOC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fIconBtn = _interopRequireDefault(__webpack_require__(/*! ./components/f-icon-btn.vue */ 9));\nvar _fSlider = _interopRequireDefault(__webpack_require__(/*! ./components/f-slider.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/*const demoList=[{\n\tindex:0,\n\ttitle:'黄龄-《繁华梦》',\n\tlist:[{\n\t\tname:\"标清\",\n\t\tvalue:\"SD\",\n\t\turl:\"/static/demo/mv/03.mp4\"\n\t},{\n\t\tname:\"高清\",\n\t\tvalue:\"HD\",\n\t\turl:\"/static/demo/mv/02.mp4\"\n\t},{\n\t\tname:\"超清\",\n\t\tvalue:\"FHD\",\n\t\turl:\"/static/demo/mv/01.mp4\"\n\t}],\n},{\n\tindex:1,\n\ttitle:'黄龄-《风月》',\n\tlist:[{\n\t\tname:\"标清\",\n\t\tvalue:\"SD\",\n\t\turl:\"/static/demo/mv/06.mp4\"\n\t},{\n\t\tname:\"高清\",\n\t\tvalue:\"HD\",\n\t\turl:\"/static/demo/mv/05.mp4\"\n\t},{\n\t\tname:\"超清\",\n\t\tvalue:\"FHD\",\n\t\turl:\"/static/demo/mv/04.mp4\"\n\t}],\n}]*/var d = weex.requireModule('dom');var videoCTX = null;var showToastTimer = null;var timer = null;var _default = { components: { fIconBtn: _fIconBtn.default, fSlider: _fSlider.default }, data: function data() {return { title: \"\", src: \"/static/demo/mv/01.mp4\", //视频地址\n      poster: \"/static/demo/list2/01.jpg\", //视频封面\n      isplay: false, // 播放状态\n      statusBarHeight: 0, //顶部高度\n      currentTime: 0, //当前时间\n      duration: 0, //总时长\n      windowWidth: 0, windowHeight: 0, fullScreenStatus: false, //全屏判断\n      showToastStatus: false, //时间提示\n      toast: { type: \"msg\", msg: \"提示\" }, showStatusBarStatus: true, //显隐控制条\n      oldTouchs: {}, //点击事件\n      oldValue: {}, dbCount: 0, touchType: null, //拖拽事件\n      platform: \"android\", showDrawer: false, //弹框\n      drawerType: \"speed\", rate: \"1.0\", // 当前速度\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'], // 速度选择\n      videoIndex: 0, //选集\n      videoList: [], quality: \"HD\", //清晰度\n      lockScreenStatus: false //锁屏状态\n    };}, created: function created() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight;this.windowWidth = res.windowWidth;this.platform = res.platform; // 引入图标\n    d.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('/static/iconfont.ttf')\" });uni.$on('video', this.handleVideoEvent); //测试清晰度测试数据\n    //this.videoList = demoList\n  }, destroyed: function destroyed() {uni.$off('video', this.handleVideoEvent);}, mounted: function mounted() {videoCTX = this.$refs.video;}, computed: { //全屏判断\n    videoBox: function videoBox() {return this.fullScreenStatus ? \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \";\") : 'width:750rpx;height:225px;';}, //点击事件\n    modalStyle: function modalStyle() {var top = this.statusBarHeight + 44;return \"top:\".concat(top, \"px;bottom:44px;\");}, //切换清晰度\n    qualityList: function qualityList() {return this.videoList[this.videoIndex] ? this.videoList[this.videoIndex].list : [];} }, methods: { //传递数据\n    handleVideoEvent: function handleVideoEvent(e) {switch (e.event) {case 'init':this.videoIndex = e.params.activeIndex;this.videoList = e.params.videos.map(function (item) {return { index: 0, title: item.title, list: [{ name: \"高清\", value: \"HD\", url: item.url }] };});this.poster = e.params.poster;var v = this.videoList[this.videoIndex];if (v) {this.src = v.list[v.index].url;}break;case 'change':videoCTX.pause();this.videoIndex = e.params.activeIndex;var o = this.videoList[this.videoIndex];if (o) {this.src = o.list[o.index].url;}setTimeout(function () {videoCTX.play();}, 300);break;}}, // 锁屏或解除锁屏\n    lockScreen: function lockScreen() {this.lockScreenStatus = !this.lockScreenStatus;if (this.lockScreenStatus) {this.hideStatusBar();} else {this.showStatusBar();}}, // 修改清晰度\n    changeQuality: function changeQuality(item) {videoCTX.pause();if (!item.url) {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}this.src = item.url;this.quality = item.value;uni.showToast({ title: '清晰度切换为：' + item.name, icon: 'none' });setTimeout(function () {videoCTX.play();}, 300);}, // 选集\n    changeVideo: function changeVideo(item, index) {var _this = this;this.videoIndex = index;videoCTX.stop();var list = this.videoList[index].list;var i = list.findIndex(function (v) {return v.value === _this.quality;});if (i === -1) {if (list.length > 0) {this.src = list[0].url;} else {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}} else {this.src = list[i].url;}uni.showToast({ title: '切换到：' + item.title, icon: 'none' });setTimeout(function () {videoCTX.seek(0);videoCTX.play();}, 300);this.showDrawer = false;}, // 修改播放速度\n    changeRate: function changeRate(item) {this.rate = item;videoCTX.playbackRate(this.rate);uni.showToast({ title: '当前速度修改为：' + this.rate, icon: 'none' });this.showDrawer = false;}, // 弹框\n    openDrawer: function openDrawer(type) {this.drawerType = type;this.showDrawer = true;}, // 全屏/退出全屏\n    fullOrExitScreen: function fullOrExitScreen() {if (this.fullScreenStatus) {videoCTX.exitFullScreen();} else {videoCTX.requestFullScreen();}}, // 显示或隐藏控制条\n    showOrHideStatusBar: function showOrHideStatusBar() {this.showStatusBarStatus ? this.hideStatusBar() : this.showStatusBar();}, // 显示控制条\n    showStatusBar: function showStatusBar() {var _this2 = this;this.showStatusBarStatus = true;timer = timer ? clearTimeout(timer) : null;timer = setTimeout(function () {_this2.hideStatusBar();timer = null;}, 3000);}, // 隐藏控制条\n    hideStatusBar: function hideStatusBar() {this.showStatusBarStatus = false;\n    },\n    //返回上一页\n    backPage: function backPage() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    // 播放/暂停\n    playOrPause: function playOrPause() {\n      this.showToast({\n        msg: this.isplay ? '暂停' : '播放' });\n\n      if (this.isplay) {\n        videoCTX.pause();\n      } else {\n        this.showStatusBar();\n        videoCTX.play();\n      }\n    },\n    //监听全屏事件\n    fullscreenchange: function fullscreenchange(e) {\n      this.fullScreenStatus = e.detail.fullScreen;\n      if (!this.fullScreenStatus) {\n        this.lockScreenStatus = false;\n      }\n    },\n    //监听播放进度\n    timeupdate: function timeupdate(e) {\n      if (!this.showToastStatus) {\n        this.currentTime = parseInt(e.detail.currentTime);\n      }\n      this.duration = parseInt(e.detail.duration);\n    },\n    // 进度条变化\n    sliderChange: function sliderChange(e) {\n      videoCTX.seek(e);\n      this.showToastStatus = false;\n      videoCTX.play();\n    },\n    //提示框时间变化\n    sliderUpdate: function sliderUpdate(e) {\n      this.showStatusBar();\n      videoCTX.pause();\n      this.showToastStatus = true;\n      this.showToast({\n        type: \"progress\",\n        autoClose: false });\n\n      this.currentTime = e;\n    },\n    //提示框信息切换\n    showToast: function showToast(options) {var _this3 = this;\n      this.toast.type = options.type || 'msg';\n      this.toast.msg = options.msg || '提示';\n      this.showToastStatus = true;\n      if (options.autoClose !== false) {\n        if (showToastTimer) {\n          clearTimeout(showToastTimer);\n        }\n        showToastTimer = setTimeout(function () {\n          _this3.showToastStatus = false;\n          showToastTimer = null;\n        }, 500);\n      }\n    },\n    //自定义单双击事件\n    touchStart: function touchStart(e) {\n      this.oldTouchs = e.changedTouches[0];\n\n      this.oldValue = {\n        currentTime: this.currentTime };\n\n    },\n    //拖拽进度情况\n    touchMove: function touchMove(e) {\n      if (this.lockScreenStatus) return;\n      var newTouchs = e.changedTouches[0];\n      if (!this.touchType) {\n        this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'currentTime' : null;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          this.touchType = Math.abs(newTouchs.pageY - this.oldTouchs.pageY) > 20 ? 'currentTime' : null;\n        }\n        if (this.touchType === 'currentTime') {\n          videoCTX.pause();\n        }\n      } else if (this.touchType === 'currentTime') {\n        this.showToast({\n          type: \"progress\",\n          autoClose: false });\n\n        this.showStatusBar();\n        var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          newCurrentTime = (newTouchs.pageY - this.oldTouchs.pageY) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        }\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;\n        newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;\n        this.currentTime = newCurrentTime;\n      }\n    },\n    touchEnd: function touchEnd(e) {var _this4 = this;\n      if (this.lockScreenStatus) return;\n      if (this.touchType === 'currentTime') {\n        videoCTX.seek(this.currentTime);\n        videoCTX.play();\n      } else {\n        if (this.dbCount === 1 || this.dbCount === 0) {\n          this.dbCount++;\n        }\n        if (this.dbCount > 0) {\n          setTimeout(function () {\n            // 单击\n            if (_this4.dbCount === 1) {\n              _this4.showOrHideStatusBar();\n              _this4.showDrawer = false;\n            }\n            // 双击\n            if (_this4.dbCount === 2) {\n              _this4.playOrPause();\n            }\n            _this4.dbCount = 0;\n          }, 250);\n        }\n      }\n      this.touchType = null;\n      this.showToastStatus = false;\n    } },\n\n  filters: {\n    //秒数转时间格式\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    },\n    //清晰度切换\n    formatQuality: function formatQuality(val) {\n      var arr = {\n        SD: \"标清\",\n        HD: \"高清\",\n        FHD: \"超清\" };\n\n      return arr[val];\n    } },\n\n  //依赖注入\n  provide: function provide() {\n    return {\n      v: this };\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlMQTtBQUNBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUNBLGtDQUNBLG9CQUNBLDBCQUNBLGlCLGVBSUEsRUFDQSxjQUNBLDJCQURBLEVBRUEseUJBRkEsRUFEQSxFQUtBLElBTEEsa0JBS0EsQ0FDQSxTQUNBLFNBREEsRUFFQSw2QkFGQSxFQUVBO0FBQ0EseUNBSEEsRUFHQTtBQUNBLG1CQUpBLEVBSUE7QUFDQSx3QkFMQSxFQUtBO0FBQ0Esb0JBTkEsRUFNQTtBQUNBLGlCQVBBLEVBT0E7QUFDQSxvQkFSQSxFQVNBLGVBVEEsRUFVQSx1QkFWQSxFQVVBO0FBQ0EsNEJBWEEsRUFXQTtBQUNBLGVBQ0EsV0FEQSxFQUVBLFNBRkEsRUFaQSxFQWdCQSx5QkFoQkEsRUFnQkE7QUFDQSxtQkFqQkEsRUFpQkE7QUFDQSxrQkFsQkEsRUFtQkEsVUFuQkEsRUFvQkEsZUFwQkEsRUFvQkE7QUFDQSx5QkFyQkEsRUFzQkEsaUJBdEJBLEVBc0JBO0FBQ0EseUJBdkJBLEVBd0JBLFdBeEJBLEVBd0JBO0FBQ0EsMkRBekJBLEVBeUJBO0FBQ0EsbUJBMUJBLEVBMEJBO0FBQ0EsbUJBM0JBLEVBNEJBLGFBNUJBLEVBNEJBO0FBQ0EsNkJBN0JBLENBNkJBO0FBN0JBLE1BK0JBLENBckNBLEVBc0NBLE9BdENBLHFCQXNDQSxDQUNBLGtDQUNBLDJDQUNBLHFDQUNBLG1DQUNBLDZCQUxBLENBTUE7QUFDQSw0QkFDQSx3QkFEQSxFQUVBLG9DQUZBLElBS0Esd0NBWkEsQ0FjQTtBQUNBO0FBQ0EsR0F0REEsRUF1REEsU0F2REEsdUJBdURBLENBQ0EseUNBQ0EsQ0F6REEsRUEwREEsT0ExREEscUJBMERBLENBQ0EsNEJBQ0EsQ0E1REEsRUE2REEsWUFDQTtBQUNBLFlBRkEsc0JBRUEsQ0FDQSw2SUFDQSxDQUpBLEVBS0E7QUFDQSxjQU5BLHdCQU1BLENBQ0Esb0NBQ0EsNkNBQ0EsQ0FUQSxFQVVBO0FBQ0EsZUFYQSx5QkFXQSxDQUNBLG1GQUNBLENBYkEsRUE3REEsRUE0RUEsV0FDQTtBQUNBLG9CQUZBLDRCQUVBLENBRkEsRUFFQSxDQUNBLGtCQUNBLFlBQ0EsdUNBQ0Esc0RBQ0EsU0FDQSxRQURBLEVBRUEsaUJBRkEsRUFHQSxTQUNBLFVBREEsRUFFQSxXQUZBLEVBR0EsYUFIQSxHQUhBLEdBU0EsQ0FWQSxFQVdBLDhCQUNBLHdDQUNBLFFBQ0EsK0JBQ0EsQ0FDQSxNQUNBLGNBQ0EsaUJBQ0EsdUNBQ0Esd0NBQ0EsUUFDQSwrQkFDQSxDQUNBLHdCQUNBLGdCQUNBLENBRkEsRUFFQSxHQUZBLEVBR0EsTUE5QkEsQ0FnQ0EsQ0FuQ0EsRUFvQ0E7QUFDQSxjQXJDQSx3QkFxQ0EsQ0FDQSwrQ0FDQSw0QkFDQSxxQkFDQSxDQUZBLE1BRUEsQ0FDQSxxQkFDQSxDQUNBLENBNUNBLEVBNkNBO0FBQ0EsaUJBOUNBLHlCQThDQSxJQTlDQSxFQThDQSxDQUNBLGlCQUNBLGdCQUNBLHVCQUNBLGdCQURBLEVBRUEsWUFGQSxJQUlBLENBQ0Esb0JBQ0EsMEJBQ0EsZ0JBQ0EsNEJBREEsRUFFQSxZQUZBLElBSUEsd0JBQ0EsZ0JBQ0EsQ0FGQSxFQUVBLEdBRkEsRUFHQSxDQS9EQSxFQWdFQTtBQUNBLGVBakVBLHVCQWlFQSxJQWpFQSxFQWlFQSxLQWpFQSxFQWlFQSxrQkFDQSx3QkFDQSxnQkFFQSxzQ0FDQSx5RUFDQSxlQUNBLHNCQUNBLHVCQUNBLENBRkEsTUFFQSxDQUNBLHVCQUNBLGdCQURBLEVBRUEsWUFGQSxJQUlBLENBQ0EsQ0FUQSxNQVNBLENBQ0EsdUJBQ0EsQ0FFQSxnQkFDQSwwQkFEQSxFQUVBLFlBRkEsSUFLQSx3QkFDQSxpQkFDQSxnQkFDQSxDQUhBLEVBR0EsR0FIQSxFQUtBLHdCQUNBLENBL0ZBLEVBZ0dBO0FBQ0EsY0FqR0Esc0JBaUdBLElBakdBLEVBaUdBLENBQ0EsaUJBQ0EsaUNBQ0EsZ0JBQ0EsNkJBREEsRUFFQSxZQUZBLElBSUEsd0JBQ0EsQ0F6R0EsRUEwR0E7QUFDQSxjQTNHQSxzQkEyR0EsSUEzR0EsRUEyR0EsQ0FDQSx1QkFDQSx1QkFDQSxDQTlHQSxFQStHQTtBQUNBLG9CQWhIQSw4QkFnSEEsQ0FDQSw0QkFDQSwwQkFDQSxDQUZBLE1BRUEsQ0FDQSw2QkFDQSxDQUNBLENBdEhBLEVBdUhBO0FBQ0EsdUJBeEhBLGlDQXdIQSxDQUNBLHVFQUNBLENBMUhBLEVBMkhBO0FBQ0EsaUJBNUhBLDJCQTRIQSxtQkFDQSxnQ0FDQSwyQ0FDQSxnQ0FDQSx1QkFDQSxhQUNBLENBSEEsRUFHQSxJQUhBLEVBSUEsQ0FuSUEsRUFvSUE7QUFDQSxpQkFySUEsMkJBcUlBLENBQ0E7QUFDQSxLQXZJQTtBQXdJQTtBQUNBLFlBeklBLHNCQXlJQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0E3SUE7QUE4SUE7QUFDQSxlQS9JQSx5QkErSUE7QUFDQTtBQUNBLHNDQURBOztBQUdBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpKQTtBQTBKQTtBQUNBLG9CQTNKQSw0QkEySkEsQ0EzSkEsRUEySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEtBO0FBaUtBO0FBQ0EsY0FsS0Esc0JBa0tBLENBbEtBLEVBa0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZLQTtBQXdLQTtBQUNBLGdCQXpLQSx3QkF5S0EsQ0F6S0EsRUF5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdLQTtBQThLQTtBQUNBLGdCQS9LQSx3QkErS0EsQ0EvS0EsRUErS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSxLQXhMQTtBQXlMQTtBQUNBLGFBMUxBLHFCQTBMQSxPQTFMQSxFQTBMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxFQUdBLEdBSEE7QUFJQTtBQUNBLEtBdk1BO0FBd01BO0FBQ0EsY0F6TUEsc0JBeU1BLENBek1BLEVBeU1BO0FBQ0E7O0FBRUE7QUFDQSxxQ0FEQTs7QUFHQSxLQS9NQTtBQWdOQTtBQUNBLGFBak5BLHFCQWlOQSxDQWpOQSxFQWlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMU9BO0FBMk9BLFlBM09BLG9CQTJPQSxDQTNPQSxFQTJPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FYQSxFQVdBLEdBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBclFBLEVBNUVBOztBQW1WQTtBQUNBO0FBQ0EsY0FGQSxzQkFFQSxNQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQTtBQUNBLGlCQVRBLHlCQVNBLEdBVEEsRUFTQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxnQkFGQTtBQUdBLGlCQUhBOztBQUtBO0FBQ0EsS0FoQkEsRUFuVkE7O0FBcVdBO0FBQ0EsU0F0V0EscUJBc1dBO0FBQ0E7QUFDQSxhQURBOztBQUdBLEdBMVdBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJiZy1kYXJrXCI+XG5cdFx0PHZpZGVvIGlkPVwidmlkZW9cIiByZWY9XCJ2aWRlb1wiXHJcblx0XHQ6c3JjPVwic3JjXCJcclxuXHRcdDpwb3N0ZXI9XCJwb3N0ZXJcIiBcclxuXHRcdDpjb250cm9scz1cImZhbHNlXCJcclxuXHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCJcclxuXHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIiBcclxuXHRcdDpzaG93LXByb2dyZXNzPVwiZmFsc2VcIiBcclxuXHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgXHJcblx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiAyMjVweDtcIlxyXG5cdFx0QGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsc2NyZWVuY2hhbmdlXCJcclxuXHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiXHJcblx0XHRAcGxheT1cImlzcGxheSA9IHRydWVcIiBcclxuXHRcdEBwYXVzZT1cImlzcGxheSA9IGZhbHNlXCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSDmi5bmi73mmL7npLrmj5DnpLrml7bpl7QgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiA6c3R5bGU9XCJ2aWRlb0JveFwiPlxyXG5cdFx0XHRcdDwhLS0g6JKZ54mI6Ieq5a6a5LmJ5Y2V5Ye75Y+M5Ye777yM54K55Ye75pi+56S66ZqQ6JeP5o6n5Yi25p2h5LqL5Lu2IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgbGVmdC0wIHJpZ2h0LTAgdG9wLTAgYm90dG9tLTBcIiBcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoU3RhcnRcIiBAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIj48L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDkvqfovrkgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImZ1bGxTY3JlZW5TdGF0dXMgJiYgKHNob3dTdGF0dXNCYXJTdGF0dXMgfHwgbG9ja1NjcmVlblN0YXR1cylcIiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZGVkIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1wiIEBjbGljaz1cImxvY2tTY3JlZW5cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIDpjbGFzcz1cImxvY2tTY3JlZW5TdGF0dXMgPyAndGV4dC1tYWluJyA6ICd0ZXh0LXdoaXRlJ1wiPiYjeGU2MjA7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOaPkOekuuahhiAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1RvYXN0U3RhdHVzXCIgY2xhc3M9XCJwLTIgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInRvYXN0LnR5cGUgPT09ICdwcm9ncmVzcydcIiBjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInRvYXN0LnR5cGUgPT09ICdtc2cnXCIgY2xhc3M9XCJmb250IHRleHQtd2hpdGVcIj57e3RvYXN0Lm1zZ319PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWFqOWxj+aOp+WItuadoSAtLT5cclxuXHRcdFx0XHQ8IS0tIOmhtumDqOmAgOWHuuWFqOWxjyAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJiBmdWxsU2NyZWVuU3RhdHVzXCIgY2xhc3M9XCJ2aWRlby1iZy10b3AgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW5cIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBweC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7bGluZXM6IDE7XCI+e3sgdGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5Y+z5LiK6KeS5Zu+5qCHIFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5bqV6YOoIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmIGZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInZpZGVvLWJnLWJvdHRvbSBwb3NpdGlvbi1hYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDg4cHg7XCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5pKt5pS+6L+b5bqm5p2hIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0PGYtc2xpZGVyIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOmN1cnJlbnRUaW1lPVwiY3VycmVudFRpbWVcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCIgQHVwZGF0ZT1cInNsaWRlclVwZGF0ZVwiPjwvZi1zbGlkZXI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIHYtZWxzZSA6aWNvbj1cIidcXHVlNjA1J1wiIHNpemU9XCIyMlwiIEBjbGljaz1cInBsYXlPclBhdXNlXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDmkq3mlL7ml7bplb8gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LXNtIHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5by55bmV5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTY5NydcIiBzaXplPVwiMjJcIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDosIPoioLpgJ/luqYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7cGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCIgQGNsaWNrPVwib3BlbkRyYXdlcignc3BlZWQnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIj57e3JhdGV9fVg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOiwg+iKgua4heaZsOW6piAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNDRweDtwYWRkaW5nLWxlZnQ6IDE1cHg7cGFkZGluZy1yaWdodDogMTVweDtcIiBAY2xpY2s9XCJvcGVuRHJhd2VyKCdxdWFsaXR5JylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+e3txdWFsaXR5fGZvcm1hdFF1YWxpdHl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g6LCD6IqC6YCJ6ZuGIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4O3BhZGRpbmctbGVmdDogMTVweDtwYWRkaW5nLXJpZ2h0OiAxNXB4O1wiIEBjbGljaz1cIm9wZW5EcmF3ZXIoJ3ZpZGVvJylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+6YCJ6ZuGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOW8ueahhiAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZnVsbFNjcmVlblN0YXR1cyAmJiBzaG93RHJhd2VyXCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcIj5cclxuXHRcdFx0XHRcdDwhLS0g6YCf5bqmIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cImRyYXdlclR5cGUgPT09ICdzcGVlZCdcIiBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHJhdGVMaXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlUmF0ZShpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIml0ZW0gPT09IHJhdGUgPyAndGV4dC1tYWluJyA6ICd0ZXh0LXdoaXRlJ1wiPnt7aXRlbX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOmAiembhiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cImRyYXdlclR5cGUgPT09ICd2aWRlbydcIiBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cImZsZXgtMSBwLTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvcmRlciBwLTIgZmxleCByb3VuZGVkIG1iLTJcIiBcclxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB2aWRlb0xpc3RcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJjaGFuZ2VWaWRlbyhpdGVtLGluZGV4KVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7bGluZXM6IDE7XCIgOmNsYXNzPVwidmlkZW9JbmRleCA9PT0gaW5kZXggPyAndGV4dC1tYWluJyA6ICd0ZXh0LXdoaXRlJ1wiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PCEtLSDmuIXmmbDluqYgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbHVtblwiIHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIFxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBxdWFsaXR5TGlzdFwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cImNoYW5nZVF1YWxpdHkoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJpdGVtLnZhbHVlID09PSBxdWFsaXR5ID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlkZW8+XHJcblx0XHQ8IS0tIOmdnuWFqOWxjyAtLT5cclxuXHRcdDwhLS0g6aG26YOo6L+U5ZueIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgIWZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInZpZGVvLWJnLXRvcCBwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8dmlldyA6c3R5bGU9XCInaGVpZ2h0OiAnK3N0YXR1c0JhckhlaWdodCsncHg7J1wiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2MTInXCIgQGNsaWNrPVwiYmFja1BhZ2VcIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5bqV6YOo5o6n5Yi25p2hIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgIWZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInZpZGVvLWJnLWJvdHRvbSBwb3NpdGlvbi1maXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogNDRweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiPlxyXG5cdFx0XHRcdDwhLS0g5pKt5pS+5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHQ8IS0tIOaSreaUvui/m+W6puadoSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMVwiPlxyXG5cdFx0XHRcdFx0PGYtc2xpZGVyIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOmN1cnJlbnRUaW1lPVwiY3VycmVudFRpbWVcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCIgQHVwZGF0ZT1cInNsaWRlclVwZGF0ZVwiPjwvZi1zbGlkZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5pKt5pS+5pe26ZW/IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LXNtIHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmlL7lpKflhajlsY/mjInpkq4gLS0+XHJcblx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTgwMCdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHQvKmNvbnN0IGRlbW9MaXN0PVt7XHJcblx0XHRpbmRleDowLFxyXG5cdFx0dGl0bGU6J+m7hOm+hC3jgIrnuYHljY7moqbjgIsnLFxyXG5cdFx0bGlzdDpbe1xyXG5cdFx0XHRuYW1lOlwi5qCH5riFXCIsXHJcblx0XHRcdHZhbHVlOlwiU0RcIixcclxuXHRcdFx0dXJsOlwiL3N0YXRpYy9kZW1vL212LzAzLm1wNFwiXHJcblx0XHR9LHtcclxuXHRcdFx0bmFtZTpcIumrmOa4hVwiLFxyXG5cdFx0XHR2YWx1ZTpcIkhEXCIsXHJcblx0XHRcdHVybDpcIi9zdGF0aWMvZGVtby9tdi8wMi5tcDRcIlxyXG5cdFx0fSx7XHJcblx0XHRcdG5hbWU6XCLotoXmuIVcIixcclxuXHRcdFx0dmFsdWU6XCJGSERcIixcclxuXHRcdFx0dXJsOlwiL3N0YXRpYy9kZW1vL212LzAxLm1wNFwiXHJcblx0XHR9XSxcclxuXHR9LHtcclxuXHRcdGluZGV4OjEsXHJcblx0XHR0aXRsZTon6buE6b6ELeOAiumjjuaciOOAiycsXHJcblx0XHRsaXN0Olt7XHJcblx0XHRcdG5hbWU6XCLmoIfmuIVcIixcclxuXHRcdFx0dmFsdWU6XCJTRFwiLFxyXG5cdFx0XHR1cmw6XCIvc3RhdGljL2RlbW8vbXYvMDYubXA0XCJcclxuXHRcdH0se1xyXG5cdFx0XHRuYW1lOlwi6auY5riFXCIsXHJcblx0XHRcdHZhbHVlOlwiSERcIixcclxuXHRcdFx0dXJsOlwiL3N0YXRpYy9kZW1vL212LzA1Lm1wNFwiXHJcblx0XHR9LHtcclxuXHRcdFx0bmFtZTpcIui2hea4hVwiLFxyXG5cdFx0XHR2YWx1ZTpcIkZIRFwiLFxyXG5cdFx0XHR1cmw6XCIvc3RhdGljL2RlbW8vbXYvMDQubXA0XCJcclxuXHRcdH1dLFxyXG5cdH1dKi9cclxuXHRjb25zdCBkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRsZXQgdmlkZW9DVFggPSBudWxsXHJcblx0bGV0IHNob3dUb2FzdFRpbWVyID0gbnVsbFxyXG5cdGxldCB0aW1lciA9IG51bGxcclxuXHRpbXBvcnQgZkljb25CdG4gZnJvbSAnLi9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlJztcblx0aW1wb3J0IGZTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2Ytc2xpZGVyLnZ1ZSc7XHJcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Zkljb25CdG4sXHJcblx0XHRcdGZTbGlkZXJcclxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTpcIlwiLFxyXG5cdFx0XHRcdHNyYzogXCIvc3RhdGljL2RlbW8vbXYvMDEubXA0XCIsLy/op4bpopHlnLDlnYBcclxuXHRcdFx0XHRwb3N0ZXI6XCIvc3RhdGljL2RlbW8vbGlzdDIvMDEuanBnXCIsLy/op4bpopHlsIHpnaJcclxuXHRcdFx0XHRpc3BsYXk6ZmFsc2UsLy8g5pKt5pS+54q25oCBXHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OjAsLy/pobbpg6jpq5jluqZcclxuXHRcdFx0XHRjdXJyZW50VGltZTowLC8v5b2T5YmN5pe26Ze0XHJcblx0XHRcdFx0ZHVyYXRpb246MCwvL+aAu+aXtumVv1xyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOjAsXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OjAsXHJcblx0XHRcdFx0ZnVsbFNjcmVlblN0YXR1czpmYWxzZSwvL+WFqOWxj+WIpOaWrVxyXG5cdFx0XHRcdHNob3dUb2FzdFN0YXR1czpmYWxzZSwvL+aXtumXtOaPkOekulxyXG5cdFx0XHRcdHRvYXN0OntcclxuXHRcdFx0XHRcdHR5cGU6XCJtc2dcIixcclxuXHRcdFx0XHRcdG1zZzpcIuaPkOekulwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaG93U3RhdHVzQmFyU3RhdHVzOnRydWUsLy/mmL7pmpDmjqfliLbmnaFcclxuXHRcdFx0XHRvbGRUb3VjaHM6e30sLy/ngrnlh7vkuovku7ZcclxuXHRcdFx0XHRvbGRWYWx1ZTp7fSxcclxuXHRcdFx0XHRkYkNvdW50OjAsXHJcblx0XHRcdFx0dG91Y2hUeXBlOm51bGwsLy/mi5bmi73kuovku7ZcclxuXHRcdFx0XHRwbGF0Zm9ybTpcImFuZHJvaWRcIixcclxuXHRcdFx0XHRzaG93RHJhd2VyOmZhbHNlLC8v5by55qGGXHJcblx0XHRcdFx0ZHJhd2VyVHlwZTpcInNwZWVkXCIsXHJcblx0XHRcdFx0cmF0ZTpcIjEuMFwiLC8vIOW9k+WJjemAn+W6plxyXG5cdFx0XHRcdHJhdGVMaXN0OlsnMi4wJywnMS41JywnMS4yNScsJzEuMCcsJzAuOCcsJzAuNSddLC8vIOmAn+W6pumAieaLqVxyXG5cdFx0XHRcdHZpZGVvSW5kZXg6MCwvL+mAiembhlxyXG5cdFx0XHRcdHZpZGVvTGlzdDpbXSxcclxuXHRcdFx0XHRxdWFsaXR5OlwiSERcIiwvL+a4heaZsOW6plxyXG5cdFx0XHRcdGxvY2tTY3JlZW5TdGF0dXM6ZmFsc2UsLy/plIHlsY/nirbmgIFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGxldCByZXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0dGhpcy53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGhcclxuXHRcdFx0dGhpcy5wbGF0Zm9ybSA9IHJlcy5wbGF0Zm9ybVxyXG5cdFx0XHQvLyDlvJXlhaXlm77moIdcclxuXHRcdFx0ZC5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdFx0XHQnZm9udEZhbWlseSc6IFwiaWNvbmZvbnRcIixcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJy9zdGF0aWMvaWNvbmZvbnQudHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHVuaS4kb24oJ3ZpZGVvJyx0aGlzLmhhbmRsZVZpZGVvRXZlbnQpXHJcblx0XHRcdFxyXG5cdFx0XHQvL+a1i+ivlea4heaZsOW6pua1i+ivleaVsOaNrlxyXG5cdFx0XHQvL3RoaXMudmlkZW9MaXN0ID0gZGVtb0xpc3RcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95ZWQoKSB7XHJcblx0XHRcdHVuaS4kb2ZmKCd2aWRlbycsdGhpcy5oYW5kbGVWaWRlb0V2ZW50KVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHZpZGVvQ1RYID0gdGhpcy4kcmVmcy52aWRlb1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8v5YWo5bGP5Yik5patXHJcblx0XHRcdHZpZGVvQm94KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgPyBgd2lkdGg6JHt0aGlzLndpbmRvd0hlaWdodH1weDtoZWlnaHQ6JHt0aGlzLndpbmRvd1dpZHRofTtgIDogJ3dpZHRoOjc1MHJweDtoZWlnaHQ6MjI1cHg7J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+eCueWHu+S6i+S7tlxyXG5cdFx0XHRtb2RhbFN0eWxlKCl7XHJcblx0XHRcdFx0bGV0IHRvcCA9IHRoaXMuc3RhdHVzQmFySGVpZ2h0ICsgNDRcclxuXHRcdFx0XHRyZXR1cm4gYHRvcDoke3RvcH1weDtib3R0b206NDRweDtgXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5YiH5o2i5riF5pmw5bqmXHJcblx0XHRcdHF1YWxpdHlMaXN0KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF0gPyB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdLmxpc3QgOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL+S8oOmAkuaVsOaNrlxyXG5cdFx0XHRoYW5kbGVWaWRlb0V2ZW50KGUpe1xyXG5cdFx0XHRcdHN3aXRjaCAoZS5ldmVudCl7XHJcblx0XHRcdFx0XHRjYXNlICdpbml0JzpcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9JbmRleCA9IGUucGFyYW1zLmFjdGl2ZUluZGV4XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IGUucGFyYW1zLnZpZGVvcy5tYXAoaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdGluZGV4OjAsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6aXRlbS50aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRsaXN0Olt7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOlwi6auY5riFXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTpcIkhEXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6aXRlbS51cmxcclxuXHRcdFx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMucG9zdGVyID0gZS5wYXJhbXMucG9zdGVyXHJcblx0XHRcdFx0XHRsZXQgdiA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHRcdGlmKHYpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IHYubGlzdFt2LmluZGV4XS51cmxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjaGFuZ2UnOlxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0luZGV4ID0gZS5wYXJhbXMuYWN0aXZlSW5kZXhcclxuXHRcdFx0XHRcdGxldCBvID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdFx0aWYobyl7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3JjID0gby5saXN0W28uaW5kZXhdLnVybFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmUgeWxj+aIluino+mZpOmUgeWxj1xyXG5cdFx0XHRsb2NrU2NyZWVuKCl7XHJcblx0XHRcdFx0dGhpcy5sb2NrU2NyZWVuU3RhdHVzID0gIXRoaXMubG9ja1NjcmVlblN0YXR1c1xyXG5cdFx0XHRcdGlmKHRoaXMubG9ja1NjcmVlblN0YXR1cyl7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55riF5pmw5bqmXHJcblx0XHRcdGNoYW5nZVF1YWxpdHkoaXRlbSl7XHJcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdGlmKCFpdGVtLnVybCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zcmMgPSBpdGVtLnVybFxyXG5cdFx0XHRcdHRoaXMucXVhbGl0eSA9IGl0ZW0udmFsdWVcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5riF5pmw5bqm5YiH5o2i5Li677yaJytpdGVtLm5hbWUsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHR9LDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ6ZuGXHJcblx0XHRcdGNoYW5nZVZpZGVvKGl0ZW0saW5kZXgpe1xyXG5cdFx0XHRcdHRoaXMudmlkZW9JbmRleCA9IGluZGV4XHJcblx0XHRcdFx0dmlkZW9DVFguc3RvcCgpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGxpc3QgPSB0aGlzLnZpZGVvTGlzdFtpbmRleF0ubGlzdFxyXG5cdFx0XHRcdGxldCBpID0gbGlzdC5maW5kSW5kZXgodj0+di52YWx1ZSA9PT0gdGhpcy5xdWFsaXR5KVxyXG5cdFx0XHRcdGlmKGkgPT09IC0xKXtcclxuXHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3JjID0gbGlzdFswXS51cmxcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+inhumikemTvuaOpeS4jeWtmOWcqCcsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNyYyA9IGxpc3RbaV0udXJsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliIfmjaLliLDvvJonKyBpdGVtLnRpdGxlLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguc2VlaygwKVxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblx0XHRcdFx0fSwzMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55pKt5pS+6YCf5bqmXHJcblx0XHRcdGNoYW5nZVJhdGUoaXRlbSl7XHJcblx0XHRcdFx0dGhpcy5yYXRlID0gaXRlbVxyXG5cdFx0XHRcdHZpZGVvQ1RYLnBsYXliYWNrUmF0ZSh0aGlzLnJhdGUpXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+W9k+WJjemAn+W6puS/ruaUueS4uu+8micrdGhpcy5yYXRlLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5by55qGGXHJcblx0XHRcdG9wZW5EcmF3ZXIodHlwZSl7XHJcblx0XHRcdFx0dGhpcy5kcmF3ZXJUeXBlID0gdHlwZVxyXG5cdFx0XHRcdHRoaXMuc2hvd0RyYXdlciA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWo5bGPL+mAgOWHuuWFqOWxj1xyXG5cdFx0XHRmdWxsT3JFeGl0U2NyZWVuKCl7XHJcblx0XHRcdFx0aWYodGhpcy5mdWxsU2NyZWVuU3RhdHVzKXtcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLmV4aXRGdWxsU2NyZWVuKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmlkZW9DVFgucmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65oiW6ZqQ6JeP5o6n5Yi25p2hXHJcblx0XHRcdHNob3dPckhpZGVTdGF0dXNCYXIoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPyB0aGlzLmhpZGVTdGF0dXNCYXIoKSA6IHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuaOp+WItuadoVxyXG5cdFx0XHRzaG93U3RhdHVzQmFyKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRpbWVyID0gdGltZXIgPyBjbGVhclRpbWVvdXQodGltZXIpIDogbnVsbFxyXG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlU3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdHRpbWVyID0gbnVsbFxyXG5cdFx0XHRcdH0sMzAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6ZqQ6JeP5o6n5Yi25p2hXHJcblx0XHRcdGhpZGVTdGF0dXNCYXIoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+i/lOWbnuS4iuS4gOmhtVxyXG5cdFx0XHRiYWNrUGFnZSgpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6MVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmkq3mlL4v5pqC5YGcXHJcblx0XHRcdHBsYXlPclBhdXNlKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0bXNnOnRoaXMuaXNwbGF5ID8gJ+aaguWBnCcgOiAn5pKt5pS+J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYodGhpcy5pc3BsYXkpe1xyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+ebkeWQrOWFqOWxj+S6i+S7tlxyXG5cdFx0XHRmdWxsc2NyZWVuY2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgPSBlLmRldGFpbC5mdWxsU2NyZWVuXHJcblx0XHRcdFx0aWYoIXRoaXMuZnVsbFNjcmVlblN0YXR1cyl7XHJcblx0XHRcdFx0XHR0aGlzLmxvY2tTY3JlZW5TdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/nm5HlkKzmkq3mlL7ov5vluqZcclxuXHRcdFx0dGltZXVwZGF0ZShlKXtcclxuXHRcdFx0XHRpZighdGhpcy5zaG93VG9hc3RTdGF0dXMpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/m+W6puadoeWPmOWMllxyXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSl7XHJcblx0XHRcdFx0dmlkZW9DVFguc2VlayhlKVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mj5DnpLrmoYbml7bpl7Tlj5jljJZcclxuXHRcdFx0c2xpZGVyVXBkYXRlKGUpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHR5cGU6XCJwcm9ncmVzc1wiLFxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlOmZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+aPkOekuuahhuS/oeaBr+WIh+aNolxyXG5cdFx0XHRzaG93VG9hc3Qob3B0aW9ucyl7XHJcblx0XHRcdFx0dGhpcy50b2FzdC50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdtc2cnXHJcblx0XHRcdFx0dGhpcy50b2FzdC5tc2cgPSBvcHRpb25zLm1zZyB8fCAn5o+Q56S6J1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdGlmKG9wdGlvbnMuYXV0b0Nsb3NlICE9PSBmYWxzZSl7XHJcblx0XHRcdFx0XHRpZihzaG93VG9hc3RUaW1lcil7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChzaG93VG9hc3RUaW1lcilcclxuXHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IG51bGxcclxuXHRcdFx0XHRcdH0sNTAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/oh6rlrprkuYnljZXlj4zlh7vkuovku7ZcclxuXHRcdFx0dG91Y2hTdGFydChlKXtcclxuXHRcdFx0XHR0aGlzLm9sZFRvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLm9sZFZhbHVlID0ge1xyXG5cdFx0XHRcdFx0Y3VycmVudFRpbWU6dGhpcy5jdXJyZW50VGltZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mi5bmi73ov5vluqbmg4XlhrVcclxuXHRcdFx0dG91Y2hNb3ZlKGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMubG9ja1NjcmVlblN0YXR1cykgcmV0dXJuXHJcblx0XHRcdFx0bGV0IG5ld1RvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHRpZighdGhpcy50b3VjaFR5cGUpe1xyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyggbmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVggKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6IG51bGxcclxuXHRcdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJyl7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMoIG5ld1RvdWNocy5wYWdlWSAtIHRoaXMub2xkVG91Y2hzLnBhZ2VZICkgPiAyMCA/ICdjdXJyZW50VGltZScgOiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnRUaW1lJyl7XHJcblx0XHRcdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50VGltZScpe1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOlwicHJvZ3Jlc3NcIixcclxuXHRcdFx0XHRcdFx0YXV0b0Nsb3NlOmZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdGxldCBuZXdDdXJyZW50VGltZSA9IChuZXdUb3VjaHMucGFnZVggLSB0aGlzLm9sZFRvdWNocy5wYWdlWCkvMjUwICogdGhpcy5kdXJhdGlvbiAqMiArIHRoaXMub2xkVmFsdWUuY3VycmVudFRpbWUgKiAxXHJcblx0XHRcdFx0XHRpZih0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgJiYgdGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpe1xyXG5cdFx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IChuZXdUb3VjaHMucGFnZVkgLSB0aGlzLm9sZFRvdWNocy5wYWdlWSkvMjUwICogdGhpcy5kdXJhdGlvbiAqMiArIHRoaXMub2xkVmFsdWUuY3VycmVudFRpbWUgKiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZVxyXG5cdFx0XHRcdFx0bmV3Q3VycmVudFRpbWUgPSBuZXdDdXJyZW50VGltZSA8IDAgPyAwIDogbmV3Q3VycmVudFRpbWVcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXdDdXJyZW50VGltZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hFbmQoZSl7XHJcblx0XHRcdFx0aWYodGhpcy5sb2NrU2NyZWVuU3RhdHVzKSByZXR1cm5cclxuXHRcdFx0XHRpZih0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnRUaW1lJyl7XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5zZWVrKHRoaXMuY3VycmVudFRpbWUpXHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYodGhpcy5kYkNvdW50ID09PSAxIHx8IHRoaXMuZGJDb3VudCA9PT0gMCApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRiQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhpcy5kYkNvdW50ID4gMCl7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHQvLyDljZXlh7tcclxuXHRcdFx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPT09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T3JIaWRlU3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0RyYXdlciA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOWPjOWHu1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGJDb3VudCA9PT0gMil7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXlPclBhdXNlKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYkNvdW50ID0gMFxyXG5cdFx0XHRcdFx0XHR9LDI1MClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBudWxsXHJcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHQvL+enkuaVsOi9rOaXtumXtOagvOW8j1xyXG5cdFx0XHRmb3JtYXRUaW1lKHJlc3VsdCkge1xyXG5cdFx0XHQgICB2YXIgaCA9IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgPCAxMCA/ICcwJytNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApIDogTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcclxuXHRcdFx0ICAgdmFyIG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuXHRcdFx0ICAgdmFyIHMgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpIDogTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKTtcclxuXHRcdFx0ICAgcmV0dXJuIHJlc3VsdCA9IHJlc3VsdCA+IDM2MDAgPyAoaCArIFwiOlwiICsgbSArIFwiOlwiICsgcykgOiBtICsgXCI6XCIgKyBzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+a4heaZsOW6puWIh+aNolxyXG5cdFx0XHRmb3JtYXRRdWFsaXR5KHZhbCl7XHJcblx0XHRcdFx0bGV0IGFyciA9IHtcclxuXHRcdFx0XHRcdFNEOlwi5qCH5riFXCIsXHJcblx0XHRcdFx0XHRIRDpcIumrmOa4hVwiLFxyXG5cdFx0XHRcdFx0RkhEOlwi6LaF5riFXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFyclt2YWxdO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/kvp3otZbms6jlhaVcclxuXHRcdHByb3ZpZGUoKXtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2OnRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuLnZpZGVvLWJnLXRvcHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AgLCByZ2JhKDAsMCwwLDApICwgcmdiYSgwLDAsMCwwLjUpKTtcclxufVxyXG4udmlkZW8tYmctYm90dG9te1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSAsIHJnYmEoMCwwLDAsMCkgLCByZ2JhKDAsMCwwLDAuNSkpO1xyXG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 10);\n/* harmony import */ var _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=script&lang=js& */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9773d786\",\n  false,\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-icon-btn.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ3NOO0FBQ3ROLGdCQUFnQixvTkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZmFmZmNjYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOTc3M2Q3ODZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLWljb24tYnRuLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*****************************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["video-btn"],
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["iconfont", "text-white"],
          style: "font-size:" + _vm.size + "px;"
        },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!***********************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=script&lang=js& */ 13);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtrQixDQUFnQixta0JBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYLjIuNy4xNC4yMDIwMDYxOC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    icon: {\n      type: String,\n      default: '' },\n\n    size: {\n      type: [String, Number],\n      default: 20 } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLWljb24tYnRuLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFEQTs7QUFLQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFMQSxFQURBLEUiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG5cIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snKVwiPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCB0ZXh0LXdoaXRlXCJcclxuXHRcdDpzdHlsZT1cIidmb250LXNpemU6JytzaXplKydweDsnXCI+e3tpY29ufX08L3RleHQ+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6e1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAyMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LnZpZGVvLWJ0bntcclxuXHRcdHdpZHRoOiA0NHB4O1xyXG5cdFx0aGVpZ2h0OiA0NHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*******************************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-btn": {
    "width": "44",
    "height": "44",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!********************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-slider.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-slider.vue?vue&type=template&id=040f5173& */ 18);\n/* harmony import */ var _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-slider.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5cc7b0d6\",\n  false,\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-slider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc047QUFDdE4sZ0JBQWdCLG9OQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQwZjUxNzMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Ytc2xpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYLjIuNy4xNC4yMDIwMDYxOC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1Y2M3YjBkNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS9jb21wb25lbnRzL2Ytc2xpZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***************************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=template&id=040f5173& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "position-relative"],
      staticStyle: { height: "44px" },
      on: {
        touchstart: _vm.touchstart,
        touchmove: _vm.touchmove,
        touchend: _vm.touchend,
        touchcancel: _vm.touchcancel
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["flex-1", "rounded"],
          staticStyle: {
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.5)"
          }
        },
        [
          _c("view", {
            staticClass: ["bg-main"],
            staticStyle: { height: "3px" },
            style: _vm.activeStyle
          })
        ]
      ),
      _c("view", {
        staticClass: ["position-absolute", "rounded-circle", "bg-main-hover"],
        staticStyle: { width: "15px", height: "15px" },
        style: _vm.activeDotStyle
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*********************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclguMi43LjE0LjIwMjAwNjE4LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC4yLjcuMTQuMjAyMDA2MTguZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'],\n  props: {\n    currentTime: {\n      type: Number,\n      default: 0 },\n\n    duration: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      activeWidth: 0,\n      width: 0,\n      moveStatus: false,\n      left: 0 };\n\n  },\n  created: function created() {\n    if (!this.v.fullScreenStatus) {\n      this.width = this.v.windowWidth - 44 - 44 - 80 - 15;\n      this.left = 44;\n    } else {\n      this.width = this.v.windowHeight - 30 - 15;\n      this.left = 15;\n    }\n    this.active();\n  },\n  computed: {\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWidth, \"px;\");\n    },\n    activeDotStyle: function activeDotStyle() {\n      return \"left:\".concat(this.activeWidth, \"px;\");\n    },\n    current: function current() {\n      return this.width == 0 ? 0 : this.activeWidth / this.width * this.duration;\n    } },\n\n  watch: {\n    currentTime: function currentTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active();\n      }\n    } },\n\n  methods: {\n    active: function active() {\n      this.activeWidth = this.duration == 0 ? 0 : this.currentTime / this.duration * this.width;\n    },\n    touchstart: function touchstart(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = true;\n      this.activeWidth = e.changedTouches[0].screenX - this.left;\n    },\n    touchmove: function touchmove(e) {\n      if (this.duration === 0) return;\n      var d = e.changedTouches[0].screenX - this.left;\n      if (d <= 0) {\n        this.activeWidth = 0;\n      } else if (d >= this.width) {\n        this.activeWidth = this.width;\n      } else {\n        this.activeWidth = d;\n      }\n      this.$emit('update', this.current);\n    },\n    touchend: function touchend(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = false;\n      this.$emit('change', this.current);\n    },\n    touchcancel: function touchcancel(e) {\n      this.touchend(e);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLXNsaWRlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBTEEsRUFGQTs7O0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxjQUZBO0FBR0EsdUJBSEE7QUFJQSxhQUpBOztBQU1BLEdBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3QkE7QUE4QkE7QUFDQSxlQURBLHlCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsNEJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBOUJBOztBQXlDQTtBQUNBLGVBREEsdUJBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUF6Q0E7O0FBZ0RBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGNBSkEsc0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLGFBVEEscUJBU0EsQ0FUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBO0FBcUJBLFlBckJBLG9CQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekJBO0FBMEJBLGVBMUJBLHVCQTBCQSxDQTFCQSxFQTBCQTtBQUNBO0FBQ0EsS0E1QkEsRUFoREEsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBzdHlsZT1cImhlaWdodDogNDRweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgQHRvdWNobW92ZT1cInRvdWNobW92ZVwiIEB0b3VjaGVuZD1cInRvdWNoZW5kXCIgQHRvdWNoY2FuY2VsPVwidG91Y2hjYW5jZWxcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xIHJvdW5kZWRcIiBzdHlsZT1cImhlaWdodDogM3B4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1tYWluXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtcIiA6c3R5bGU9XCJhY3RpdmVTdHlsZVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZC1jaXJjbGUgYmctbWFpbi1ob3ZlclwiIHN0eWxlPVwid2lkdGg6IDE1cHg7aGVpZ2h0OiAxNXB4O1wiIDpzdHlsZT1cImFjdGl2ZURvdFN0eWxlXCI+PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0aW5qZWN0OlsndiddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y3VycmVudFRpbWU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvbjp7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YWN0aXZlV2lkdGg6MCxcclxuXHRcdFx0XHR3aWR0aDowLFxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6ZmFsc2UsXHJcblx0XHRcdFx0bGVmdDowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRpZighdGhpcy52LmZ1bGxTY3JlZW5TdGF0dXMpe1xyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93V2lkdGggLSA0NCAtIDQ0IC0gODAgLSAxNVxyXG5cdFx0XHRcdHRoaXMubGVmdCA9IDQ0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudi53aW5kb3dIZWlnaHQgLSAzMCAtIDE1XHJcblx0XHRcdFx0dGhpcy5sZWZ0ID0gMTVcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSgpXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0YWN0aXZlU3R5bGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDoke3RoaXMuYWN0aXZlV2lkdGh9cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY3RpdmVEb3RTdHlsZSgpe1xyXG5cdFx0XHRcdHJldHVybiBgbGVmdDoke3RoaXMuYWN0aXZlV2lkdGh9cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMud2lkdGggPT0gMCA/IDAgOiAodGhpcy5hY3RpdmVXaWR0aC90aGlzLndpZHRoKSp0aGlzLmR1cmF0aW9uXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRjdXJyZW50VGltZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHRpZighdGhpcy5tb3ZlU3RhdHVzKXtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFjdGl2ZSgpIHtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gdGhpcy5kdXJhdGlvbiA9PSAwID8gMCA6ICh0aGlzLmN1cnJlbnRUaW1lL3RoaXMuZHVyYXRpb24pICogdGhpcy53aWR0aFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaHN0YXJ0KGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMuZHVyYXRpb24gPT09IDApIHJldHVyblxyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YIC0gdGhpcy5sZWZ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNobW92ZShlKXtcclxuXHRcdFx0XHRpZih0aGlzLmR1cmF0aW9uID09PSAwKSByZXR1cm5cclxuXHRcdFx0XHRsZXQgZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWCAtIHRoaXMubGVmdFxyXG5cdFx0XHRcdGlmKGQgPD0gMCl7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gMFxyXG5cdFx0XHRcdH0gZWxzZSBpZihkID49IHRoaXMud2lkdGgpe1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaWR0aCA9IHRoaXMud2lkdGhcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaWR0aCA9IGRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlJyx0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoZW5kKGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMuZHVyYXRpb24gPT09IDApIHJldHVyblxyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJyx0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoY2FuY2VsKGUpe1xyXG5cdFx0XHRcdHRoaXMudG91Y2hlbmQoZSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***************************************************************************************************************************************!*\
  !*** D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Program/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23);
/* harmony import */ var _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/website/finished/shipindianbo/shipindianbo/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-bg-top": {
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  },
  "video-bg-bottom": {
    "backgroundImage": "linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  }
}

/***/ })
/******/ ]);