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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!********************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 11:
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

/***/ 174:
/*!*********************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 175);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIxNzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///174\n");

/***/ }),

/***/ 175:
/*!***************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 176);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 178);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 194).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 194).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7b909402\",\n  \"479c6eef\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFrRjtBQUN0SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQWtGO0FBQzNJOztBQUVBOztBQUVBO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I5MDk0MDImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiOTA5NDAyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjkwOTQwMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiOTA5NDAyXCIsXG4gIFwiNDc5YzZlZWZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///175\n");

/***/ }),

/***/ 176:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 177);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 177:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            {
              style: { height: _vm.screenHeight + "px" },
              attrs: { current: _vm.curIndex },
              on: { change: _vm.changeTopTab }
            },
            [
              _c("swiper-item", [
                _c(
                  "view",
                  {
                    staticClass: ["near-by"],
                    style: { height: _vm.screenHeight + "px" }
                  },
                  [
                    _c("u-text", { staticClass: ["warn-info"] }, [
                      _vm._v("暂未开放，敬请期待！")
                    ])
                  ]
                )
              ]),
              _c(
                "swiper-item",
                [
                  _vm.myUserInfo == null
                    ? _c(
                        "view",
                        {
                          staticClass: ["my-follow"],
                          style: { height: _vm.screenHeight + "px" }
                        },
                        [
                          _c("u-text", { staticClass: ["warn-info"] }, [
                            _vm._v("请登录后查看！")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _c("video-follow-comp", {
                    ref: "videoFollowComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playFollowStatus: _vm.playFollowStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      letFollowVideoPause: _vm.letFollowVideoPause,
                      displayVideoPaging: _vm.displayVideoPaging
                    }
                  })
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _c("video-comp", {
                    ref: "videoComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playStatus: _vm.playStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      displayVideoPaging: _vm.displayVideoPaging
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          !_vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" }
                },
                [
                  _c("u-text", { staticClass: ["header-left"] }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function($event) {
                            _vm.tapFollow(0)
                          }
                        }
                      },
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("附近")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 0 }
                        })
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function($event) {
                            _vm.tapFollow(1)
                          }
                        }
                      },
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("关注")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 1 }
                        })
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function($event) {
                            _vm.tapFollow(2)
                          }
                        }
                      },
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("推荐")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 2 }
                        })
                      ]
                    )
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/icon-search.png" },
                    on: { click: _vm.goSearch }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" }
                },
                [
                  _c("u-text", { staticClass: ["header-left"] }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c("view", { staticClass: ["header-item"] }, [
                      _c("u-text", { staticClass: ["header-refresh-title"] }, [
                        _vm._v("下拉刷新视频")
                      ])
                    ])
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/loading.gif" }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 178:
/*!***************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 179);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiMTc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///178\n");

/***/ }),

/***/ 179:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _videoComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoComp.vue */ 180));\nvar _videoFollowComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoFollowComp.vue */ 187));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar system = uni.getSystemInfoSync();var app = getApp(); // import uniHeader from '@/components/header';\n// import uniFooter from '@/components/footer';\n// import uniSwiper from '@/components/swiper';\nvar _default = { components: { // uniHeader,\n    // uniFooter,\n    // uniSwiper,\n    videoComp: _videoComp.default, videoFollowComp: _videoFollowComp.default }, data: function data() {return { isLoading: false, statusBarHeight: system.statusBarHeight, screenHeight: system.screenHeight, // screenHeight: system.safeArea.bottom,// - 50,\n      curIndex: 2, playStatus: false, playFollowStatus: false, // videoList: getApp().getDefaultVlogList(),\t\t\t// 首页一开始查询所得的默认视频列表\n      videoList: [], // 首页一开始查询所得的默认视频列表\n      refreshList: [], // 下拉刷新后获得的新的列表\n      pagingList: [], // 分页list\n      refresh: 0 // 从me页面传来的refresh，用于退出登录后重新刷新当前页的视频\n    };}, onLoad: function onLoad() {var have = plus.navigator.hasNotchInScreen(); // 判断是否有下巴\n  }, onTabItemTap: function onTabItemTap(e) {var tabIndex = e.index; // this.playStatus = tabIndex === 0 ? true : false;\n    // 切换视频要做暂停或播放的判断\n    var me = this;if (tabIndex == 0) {// 虚位以待\n    } else if (tabIndex == 1) {me.playStatus = false;me.playFollowStatus = true;} else if (tabIndex == 2) {me.playStatus = true;me.playFollowStatus = false;}}, onShow: function onShow() {var me = this;var myUserInfo = app.getUserInfoSession();this.myUserInfo = myUserInfo; // 如果当前没有list，则relaunch\n    if (this.$refs.videoComp != undefined) {var playerList = this.$refs.videoComp.playerList;if (playerList != undefined && playerList.length == 0) {this.$refs.videoComp.displayVideoPaging(1, true);}} // 判断如果当前是tab为1或2，则播放，否则不播放\n    if (me.curIndex == 0) {// 虚位以待\n    } else if (me.curIndex == 1) {me.playFollowStatus = true;} else if (me.curIndex == 2) {me.playStatus = true;} // onShow的时候，关注的话，则重新刷一下list\n    var justFollowVlogerId = uni.getStorageSync(\"justFollowVlogerId\");if (!app.isStrEmpty(justFollowVlogerId)) {this.$refs.videoComp.reFollowPlayList(justFollowVlogerId);uni.setStorageSync(\"justFollowVlogerId\", \"\");} // 取消关注也要重新刷一下list\n    var justCancelVlogerId = uni.getStorageSync(\"justCancelVlogerId\");if (!app.isStrEmpty(justCancelVlogerId)) {this.$refs.videoComp.reCancelPlayList(justCancelVlogerId);uni.setStorageSync(\"justCancelVlogerId\", \"\");}}, onHide: function onHide() {var me = this; // 显示和隐藏，需要判断根据不同tab做暂停或者隐藏\n    if (me.curIndex == 0) {// 虚位以待\n    } else if (me.curIndex == 1) {me.playFollowStatus = false;} else if (me.curIndex == 2) {me.playStatus = false;}}, // 当前页下拉刷新\n  onPullDownRefresh: function onPullDownRefresh() {var me = this; // 下拉刷新判断，如果是不同tab，那么组件中刷新的请求也不同\n    if (me.curIndex == 0) {// 虚位以待\n    } else if (me.curIndex == 1) {this.$refs.videoFollowComp.displayVideoPaging(1, true);} else if (me.curIndex == 2) {this.$refs.videoComp.displayVideoPaging(1, true);}}, methods: { // 前往搜索页面\n    goSearch: function goSearch() {uni.navigateTo({ url: \"/pages/search/search\" });}, // 左滑右滑选项卡改变选中状态\n    changeTopTab: function changeTopTab(e) {var current = e.detail.current;this.curIndex = current;this.playFollowStatus = this.curIndex === 1 ? true : false;this.playStatus = this.curIndex === 2 ? true : false;}, // 点击头部选项卡，切换页面\n    tapFollow: function tapFollow(current) {this.curIndex = current;this.playFollowStatus = this.curIndex === 1 ? true : false;this.playStatus = this.curIndex === 2 ? true : false;}, // 下拉刷新，改变head的字样显示\n    showLoading: function showLoading() {this.isLoading = true;}, hideLoading: function hideLoading() {this.isLoading = false;}, letFollowVideoPause: function letFollowVideoPause() {this.playFollowStatus = false;} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkxBO0FBQ0EsZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOQSxxQ0FDQSxtQixDQUNBO0FBQ0E7QUFDQTtlQUdBLEVBQ0EsY0FDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FKQSxFQUtBLHlDQUxBLEVBREEsRUFRQSxJQVJBLGtCQVFBLENBQ0EsU0FDQSxnQkFEQSxFQUdBLHVDQUhBLEVBSUEsaUNBSkEsRUFLQTtBQUNBLGlCQU5BLEVBT0EsaUJBUEEsRUFRQSx1QkFSQSxFQVVBO0FBQ0EsbUJBWEEsRUFXQTtBQUNBLHFCQVpBLEVBWUE7QUFDQSxvQkFiQSxFQWFBO0FBQ0EsZ0JBZEEsQ0FjQTtBQWRBLE1BaUJBLENBMUJBLEVBMkJBLE1BM0JBLG9CQTJCQSxDQUNBLDZDQURBLENBQ0E7QUFDQSxHQTdCQSxFQThCQSx3Q0FDQSx1QkFEQSxDQUVBO0FBRUE7QUFDQSxrQkFDQSxvQkFDQTtBQUNBLEtBRkEsTUFFQSxvQkFDQSxzQkFDQSwyQkFDQSxDQUhBLE1BR0Esb0JBQ0EscUJBQ0EsNEJBQ0EsQ0FDQSxDQTdDQSxFQThDQSxNQTlDQSxvQkE4Q0EsQ0FDQSxjQUVBLDBDQUNBLDZCQUpBLENBT0E7QUFDQSw0Q0FDQSxpREFDQSx3REFDQSxpREFDQSxDQUNBLENBYkEsQ0FnQkE7QUFDQSwyQkFDQTtBQUNBLEtBRkEsTUFFQSx1QkFDQSwyQkFDQSxDQUZBLE1BRUEsdUJBQ0EscUJBQ0EsQ0F2QkEsQ0F5QkE7QUFDQSxzRUFDQSwwQ0FDQSwwREFDQSw2Q0FDQSxDQTlCQSxDQStCQTtBQUNBLHNFQUNBLDBDQUNBLDBEQUNBLDZDQUNBLENBRUEsQ0FwRkEsRUFxRkEsTUFyRkEsb0JBcUZBLENBQ0EsY0FEQSxDQUVBO0FBQ0EsMkJBQ0E7QUFDQSxLQUZBLE1BRUEsdUJBQ0EsNEJBQ0EsQ0FGQSxNQUVBLHVCQUNBLHNCQUNBLENBQ0EsQ0EvRkEsRUFnR0E7QUFDQSxtQkFqR0EsK0JBaUdBLENBQ0EsY0FEQSxDQUdBO0FBQ0EsMkJBQ0E7QUFDQSxLQUZBLE1BRUEsdUJBQ0EsdURBQ0EsQ0FGQSxNQUVBLHVCQUNBLGlEQUNBLENBRUEsQ0E3R0EsRUE4R0EsV0FDQTtBQUNBLFlBRkEsc0JBRUEsQ0FDQSxpQkFDQSwyQkFEQSxJQUdBLENBTkEsRUFRQTtBQUNBLDRDQUNBLCtCQUNBLHdCQUNBLDJEQUNBLHFEQUNBLENBZEEsRUFlQTtBQUNBLDRDQUNBLHdCQUNBLDJEQUNBLHFEQUNBLENBcEJBLEVBc0JBO0FBQ0EsZUF2QkEseUJBdUJBLENBQ0Esc0JBQ0EsQ0F6QkEsRUEwQkEsV0ExQkEseUJBMEJBLENBQ0EsdUJBQ0EsQ0E1QkEsRUE2QkEsbUJBN0JBLGlDQTZCQSxDQUNBLDhCQUNBLENBL0JBLEVBOUdBLEUiLCJmaWxlIjoiMTc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIHNjb3BlZD5cblx0LyogaW5kZXggc3RhcnQgKi9cblx0LnBhZ2Uge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0fVxuXHQvKiBpbmRleCBlbmQgKi9cblx0XG5cdC8qIOmhtumDqOmAiemhueWNoSBzdGFydCAqL1xuXHQuaGVhZGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxMDBycHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwYWRkaW5nLWxlZnQ6IDQwcnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xuXHR9XG5cdFxuXHQuaGVhZGVyLWNlbnRlciB7XG5cdFx0ZmxleDogMTtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0XG5cdC5oZWFkZXItbGVmdCxcblx0LmhlYWRlci1yaWdodCB7XG5cdFx0Y29sb3I6ICM5OTk7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdGZvbnQtZmFtaWx5OiBpY29uZm9udDtcblx0fVxuXHRcblx0LmhlYWRlci1yaWdodC1zZWFyY2gge1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICovXG5cdH1cblx0XG5cdC5oZWFkZXItaXRlbSB7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tbGVmdDogNnJweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDZycHg7XG5cdH1cblx0XG5cdC5oZWFkZXItaXRlbS10aXRsZSB7XG5cdFx0d2lkdGg6IDEyMHJweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiA2MHJweDtcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0LmhlYWRlci1yZWZyZXNoLXRpdGxlIHtcblx0XHR3aWR0aDogMzAwcnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDYwcnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA2MHJweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHQuaGVhZGVyLWl0ZW0tbGluZSB7XG5cdFx0aGVpZ2h0OiA1cnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA4cnB4O1xuXHRcdHdpZHRoOiA2MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xuXHR9XG5cdC8qIOmhtumDqOmAiemhueWNoSBlbmQgKi9cblx0XG5cdC8qIOmAiemhueWNoei9ruaSree7hOS7tiBzdGFydCAqL1xuXHQubXktc3dpcGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHR9XG5cdC5uZWFyLWJ5IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0Lm15LWZvbGxvdyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdC8qIOmAiemhueWNoei9ruaSree7hOS7tiBlbmQgKi9cblx0Lndhcm4taW5mbyB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAzNnJweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5ub3JtYWwtaW1nIHtcblx0XHR3aWR0aDogNTBycHg7XG5cdFx0aGVpZ2h0OiA1MHJweDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cbjwvc3R5bGU+XG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDwhLS0g5bem5Lit5Y+z55qE5LiJ5Liq6aG16Z2i5YiH5o2i77yM5L6d5qyh5piv77ya6ZmE6L+RIC0g5YWz5rOoIC0g5o6o6I2QIC0tPlxuXHRcdDxzd2lwZXIgc3R5bGU9XCJteS1zd2lwZXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQgKyAncHgnfVwiIDpjdXJyZW50PVwiY3VySW5kZXhcIiBAY2hhbmdlPVwiY2hhbmdlVG9wVGFiXCI+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibmVhci1ieVwiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsncHgnfVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid2Fybi1pbmZvXCI+5pqC5pyq5byA5pS+77yM5pWs6K+35pyf5b6F77yBPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdFx0PHN3aXBlci1pdGVtPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwibXlVc2VySW5mbyA9PSBudWxsXCIgY2xhc3M9XCJteS1mb2xsb3dcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrJ3B4J31cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIndhcm4taW5mb1wiPuivt+eZu+W9leWQjuafpeeci++8gTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWRlby1mb2xsb3ctY29tcFxuXHRcdFx0XHRcdFx0cmVmPVwidmlkZW9Gb2xsb3dDb21wXCJcblx0XHRcdFx0XHRcdDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiBcblx0XHRcdFx0XHRcdDpwbGF5Rm9sbG93U3RhdHVzPVwicGxheUZvbGxvd1N0YXR1c1wiIFxuXHRcdFx0XHRcdFx0OnZpZGVvTGlzdD1cInZpZGVvTGlzdFwiXG5cdFx0XHRcdFx0XHQ6cmVmcmVzaExpc3Q9XCJyZWZyZXNoTGlzdFwiXG5cdFx0XHRcdFx0XHQ6cGFnaW5nTGlzdD1cInBhZ2luZ0xpc3RcIlxuXHRcdFx0XHRcdFx0QHNob3dMb2FkaW5nPVwic2hvd0xvYWRpbmdcIlxuXHRcdFx0XHRcdFx0QGhpZGVMb2FkaW5nPVwiaGlkZUxvYWRpbmdcIlxuXHRcdFx0XHRcdFx0QGxldEZvbGxvd1ZpZGVvUGF1c2U9XCJsZXRGb2xsb3dWaWRlb1BhdXNlXCJcblx0XHRcdFx0XHRcdEBkaXNwbGF5VmlkZW9QYWdpbmc9XCJkaXNwbGF5VmlkZW9QYWdpbmdcIj48L3ZpZGVvLWZvbGxvdy1jb21wPlxuXHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHRcdDxzd2lwZXItaXRlbT5cblx0XHRcdFx0XHQ8dmlkZW8tY29tcFxuXHRcdFx0XHRcdFx0cmVmPVwidmlkZW9Db21wXCJcblx0XHRcdFx0XHRcdDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiBcblx0XHRcdFx0XHRcdDpwbGF5U3RhdHVzPVwicGxheVN0YXR1c1wiIFxuXHRcdFx0XHRcdFx0OnZpZGVvTGlzdD1cInZpZGVvTGlzdFwiXG5cdFx0XHRcdFx0XHQ6cmVmcmVzaExpc3Q9XCJyZWZyZXNoTGlzdFwiXG5cdFx0XHRcdFx0XHQ6cGFnaW5nTGlzdD1cInBhZ2luZ0xpc3RcIlxuXHRcdFx0XHRcdFx0QHNob3dMb2FkaW5nPVwic2hvd0xvYWRpbmdcIlxuXHRcdFx0XHRcdFx0QGhpZGVMb2FkaW5nPVwiaGlkZUxvYWRpbmdcIlxuXHRcdFx0XHRcdFx0QGRpc3BsYXlWaWRlb1BhZ2luZz1cImRpc3BsYXlWaWRlb1BhZ2luZ1wiPjwvdmlkZW8tY29tcD5cblx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0PC9zd2lwZXI+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOnN0YXR1c0JhckhlaWdodCsncHgnfVwiIHYtaWY9XCIhaXNMb2FkaW5nXCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1sZWZ0XCI+PC90ZXh0PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItY2VudGVyXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMClcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1pdGVtLXRpdGxlXCI+6ZmE6L+RPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW0tbGluZVwiIDpjbGFzcz1cInsnYWN0aXZhdGUtbGluZSc6IGN1ckluZGV4ID09PSAwfVwiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtXCIgQGNsaWNrPVwidGFwRm9sbG93KDEpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItaXRlbS10aXRsZVwiPuWFs+azqDwvdGV4dD5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtLWxpbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2YXRlLWxpbmUnOiBjdXJJbmRleCA9PT0gMX1cIj48L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbVwiIEBjbGljaz1cInRhcEZvbGxvdygyKVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj7mjqjojZA8L3RleHQ+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbS1saW5lXCIgOmNsYXNzPVwieydhY3RpdmF0ZS1saW5lJzogY3VySW5kZXggPT09IDJ9XCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJoZWFkZXItcmlnaHQtc2VhcmNoIG5vcm1hbC1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tc2VhcmNoLnBuZ1wiIEBjbGljaz1cImdvU2VhcmNoXCI+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwie21hcmdpblRvcDpzdGF0dXNCYXJIZWlnaHQrJ3B4J31cIiB2LWlmPVwiaXNMb2FkaW5nXCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1sZWZ0XCI+PC90ZXh0PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItY2VudGVyXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1yZWZyZXNoLXRpdGxlXCI+5LiL5ouJ5Yi35paw6KeG6aKRPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJoZWFkZXItcmlnaHQtc2VhcmNoIG5vcm1hbC1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvYWRpbmcuZ2lmXCI+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0g6aG26YOo5YiH5o2i55qE5a+86IiqIGVuZCAtLT5cblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHQvLyBpbXBvcnQgdW5pSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXInO1xuXHQvLyBpbXBvcnQgdW5pRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInO1xuXHQvLyBpbXBvcnQgdW5pU3dpcGVyIGZyb20gJ0AvY29tcG9uZW50cy9zd2lwZXInO1xuXHRpbXBvcnQgdmlkZW9Db21wIGZyb20gJ0AvY29tcG9uZW50cy92aWRlb0NvbXAudnVlJztcblx0aW1wb3J0IHZpZGVvRm9sbG93Q29tcCBmcm9tICdAL2NvbXBvbmVudHMvdmlkZW9Gb2xsb3dDb21wLnZ1ZSc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQvLyB1bmlIZWFkZXIsXG5cdFx0XHQvLyB1bmlGb290ZXIsXG5cdFx0XHQvLyB1bmlTd2lwZXIsXG5cdFx0XHR2aWRlb0NvbXAsXG5cdFx0XHR2aWRlb0ZvbGxvd0NvbXBcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0LFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6IHN5c3RlbS5zY3JlZW5IZWlnaHQsXG5cdFx0XHRcdC8vIHNjcmVlbkhlaWdodDogc3lzdGVtLnNhZmVBcmVhLmJvdHRvbSwvLyAtIDUwLFxuXHRcdFx0XHRjdXJJbmRleDogMixcblx0XHRcdFx0cGxheVN0YXR1czogZmFsc2UsXG5cdFx0XHRcdHBsYXlGb2xsb3dTdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gdmlkZW9MaXN0OiBnZXRBcHAoKS5nZXREZWZhdWx0VmxvZ0xpc3QoKSxcdFx0XHQvLyDpppbpobXkuIDlvIDlp4vmn6Xor6LmiYDlvpfnmoTpu5jorqTop4bpopHliJfooahcblx0XHRcdFx0dmlkZW9MaXN0OiBbXSxcdFx0XHQvLyDpppbpobXkuIDlvIDlp4vmn6Xor6LmiYDlvpfnmoTpu5jorqTop4bpopHliJfooahcblx0XHRcdFx0cmVmcmVzaExpc3Q6IFtdLFx0XHRcdC8vIOS4i+aLieWIt+aWsOWQjuiOt+W+l+eahOaWsOeahOWIl+ihqFxuXHRcdFx0XHRwYWdpbmdMaXN0OiBbXSxcdFx0XHRcdC8vIOWIhumhtWxpc3Rcblx0XHRcdFx0cmVmcmVzaDogMCxcdFx0XHRcdFx0Ly8g5LuObWXpobXpnaLkvKDmnaXnmoRyZWZyZXNo77yM55So5LqO6YCA5Ye655m75b2V5ZCO6YeN5paw5Yi35paw5b2T5YmN6aG155qE6KeG6aKRXG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0dmFyIGhhdmUgPSBwbHVzLm5hdmlnYXRvci5oYXNOb3RjaEluU2NyZWVuKCk7XHQvLyDliKTmlq3mmK/lkKbmnInkuIvlt7Rcblx0XHR9LFxuXHRcdG9uVGFiSXRlbVRhcCA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB0YWJJbmRleCA9IGUuaW5kZXg7XG5cdFx0XHQvLyB0aGlzLnBsYXlTdGF0dXMgPSB0YWJJbmRleCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFxuXHRcdFx0Ly8g5YiH5o2i6KeG6aKR6KaB5YGa5pqC5YGc5oiW5pKt5pS+55qE5Yik5patXG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0aWYgKHRhYkluZGV4ID09IDApIHtcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXG5cdFx0XHR9IGVsc2UgaWYgKHRhYkluZGV4ID09IDEpIHtcblx0XHRcdFx0bWUucGxheVN0YXR1cyA9IGZhbHNlO1xuXHRcdFx0XHRtZS5wbGF5Rm9sbG93U3RhdHVzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGFiSW5kZXggPT0gMikge1xuXHRcdFx0XHRtZS5wbGF5U3RhdHVzID0gdHJ1ZTtcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25TaG93KCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBhcHAuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHR0aGlzLm15VXNlckluZm8gPSBteVVzZXJJbmZvO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIOWmguaenOW9k+WJjeayoeaciWxpc3TvvIzliJlyZWxhdW5jaFxuXHRcdFx0aWYgKHRoaXMuJHJlZnMudmlkZW9Db21wICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IHRoaXMuJHJlZnMudmlkZW9Db21wLnBsYXllckxpc3Q7XG5cdFx0XHRcdGlmIChwbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBwbGF5ZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy52aWRlb0NvbXAuZGlzcGxheVZpZGVvUGFnaW5nKDEsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5Yik5pat5aaC5p6c5b2T5YmN5pivdGFi5Li6MeaIljLvvIzliJnmkq3mlL7vvIzlkKbliJnkuI3mkq3mlL5cblx0XHRcdGlmIChtZS5jdXJJbmRleCA9PSAwKSB7XG5cdFx0XHRcdC8vIOiZmuS9jeS7peW+hVxuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAxKSB7XG5cdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAyKSB7XG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBvblNob3fnmoTml7blgJnvvIzlhbPms6jnmoTor53vvIzliJnph43mlrDliLfkuIDkuItsaXN0XG5cdFx0XHR2YXIganVzdEZvbGxvd1Zsb2dlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIpO1xuXHRcdFx0aWYgKCFhcHAuaXNTdHJFbXB0eShqdXN0Rm9sbG93VmxvZ2VySWQpKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Db21wLnJlRm9sbG93UGxheUxpc3QoanVzdEZvbGxvd1Zsb2dlcklkKTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIsIFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5Y+W5raI5YWz5rOo5Lmf6KaB6YeN5paw5Yi35LiA5LiLbGlzdFxuXHRcdFx0dmFyIGp1c3RDYW5jZWxWbG9nZXJJZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImp1c3RDYW5jZWxWbG9nZXJJZFwiKTtcblx0XHRcdGlmICghYXBwLmlzU3RyRW1wdHkoanVzdENhbmNlbFZsb2dlcklkKSkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5yZUNhbmNlbFBsYXlMaXN0KGp1c3RDYW5jZWxWbG9nZXJJZCk7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImp1c3RDYW5jZWxWbG9nZXJJZFwiLCBcIlwiKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cdFx0b25IaWRlKCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdC8vIOaYvuekuuWSjOmakOiXj++8jOmcgOimgeWIpOaWreagueaNruS4jeWQjHRhYuWBmuaaguWBnOaIluiAhemakOiXj1xuXHRcdFx0aWYgKG1lLmN1ckluZGV4ID09IDApIHtcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDEpIHtcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAyKSB7XG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOW9k+WJjemhteS4i+aLieWIt+aWsFxuXHRcdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFxuXHRcdFx0Ly8g5LiL5ouJ5Yi35paw5Yik5pat77yM5aaC5p6c5piv5LiN5ZCMdGFi77yM6YKj5LmI57uE5Lu25Lit5Yi35paw55qE6K+35rGC5Lmf5LiN5ZCMXG5cdFx0XHRpZiAobWUuY3VySW5kZXggPT0gMCkge1xuXHRcdFx0XHQvLyDomZrkvY3ku6XlvoVcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMSkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvRm9sbG93Q29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDIpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy52aWRlb0NvbXAuZGlzcGxheVZpZGVvUGFnaW5nKDEsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvLyDliY3lvoDmkJzntKLpobXpnaJcblx0XHRcdGdvU2VhcmNoKCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9zZWFyY2gvc2VhcmNoXCJcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOW3pua7keWPs+a7kemAiemhueWNoeaUueWPmOmAieS4reeKtuaAgVxuXHRcdFx0Y2hhbmdlVG9wVGFiOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50ID0gZS5kZXRhaWwuY3VycmVudDtcblx0XHRcdFx0dGhpcy5jdXJJbmRleCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDIgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g54K55Ye75aS06YOo6YCJ6aG55Y2h77yM5YiH5o2i6aG16Z2iXG5cdFx0XHR0YXBGb2xsb3c6IGZ1bmN0aW9uKGN1cnJlbnQpIHtcblx0XHRcdFx0dGhpcy5jdXJJbmRleCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDIgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDkuIvmi4nliLfmlrDvvIzmlLnlj5hoZWFk55qE5a2X5qC35pi+56S6XG5cdFx0XHRzaG93TG9hZGluZygpIHtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGhpZGVMb2FkaW5nKCkge1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGxldEZvbGxvd1ZpZGVvUGF1c2UoKSB7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///179\n");

/***/ }),

/***/ 180:
/*!*****************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoComp.vue?vue&type=template&id=3067027f& */ 181);\n/* harmony import */ var _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoComp.vue?vue&type=script&lang=js& */ 183);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 185).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 185).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"402f4f05\",\n  false,\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQzZKO0FBQzdKLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA2NzAyN2YmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Db21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDAyZjRmMDVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///180\n");

/***/ }),

/***/ 181:
/*!************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=template&id=3067027f& */ 182);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 182:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll }
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh }
          },
          [
            _c("u-text", { staticClass: ["refresh-info-txt"] }),
            _c("loading-indicator")
          ]
        ),
        _vm._l(_vm.playerList, function(item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" }
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true"
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate
                    }
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill"
                    }
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c("u-text", { staticClass: ["publish-info-vloger-name"] }, [
                    _vm._v("@" + _vm._s(item.vlogerName))
                  ]),
                  _c("u-text", { staticClass: ["publish-info-content"] }, [
                    _vm._v(_vm._s(item.content))
                  ]),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" }
                      }),
                      _c("u-text", { staticClass: ["muisc-words"] }, [
                        _vm._v(_vm._s(item.vlogerName) + "的原声创作")
                      ])
                    ],
                    1
                  )
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" }
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: {
                            src:
                              "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                              _vm.times
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  !item.doIFollowVloger && _vm.userId != _vm.thisVlogerId
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function($event) {
                            _vm.followMe(item.vlogerId)
                          }
                        }
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function($event) {
                                _vm.likeOrDislikeVlog(1)
                              }
                            }
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function($event) {
                                _vm.likeOrDislikeVlog(0)
                              }
                            }
                          })
                        : _vm._e(),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v(_vm._s(_vm.getGraceNumber(item.likeCounts)))
                      ])
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle }
                      }),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v(
                          _vm._s(
                            _vm.getGraceNumber(_vm.thisVlogTotalComentCounts)
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle }
                      }),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v("分享")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        })
      ],
      2
    ),
    _c(
      "view",
      [
        _c(
          "uni-popup",
          { ref: "comment", attrs: { type: "comment" } },
          [
            _c("uni-popup-comments", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId
              }
            })
          ],
          1
        ),
        _c(
          "uni-popup",
          { ref: "share", attrs: { backgroundColor: "#fff", type: "share" } },
          [
            _c("uni-popup-share", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId,
                vlogUrl: _vm.thisVlog.url,
                isPrivate: _vm.thisVlog.isPrivate
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 183:
/*!******************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=script&lang=js& */ 184);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNaLENBQWdCLDZjQUFHLEVBQUMiLCJmaWxlIjoiMTgzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///183\n");

/***/ }),

/***/ 184:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();var _default =\n{\n  props: {\n    screenHeight: {\n      default: 0 },\n\n    src: {\n      default: false },\n\n    playStatus: {\n      default: false },\n\n    videoList: {\n      default: [] },\n\n    refreshList: {\n      default: [] },\n\n    pagingList: {\n      default: [] } },\n\n\n  data: function data() {\n    return {\n      thisVlog: {}, // 当前的短视频对象\n      thisVlogId: \"\", // 当前的短视频主键id\n      thisVlogerId: \"\", // 当前的短视频博主的主键id\n      userId: \"\", // 当前用户id\n\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n\n      videoContext: {},\n\n      currentIndex: 0,\n      contentOffsetY: 0,\n\n      times: new Date().getTime(),\n\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\" };\n\n  },\n  created: function created() {\n\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n\n    var myUserInfo = getApp().getUserInfoSession();\n    if (myUserInfo != null) {\n      this.userId = getApp().getUserInfoSession().id;\n    }\n\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n\n    var videoContext = uni.createVideoContext('myVideo');\n    this.videoContext = videoContext;\n  },\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n\n    playStatus: function playStatus(val) {\n      var me = this;\n\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    } },\n\n  methods: {\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        } });\n\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\" });\n\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            } });\n\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken() },\n\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000 });\n\n            }\n          } });\n\n\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\" });\n\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            } });\n\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken() },\n\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000 });\n\n            }\n          } });\n\n\n      }\n    },\n\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\" });\n\n\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          } });\n\n\n        return;\n      }\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken() },\n\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000 });\n\n          }\n        } });\n\n\n    },\n\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId });\n\n    },\n\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n\n    downloadVlog: function downloadVlog() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n    },\n\n    copyLink: function copyLink() {\n      var me = me;\n    },\n\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n\n    // 下拉刷新的过程中，改变头部tab显示的字样\n    onpullingdown: function onpullingdown(e) {\n    },\n    onrefresh: function onrefresh(e) {var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {\n    },\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        this.doplay(e.detail.currentTime);\n      }\n    },\n\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playStatus = this.playStatus;\n\n      if (!playStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playStatus = !playStatus;\n    },\n\n\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n\n      var num = this.playerList.length;\n\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n\n      this.times = new Date().getTime();\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n\n    },\n\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/vlog/indexList?userId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            // me.playerList = vlogList;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000 });\n\n          }\n\n        },\n        complete: function complete() {\n          uni.stopPullDownRefresh();\n        } });\n\n    },\n\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      this.thisVlog = vlog;\n      this.thisVlogId = vlog.vlogId;\n      this.thisVlogerId = vlog.vlogerId;\n    },\n\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        } });\n\n    },\n\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true });\n\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0NvbXAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFOQSxtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLEVBREE7O0FBSUE7QUFDQSxvQkFEQSxFQUpBOztBQU9BO0FBQ0Esb0JBREEsRUFQQTs7QUFVQTtBQUNBLGlCQURBLEVBVkE7O0FBYUE7QUFDQSxpQkFEQSxFQWJBOztBQWdCQTtBQUNBLGlCQURBLEVBaEJBLEVBREE7OztBQXFCQSxNQXJCQSxrQkFxQkE7QUFDQTtBQUNBLGtCQURBLEVBQ0E7QUFDQSxvQkFGQSxFQUVBO0FBQ0Esc0JBSEEsRUFHQTtBQUNBLGdCQUpBLEVBSUE7OztBQUdBLHVCQVBBO0FBUUEsZ0NBUkE7O0FBVUEsa0JBVkE7QUFXQSxhQVhBO0FBWUEsa0JBWkE7QUFhQSxnQ0FiQTtBQWNBLGtDQWRBOztBQWdCQSxzQkFoQkE7O0FBa0JBLHFCQWxCQTtBQW1CQSx1QkFuQkE7O0FBcUJBLGlDQXJCQTs7QUF1QkEsdUJBdkJBO0FBd0JBLHNEQXhCQTs7QUEwQkEsR0FoREE7QUFpREEsU0FqREEscUJBaURBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQWpFQTtBQWtFQTtBQUNBLGVBREEsdUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7O0FBY0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBLEVBbEVBOztBQTBGQTtBQUNBO0FBQ0Esa0JBRkEsMEJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxLQUpBO0FBS0Esc0JBTEEsZ0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDJEQUZBO0FBR0EsZUFIQSxtQkFHQSxNQUhBLEVBR0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQVZBOztBQVlBLEtBekJBO0FBMEJBLHFCQTFCQSw2QkEwQkEsTUExQkEsRUEwQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx5QkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsNkNBREE7QUFFQSw0Q0FGQTtBQUdBLG1CQUhBLHFCQUdBO0FBQ0E7QUFDQSxhQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxnQ0FEQTtBQUVBLHNEQUZBLEVBRkE7O0FBTUEsa0hBTkE7QUFPQSxpQkFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLDRCQUZBO0FBR0EsOEJBSEE7O0FBS0E7QUFDQSxXQW5CQTs7O0FBc0JBLE9BOUNBLE1BOENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx5QkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsNkNBREE7QUFFQSw0Q0FGQTtBQUdBLG1CQUhBLHFCQUdBO0FBQ0E7QUFDQSxhQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxnQ0FEQTtBQUVBLHNEQUZBLEVBRkE7O0FBTUEsb0hBTkE7QUFPQSxpQkFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLDRCQUZBO0FBR0EsOEJBSEE7O0FBS0E7QUFDQSxXQW5CQTs7O0FBc0JBO0FBQ0EsS0F6SEE7O0FBMkhBO0FBQ0Esa0JBNUhBLDBCQTRIQSxNQTVIQSxFQTRIQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6SUE7QUEwSUEscUJBMUlBLDZCQTBJQSxNQTFJQSxFQTBJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2SkE7O0FBeUpBO0FBQ0Esb0JBMUpBLDRCQTBKQSxRQTFKQSxFQTBKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEtBO0FBeUtBO0FBQ0Esb0JBMUtBLDRCQTBLQSxRQTFLQSxFQTBLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2TEE7OztBQTBMQTtBQUNBLFlBM0xBLG9CQTJMQSxRQTNMQSxFQTJMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSx1QkFGQTtBQUdBLHNCQUhBOzs7QUFNQTtBQUNBLDJDQURBO0FBRUEsMENBRkE7QUFHQSxpQkFIQSxxQkFHQTtBQUNBO0FBQ0EsV0FMQTs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSw4QkFEQTtBQUVBLG9EQUZBLEVBRkE7O0FBTUEsZ0ZBTkE7QUFPQSxlQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7QUFDQSxTQWxCQTs7O0FBcUJBLEtBdE9BOztBQXdPQSxvQkF4T0EsNEJBd09BLE1BeE9BLEVBd09BO0FBQ0E7QUFDQTtBQUNBLHdEQURBOztBQUdBLEtBN09BOztBQStPQSxjQS9PQSxzQkErT0EsQ0EvT0EsRUErT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5QQTs7QUFxUEEsZ0JBclBBLDBCQXFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNQQTs7QUE2UEEsWUE3UEEsc0JBNlBBO0FBQ0E7QUFDQSxLQS9QQTs7QUFpUUEsY0FqUUEsd0JBaVFBO0FBQ0E7QUFDQSxLQW5RQTs7QUFxUUEsdUJBclFBLGlDQXFRQTtBQUNBO0FBQ0EsS0F2UUE7O0FBeVFBO0FBQ0EsaUJBMVFBLHlCQTBRQSxDQTFRQSxFQTBRQTtBQUNBLEtBM1FBO0FBNFFBLGFBNVFBLHFCQTRRQSxDQTVRQSxFQTRRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLEVBSUEsR0FKQTs7QUFNQTtBQUNBO0FBQ0EsS0F0UkE7O0FBd1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1UkE7QUE2UkE7QUFDQSxLQTlSQTtBQStSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBblNBOztBQXFTQSxlQXJTQSx5QkFxU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9TQTs7O0FBa1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBelVBOztBQTJVQTtBQUNBLHNCQTVVQSw4QkE0VUEsSUE1VUEsRUE0VUEsYUE1VUEsRUE0VUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSw4RkFGQTtBQUdBLGVBSEEsbUJBR0EsTUFIQSxFQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FmQSxNQWVBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7O0FBRUEsU0E1QkE7QUE2QkEsZ0JBN0JBLHNCQTZCQTtBQUNBO0FBQ0EsU0EvQkE7O0FBaUNBLEtBdlhBOztBQXlYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN1hBO0FBOFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0F2WUE7O0FBeVlBO0FBQ0EsbUJBMVlBLDZCQTBZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsWkE7O0FBb1pBLHFCQXBaQSwrQkFvWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHVFQUZBO0FBR0EsZUFIQSxtQkFHQSxNQUhBLEVBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7O0FBVUEsS0FwYUE7O0FBc2FBLHFDQXRhQSw2Q0FzYUEsTUF0YUEsRUFzYUEsTUF0YUEsRUFzYUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbmJBOztBQXFiQSxpQkFyYkEsMkJBcWJBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBMWJBO0FBMmJBLGVBM2JBLHlCQTJiQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQSxLQWhjQSxFQTFGQSxFIiwiZmlsZSI6IjE4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cblx0Lmljb24ge1xuXHRcdHdpZHRoOiA4MHJweDtcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdG9wYWNpdHk6IDAuOTtcblx0fVxuXHRcblx0LnVzZXItZmFjZSB7XG5cdFx0d2lkdGg6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdH1cblx0XG5cdC5wbGF5LWNkIHtcblx0XHR3aWR0aDogMTUwcnB4O1xuXHRcdGhlaWdodDogMTUwcnB4O1xuXHRcdG9wYWNpdHk6IDAuODtcblx0fVxuXHQucmVmcmVzaC1pbmZvLXR4dCB7XG5cdFx0Y29sb3I6ICNGMUYxRjE7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLWJveCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMjAwcnB4O1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDsgXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQucHVibGlzaC1pbmZvLXZsb2dlci1uYW1lIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDQwcnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0cGFkZGluZzogMTBycHg7XG5cdH1cblx0LnB1Ymxpc2gtaW5mby1tdXNpYy1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQucHVibGlzaC1pbmZvLWNvbnRlbnQge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0XHRsaW5lczogNTtcblx0XHR3aWR0aDogNTIwcnB4O1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR9XG5cdC5pY29uLWZpcmUge1xuXHRcdHdpZHRoOiAzNnJweDtcblx0XHRoZWlnaHQ6IDM2cnB4O1xuXHR9XG5cdC5tdWlzYy13b3JkcyB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0XHR3aWR0aDo0MDBycHg7XG5cdH1cblx0LnNvbWUtY291bnRzIHtcblx0XHRmb250LXNpemU6MjRycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0bWFyZ2luLXRvcDogMnJweDtcblx0fVxuXHQub3BlcmF0aW9uLWJveCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7IFxuXHRcdHJpZ2h0OiAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XG5cdH1cblx0Lm9wZXJhdGlvbi1mYWNlLWJveCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xuXHRcdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcblx0XHRib3JkZXItd2lkdGg6IDNycHg7XG5cdH1cblx0LmZvbGxvdy1tZSB7XG5cdFx0d2lkdGg6IDQwcnB4O1xuXHRcdGhlaWdodDogNDBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dG9wOiAtMjBycHg7XG5cdH1cblx0Lmxpa2UtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XG5cdH1cblx0LmNvbW1lbnQtYW5kLXNoYXJlLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDQ1cnB4O1xuXHR9XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cblx0XHQ8IS0tIDx1bmktbGlzdCBAY2hhbmdlPVwib25jaGFuZ2VcIiA6bnVtPVwicGxheWVyTGlzdC5sZW5ndGhcIj4gLS0+XG5cdFx0PGxpc3QgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBAc2Nyb2xsPVwibGlzdFNjcm9sbFwiIEBzY3JvbGxlbmQ9XCJzY3JvbGxcIiA6c2Nyb2xsYWJsZT1cInRydWVcIiA+XHRcblx0XHRcdDxyZWZyZXNoIEBwdWxsaW5nZG93bj1cIm9ucHVsbGluZ2Rvd25cIiBAcmVmcmVzaD1cIm9ucmVmcmVzaFwiIDpkaXNwbGF5PVwicmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxuXHRcdFx0ICA8dGV4dCBjbGFzcz1cInJlZnJlc2gtaW5mby10eHRcIj48L3RleHQ+XG5cdFx0XHQgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxuXHRcdFx0PC9yZWZyZXNoPlxuXHRcdFx0PGNlbGwgOnJlY3ljbGU9XCJmYWxzZVwiIFxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGxheWVyTGlzdFwiIFxuXHRcdFx0XHQ6a2V5PVwiaW5kZXhcIiBcblx0XHRcdFx0OmRhdGEtaW5kZXg9XCJpbmRleFwiIFxuXHRcdFx0XHQ6c3R5bGU9XCJ7J2hlaWdodCc6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XG5cdFx0XHRcdDwhLS0gPHVuaS12aWRlbyA6c3JjPVwiaXRlbS51cmxcIiA6cGxheVN0YXR1cz1cInBsYXlTdGF0dXNcIiA6c2NyZWVuSGVpZ2h0PVwic2NyZWVuSGVpZ2h0XCIgdi1pZj1cInBsYXllckN1ciA9PT0gaW5kZXhcIiBAcGxheT1cIm9ucGxheVwiPjwvdW5pLXZpZGVvPiAtLT5cblx0XHRcdFx0PHZpZGVvIFxuXHRcdFx0XHRcdHJlZj1cIm15VmlkZW9cIiBcblx0XHRcdFx0XHRpZD1cIm15VmlkZW9cIiBcblx0XHRcdFx0XHQ6b2JqZWN0LWZpdD1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnY29udGFpbicgOiAnZmlsbCdcIiBcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS51cmxcIiBcblx0XHRcdFx0XHQ6Y29udHJvbHM9XCJmYWxzZVwiXG5cdFx0XHRcdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdCB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiXG5cdFx0XHRcdFx0bG9vcCBcblx0XHRcdFx0XHRhdXRvcGxheSBcblx0XHRcdFx0XHRzaG93LWxvYWRpbmc9XCJ0cnVlXCJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7XCIgXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIiBcblx0XHRcdFx0XHRAY2xpY2s9XCJwbGF5T3JQYXVzZVwiXG5cdFx0XHRcdFx0QHBsYXk9XCJvbnBsYXlcIiBcblx0XHRcdFx0XHRAZXJyb3I9XCJvbmVycm9yXCIgXG5cdFx0XHRcdFx0QHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCI+PC92aWRlbz5cblx0XHRcdFx0PGltYWdlIFxuXHRcdFx0XHRcdDpsYXp5LWxvYWQ9XCJ0cnVlXCIgXG5cdFx0XHRcdFx0OmZhZGUtc2hvdz1cImZhbHNlXCIgXG5cdFx0XHRcdFx0di1pZj1cIiFpdGVtLnBsYXlcIiBcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5jb3ZlclwiIFxuXHRcdFx0XHRcdDptb2RlPVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdhc3BlY3RGaXQnIDogJ3NjYWxlVG9GaWxsJ1wiIFxuXHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDsgZmlsdGVyOiBibHVyKDEwcHgpO1wiXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+XG5cdFx0XHRcdDwhLS08aW1hZ2UgOmxhenktbG9hZD1cInRydWVcIiA6ZmFkZS1zaG93PVwiZmFsc2VcIiB2LWlmPVwiIWl0ZW0ucGxheVwiIDpzcmM9XCJpdGVtLmNvdmVyXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OiAwO3JpZ2h0OiAwO3RvcDogMDtib3R0b206IDA7IGZpbHRlcjogYmx1cigxMHB4KTtcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrICdweCd9XCI+PC9pbWFnZT4tLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdWJsaXNoLWluZm8tYm94XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicHVibGlzaC1pbmZvLXZsb2dlci1uYW1lXCI+QHt7aXRlbS52bG9nZXJOYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby1jb250ZW50XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1maXJlLnBuZ1wiIGNsYXNzPVwiaWNvbi1maXJlXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtdWlzYy13b3Jkc1wiPnt7aXRlbS52bG9nZXJOYW1lfX3nmoTljp/lo7DliJvkvZw8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHRcdFx0PCEtLSA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvY2QtcGxheS00LmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMTUwcnB4O2hlaWdodDogMTUwcnB4O29wYWNpdHk6IDAuODtcIj48L2ltYWdlPiAtLT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWlzSU9TXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jZC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGxheS1jZFwiIHN0eWxlPVwid2lkdGg6IDEyMHJweDtoZWlnaHQ6IDEyMHJweDtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpc0lPU1wiIDpzcmM9XCInaHR0cHM6Ly9pbW9vYy1uZXdzLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vaW1hZ2UvY2QtcGxheS00LmdpZj90aW1lPScrdGltZXNcIiBcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOinhumikeWxleekuuWPs+S+p+eahOaTjeS9nOaMiemSru+8jOWktOWDjyAtIOeCuei1niAtIOivhOiuuiAtIOi9rOWPkSAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYXRpb24tYm94XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYXRpb24tZmFjZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS52bG9nZXJGYWNlXCIgY2xhc3M9XCJ1c2VyLWZhY2VcIiBAY2xpY2s9XCJnb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lGb2xsb3dWbG9nZXIgJiYgdXNlcklkICE9IHRoaXNWbG9nZXJJZFwiIFxuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1mb2xsb3cucG5nXCIgXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJmb2xsb3dNZShpdGVtLnZsb2dlcklkKVwiIFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb2xsb3ctbWVcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlrZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JTGlrZVRoaXNWbG9nXCIgXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tdW5saWtlLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDEpXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1saWtlLnBuZ1wiIFxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJsaWtlT3JEaXNsaWtlVmxvZygwKVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tnZXRHcmFjZU51bWJlcihpdGVtLmxpa2VDb3VudHMpfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jb21tZW50cy5wbmdcIiBAY2xpY2s9XCJjb21tZW50VG9nZ2xlXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPnt7aXRlbS5jb21tZW50c0NvdW50c319PC90ZXh0PiAtLT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2dldEdyYWNlTnVtYmVyKHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMpfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiBAY2xpY2s9XCJzaGFyZVRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9jZWxsPlxuXHRcdDwvbGlzdD5cblx0XHQ8IS0tIDwvdW5pLWxpc3Q+IC0tPlxuXHRcdFxuXHRcdDx2aWV3PlxuXHRcdFx0PCEtLSDlupXpg6jnqpflj6Nwb3B1cCAtLT5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwiY29tbWVudFwiIHR5cGU9XCJjb21tZW50XCI+XG5cdFx0XHRcdDx1bmktcG9wdXAtY29tbWVudHMgOnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIDp0aGlzVmxvZ0lkPVwidGhpc1Zsb2dJZFwiPjwvdW5pLXBvcHVwLWNvbW1lbnRzPlxuXHRcdFx0PC91bmktcG9wdXA+XG5cdFx0XHQ8dW5pLXBvcHVwIHJlZj1cInNoYXJlXCIgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZcIiB0eXBlPVwic2hhcmVcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1zaGFyZSBcblx0XHRcdFx0XHQ6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgXG5cdFx0XHRcdFx0OnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCIgXG5cdFx0XHRcdFx0OnZsb2dVcmw9XCJ0aGlzVmxvZy51cmxcIlxuXHRcdFx0XHRcdDppc1ByaXZhdGU9XCJ0aGlzVmxvZy5pc1ByaXZhdGVcIlxuXHRcdFx0XHRcdD48L3VuaS1wb3B1cC1zaGFyZT5cblx0XHRcdDwvdW5pLXBvcHVwPlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHNjcmVlbkhlaWdodDoge1xuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9LFxuXHRcdFx0c3JjOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0cGxheVN0YXR1czoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHZpZGVvTGlzdDoge1xuXHRcdFx0XHRkZWZhdWx0OiBbXVxuXHRcdFx0fSxcblx0XHRcdHJlZnJlc2hMaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cGFnaW5nTGlzdDoge1xuXHRcdFx0XHRkZWZhdWx0OiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRoaXNWbG9nOiB7fSxcdFx0XHQvLyDlvZPliY3nmoTnn63op4bpopHlr7nosaFcblx0XHRcdFx0dGhpc1Zsb2dJZDogXCJcIixcdFx0XHQvLyDlvZPliY3nmoTnn63op4bpopHkuLvplK5pZFxuXHRcdFx0XHR0aGlzVmxvZ2VySWQ6IFwiXCIsXHRcdC8vIOW9k+WJjeeahOefreinhumikeWNmuS4u+eahOS4u+mUrmlkXG5cdFx0XHRcdHVzZXJJZDogXCJcIixcdFx0XHRcdC8vIOW9k+WJjeeUqOaIt2lkXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0cmVmcmVzaGluZzogZmFsc2UsXG5cdFx0XHRcdHNob3dSZWZyZXNoTG9hZGluZzogXCJoaWRlXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRwbGF5ZXJDdXI6IDAsXG5cdFx0XHRcdHBhZ2U6IDAsXG5cdFx0XHRcdHRvdGFsUGFnZTogMCxcblx0XHRcdFx0cGxheWVyTGlzdDogdGhpcy52aWRlb0xpc3QsXG5cdFx0XHRcdHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHM6IDAsXG5cdFx0XHRcdFxuXHRcdFx0XHR2aWRlb0NvbnRleHQ6IHt9LFxuXHRcdFx0XHRcblx0XHRcdFx0Y3VycmVudEluZGV4OiAwLFxuXHRcdFx0XHRjb250ZW50T2Zmc2V0WTogMCxcblx0XHRcdFx0XG5cdFx0XHRcdHRpbWVzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcblx0XHRcdFx0XG5cdFx0XHRcdG9iamVjdEZpdDogXCJmaWxsXCIsXG5cdFx0XHRcdGlzSU9TOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5pc0lPUykge1xuXHRcdFx0XHR0aGlzLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy51c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8g5p+l6K+i6aaW6aG155+t6KeG6aKR5YiX6KGoXG5cdFx0XHR0aGlzLmRpc3BsYXlWaWRlb1BhZ2luZyh0aGlzLnBhZ2UgKyAxLCB0cnVlKTtcblx0XHRcdFxuXHRcdFx0dmFyIHZpZGVvQ29udGV4dCA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoJ215VmlkZW8nKTtcblx0XHRcdHRoaXMudmlkZW9Db250ZXh0ID0gdmlkZW9Db250ZXh0O1xuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHJlZnJlc2hMaXN0KHZhbHVlKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBuZXdMaXN0ID0gdmFsdWU7XG5cdFx0XHRcdGlmIChuZXdMaXN0ICE9IG51bGwgJiYgbmV3TGlzdCAhPSB1bmRlZmluZWQgJiYgbmV3TGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG5ld0xpc3Q7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIOmHjee9rlxuXHRcdFx0XHR0aGlzLnBsYXllckN1ciA9IDA7XG5cdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcdFx0dGhpcy5jb250ZW50T2Zmc2V0WSA9MDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHBsYXlTdGF0dXM6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCF2YWwpIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvLyDmiorotoXov4cxMDAw5oiWMTAwMDDnmoTmlbDlrZfosIPmlbTvvIzmr5TlpoIxLjNrLzYuOHdcblx0XHRcdGdldEdyYWNlTnVtYmVyKG51bSkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ3JhY2VOdW1iZXIobnVtKTtcblx0XHRcdH0sXG5cdFx0XHRmcmVzaENvbW1lbnRDb3VudHMoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgdmxvZ0lkID0gdmxvZy52bG9nSWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvY29tbWVudC9jb3VudHM/dmxvZ0lkPVwiICsgdmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRsaWtlT3JEaXNsaWtlVmxvZyhpc0xpa2UpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0aWYgKGlzTGlrZSA9PSAxKSB7XG5cdFx0XHRcdFx0Ly8g5Zac5qyiL+eCuei1nuinhumikVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5sb2dpbldvcmRzID0gXCLor7fnmbvlvZVcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvbGlrZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2cudmxvZ2VySWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlTGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzTGlrZSA9PSAwKSB7XG5cdFx0XHRcdFx0Ly8g5Y+W5raI5Zac5qyiL+eCuei1nuinhumikVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3VubGlrZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2cudmxvZ2VySWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlRGlzbGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDllpzmrKIv54K56LWe55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVMaWtlUGxheUxpc3QodmxvZ0lkKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUxpa2VUaGlzVmxvZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRyZURpc2xpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWFs+azqOWQjueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUZvbGxvd1Zsb2dlciA9IHRydWU7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdC8vIOWPluWFs+WQjueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlQ2FuY2VsUGxheUxpc3QodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUZvbGxvd1Zsb2dlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIOWFs+azqOWNmuS4u1xuXHRcdFx0Zm9sbG93TWUodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9mYW5zL2ZvbGxvdz9teUlkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nZXJJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRtZS5yZUZvbGxvd1BsYXlMaXN0KHZsb2dlcklkKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRnb1VzZXJJbmZvU2VlU2VlKHVzZXJJZCkge1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyUGFnZUlkXCIsIHVzZXJJZCk7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL21lL3Zsb2dlckluZm8/dXNlclBhZ2VJZD1cIiArIHVzZXJJZFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0bGlzdFNjcm9sbChlKSB7XG5cdFx0XHRcdGlmKGUuY29udGVudE9mZnNldC55ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJzaG93TG9hZGluZ1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG93bmxvYWRWbG9nKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dmFyIHBlbmRpbmdMZW5ndGggPSB2bG9nLnVybDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvcHlMaW5rKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHNob3dRUkNvZGUoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XHRcdFx0XG5cdFx0XHQvLyDkuIvmi4nliLfmlrDnmoTov4fnqIvkuK3vvIzmlLnlj5jlpLTpg6h0YWLmmL7npLrnmoTlrZfmoLdcblx0XHRcdG9ucHVsbGluZ2Rvd24oZSkge1xuXHRcdFx0fSxcblx0XHRcdG9ucmVmcmVzaChlKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJoaWRlTG9hZGluZ1wiKTtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gJ+KGkyBQdWxsIFRvIFJlZnJlc2gnXG5cdFx0XHRcdH0sIDMwMClcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdC8vIOmAmui/h2xpc3Tnu4Tku7bnmoTkuIvmi4nliLfmlrDop6blj5HlvZPliY3miYDlnKjpobXpnaLnmoTkuIvmi4nliLfmlrBcblx0XHRcdFx0dW5pLnN0YXJ0UHVsbERvd25SZWZyZXNoKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRvbnBsYXk6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XG5cdFx0XHRcdFx0dGhpcy5kb3BsYXkoMC4xKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0fSxcblx0XHRcdHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUuZGV0YWlsLmN1cnJlbnRUaW1lID4gMC4yKSB7XG5cdFx0XHRcdFx0dGhpcy5kb3BsYXkoZS5kZXRhaWwuY3VycmVudFRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRwbGF5T3JQYXVzZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXlTdGF0dXMgPSB0aGlzLnBsYXlTdGF0dXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXBsYXlTdGF0dXMpIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9ICFwbGF5U3RhdHVzO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRzY3JvbGw6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0bGV0IG9yaWdpbmFsSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcblx0XHRcdFx0bGV0IGlzTmV4dCA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoZS5jb250ZW50T2Zmc2V0LnkgPCB0aGlzLmNvbnRlbnRPZmZzZXRZKSB7XG5cdFx0XHRcdFx0aXNOZXh0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0gZS5jb250ZW50T2Zmc2V0Lnk7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgbnVtID0gdGhpcy5wbGF5ZXJMaXN0Lmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLmFicyh0aGlzLmNvbnRlbnRPZmZzZXRZKSAvIChlLmNvbnRlbnRTaXplLmhlaWdodCAvIG51bSkpO1xuXHRcdFx0XHR0aGlzLm9uY2hhbmdlKHRoaXMuY3VycmVudEluZGV4KTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudGltZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0Ly8g5Yik5pat5aaC5p6c6KeG6aKR5YiX6KGo5oC76ZW/5bqmLeW9k+WJjeS4i+agh++8jOWwkeS6jjPkuKrvvIzliJnlvIDlp4vliIbpobXmn6Xor6LlkI7nu63nmoTop4bpopHvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXG5cdFx0XHRcdGlmICgodGhpcy5wbGF5ZXJMaXN0Lmxlbmd0aCAtIHRoaXMuY3VycmVudEluZGV4KSA8IDMpIHtcblx0XHRcdFx0XHQvLyDlpoLmnpzopoHliIbpobXnmoRwYWdl5ZKM5oC75pWwdG90YWxQYWdl55u4562J77yM5YiZ5rKh5pyJ5pu05aSaXG5cdFx0XHRcdFx0aWYgKHRoaXMucGFnZSA9PSB0aGlzLnRvdGFsUGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlWaWRlb1BhZ2luZyh0aGlzLnBhZ2UgKyAxLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDliIbpobXmn6Xor6LmlrDnmoRsaXN077yM5bm25LiU6L+95Yqg5Yiw546w5pyJbGlzdOS4rVxuXHRcdFx0ZGlzcGxheVZpZGVvUGFnaW5nKHBhZ2UsIG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0Ly8g5p+l6K+i6aaW6aG155+t6KeG6aKR5YiX6KGoXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdHZhciB1c2VySWQgPSBcIlwiO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dXNlcklkID0gbXlVc2VySW5mby5pZDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9pbmRleExpc3Q/dXNlcklkPVwiICsgdXNlcklkICsgXCImcGFnZT1cIiArIHBhZ2UgKyBcIiZwYWdlU2l6ZT0xMFwiLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB2bG9nTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEucm93cztcblx0XHRcdFx0XHRcdFx0dmFyIHRvdGFsUGFnZSA9IHJlc3VsdC5kYXRhLmRhdGEudG90YWw7XG5cdFx0XHRcdFx0XHRcdC8vIG1lLnBsYXllckxpc3QgPSB2bG9nTGlzdDtcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3QuY29uY2F0KHZsb2dMaXN0KTtcblx0XHRcdFx0XHRcdFx0bWUucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRcdG1lLnRvdGFsUGFnZSA9IHRvdGFsUGFnZTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChuZWVkQ2xlYXJMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNvbXBsZXRlKCkge1xuXHRcdFx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG9wbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGlmICh0aW1lID4gMCkge1xuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbmNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdFx0aWYgKGluZGV4ICE9IHRoaXMucGxheWVyQ3VyKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHR0aGlzLnNldFRoaXNWbG9nSW5mbygpO1xuXHRcdFx0XHR0aGlzLmZyZXNoQ29tbWVudENvdW50cygpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6K6+572u5b2T5YmNdmxvZ+eahOS/oeaBr1xuXHRcdFx0c2V0VGhpc1Zsb2dJbmZvKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dGhpcy50aGlzVmxvZyA9IHZsb2c7XG5cdFx0XHRcdHRoaXMudGhpc1Zsb2dJZCA9IHZsb2cudmxvZ0lkO1xuXHRcdFx0XHR0aGlzLnRoaXNWbG9nZXJJZCA9IHZsb2cudmxvZ2VySWQ7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZWZyZXNoVmxvZ0NvdW50cygpIHtcblx0XHRcdFx0Ly8g5p+l6K+i5b2T5YmN54K56LWe5pWw77yM6YeN5paw6LWL5YC857uZ5b2T5YmN6KeG6aKRXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvdG90YWxMaWtlZENvdW50cz92bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdG1lLnJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nLnZsb2dJZCwgY291bnRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2dJZCwgY291bnRzKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmxpa2VDb3VudHMgPSBjb3VudHM7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvbW1lbnRUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuY29tbWVudC5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuc2hhcmUub3BlbigpO1xuXHRcdFx0XHR1bmkuaGlkZVRhYkJhcih7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///184\n");

/***/ }),

/***/ 185:
/*!**************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=style&index=0&lang=css& */ 186);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "width": "80rpx",
    "height": "80rpx",
    "opacity": 0.9
  },
  "user-face": {
    "width": "100rpx",
    "height": "100rpx",
    "borderRadius": "100rpx"
  },
  "play-cd": {
    "width": "150rpx",
    "height": "150rpx",
    "opacity": 0.8
  },
  "refresh-info-txt": {
    "color": "#F1F1F1",
    "textAlign": "center",
    "fontSize": "12"
  },
  "publish-info-box": {
    "position": "absolute",
    "bottom": "200rpx",
    "left": 0,
    "right": 0,
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "publish-info-vloger-name": {
    "color": "#FFFFFF",
    "fontSize": "40rpx",
    "fontWeight": "600",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "publish-info-music-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "publish-info-content": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "fontWeight": "400",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "lines": 5,
    "width": "520rpx",
    "textOverflow": "ellipsis"
  },
  "icon-fire": {
    "width": "36rpx",
    "height": "36rpx"
  },
  "muisc-words": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "width": "400rpx"
  },
  "some-counts": {
    "fontSize": "24rpx",
    "fontWeight": "500",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "2rpx"
  },
  "operation-box": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "alignItems": "center",
    "justifyContent": "center",
    "paddingRight": "20rpx"
  },
  "operation-face-box": {
    "borderRadius": "100rpx",
    "borderColor": "#FFFFFF",
    "borderWidth": "3rpx"
  },
  "follow-me": {
    "width": "40rpx",
    "height": "40rpx",
    "borderRadius": "10",
    "position": "relative",
    "top": "-20rpx"
  },
  "like-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "30rpx"
  },
  "comment-and-share-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "45rpx"
  }
}

/***/ }),

/***/ 187:
/*!***********************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 188);\n/* harmony import */ var _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=script&lang=js& */ 190);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 192).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 192).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"bb89e154\",\n  false,\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoFollowComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQzZKO0FBQzdKLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1OGJmNTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Gb2xsb3dDb21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYmI4OWUxNTRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///187\n");

/***/ }),

/***/ 188:
/*!******************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 189);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 189:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll }
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh }
          },
          [
            _c("u-text", { staticClass: ["refresh-info-txt"] }),
            _c("loading-indicator")
          ]
        ),
        _vm._l(_vm.playerList, function(item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" }
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myFollowVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myFollowVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true"
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate
                    }
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill"
                    }
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c("u-text", { staticClass: ["publish-info-vloger-name"] }, [
                    _vm._v("@" + _vm._s(item.vlogerName))
                  ]),
                  _c("u-text", { staticClass: ["publish-info-content"] }, [
                    _vm._v(_vm._s(item.content))
                  ]),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" }
                      }),
                      _c("u-text", { staticClass: ["muisc-words"] }, [
                        _vm._v(_vm._s(item.vlogerName) + "的原声创作")
                      ])
                    ],
                    1
                  )
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" }
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: {
                            src:
                              "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                              _vm.times
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  !item.doIFollowVloger
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function($event) {
                            _vm.followMe(item.vlogerId)
                          }
                        }
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function($event) {
                                _vm.likeOrDislikeVlog(1)
                              }
                            }
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function($event) {
                                _vm.likeOrDislikeVlog(0)
                              }
                            }
                          })
                        : _vm._e(),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v(_vm._s(item.likeCounts))
                      ])
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle }
                      }),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v(_vm._s(_vm.thisVlogTotalComentCounts))
                      ])
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle }
                      }),
                      _c("u-text", { staticClass: ["some-counts"] }, [
                        _vm._v("分享")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        })
      ],
      2
    ),
    _vm.thisVlog != null && _vm.thisVlog != {}
      ? _c(
          "view",
          [
            _c(
              "uni-popup",
              { ref: "comment", attrs: { type: "comment" } },
              [
                _c("uni-popup-comments", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId
                  }
                })
              ],
              1
            ),
            _c(
              "uni-popup",
              {
                ref: "share",
                attrs: { backgroundColor: "#fff", type: "share" }
              },
              [
                _c("uni-popup-share", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                    vlogUrl: _vm.thisVlog.url,
                    isPrivate: _vm.thisVlog.isPrivate
                  }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 190:
/*!************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=script&lang=js& */ 191);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRaLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMTkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///190\n");

/***/ }),

/***/ 191:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();var _default =\n{\n  props: {\n    screenHeight: {\n      default: 0 },\n\n    src: {\n      default: false },\n\n    playFollowStatus: {\n      default: false },\n\n    playStatus: {\n      default: false },\n\n    videoList: {\n      default: [] },\n\n    refreshList: {\n      default: [] },\n\n    pagingList: {\n      default: [] } },\n\n\n  data: function data() {\n    return {\n      thisVlog: {}, // 当前的短视频对象\n      thisVlogId: \"\", // 当前的短视频主键id\n      thisVlogerId: \"\", // 当前的短视频博主的主键id\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n\n      videoContext: {},\n\n      currentIndex: 0,\n      contentOffsetY: 0,\n\n      times: new Date().getTime(),\n\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\" };\n\n  },\n  created: function created() {\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n\n    var videoContext = uni.createVideoContext('myFollowVideo');\n    this.videoContext = videoContext;\n  },\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n\n    playFollowStatus: function playFollowStatus(val) {\n      var me = this;\n\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    } },\n\n  methods: {\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n\n\n      if (me.playerList == null || me.playerList == undefined || me.playerList.length == 0) {\n        return;\n      }\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        } });\n\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\" });\n\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            } });\n\n          return;\n        }\n\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken() },\n\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000 });\n\n            }\n          } });\n\n\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\" });\n\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            } });\n\n          return;\n        }\n\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken() },\n\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000 });\n\n            }\n          } });\n\n\n      }\n    },\n\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\" });\n\n\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          } });\n\n\n        return;\n      }\n\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken() },\n\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000 });\n\n          }\n        } });\n\n\n    },\n\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId });\n\n    },\n\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n\n    downloadVlog: function downloadVlog() {\n\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n\n    },\n\n    copyLink: function copyLink() {\n      var me = me;\n    },\n\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n\n    onrefresh: function onrefresh(e) {var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        // this.$emit(\"play\", 0.1);\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {\n    },\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        // this.$emit(\"play\", e.detail.currentTime);\n        this.doplay(e.detail.currentTime);\n      }\n    },\n\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playFollowStatus = this.playFollowStatus;\n\n      if (!playFollowStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playFollowStatus = !playFollowStatus;\n    },\n\n\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n\n      var num = this.playerList.length;\n\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n\n      this.times = new Date().getTime();\n\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n\n    },\n\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      } else {\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken() },\n\n        url: serverUrl + \"/vlog/followList?myId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n            me.doTimer();\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000 });\n\n          }\n\n        },\n        complete: function complete() {\n          // me.doTimer();\n        } });\n\n    },\n\n    doTimer: function doTimer() {\n      var me = this;\n      var t = setTimeout(function () {\n\n        if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n          me.videoContext.pause();\n          me.playFollowStatus = false;\n        }\n      }, 3000);\n    },\n\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n\n      if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        this.thisVlog = vlog;\n        this.thisVlogId = vlog.vlogId;\n        this.thisVlogerId = vlog.vlogerId;\n      }\n    },\n\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        } });\n\n    },\n\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true });\n\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFOQSxtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLEVBREE7O0FBSUE7QUFDQSxvQkFEQSxFQUpBOztBQU9BO0FBQ0Esb0JBREEsRUFQQTs7QUFVQTtBQUNBLG9CQURBLEVBVkE7O0FBYUE7QUFDQSxpQkFEQSxFQWJBOztBQWdCQTtBQUNBLGlCQURBLEVBaEJBOztBQW1CQTtBQUNBLGlCQURBLEVBbkJBLEVBREE7OztBQXdCQSxNQXhCQSxrQkF3QkE7QUFDQTtBQUNBLGtCQURBLEVBQ0E7QUFDQSxvQkFGQSxFQUVBO0FBQ0Esc0JBSEEsRUFHQTs7QUFFQSx1QkFMQTtBQU1BLGdDQU5BOztBQVFBLGtCQVJBO0FBU0EsYUFUQTtBQVVBLGtCQVZBO0FBV0EsZ0NBWEE7QUFZQSxrQ0FaQTs7QUFjQSxzQkFkQTs7QUFnQkEscUJBaEJBO0FBaUJBLHVCQWpCQTs7QUFtQkEsaUNBbkJBOztBQXFCQSx1QkFyQkE7QUFzQkEsc0RBdEJBOztBQXdCQSxHQWpEQTtBQWtEQSxTQWxEQSxxQkFrREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0E1REE7QUE2REE7QUFDQSxlQURBLHVCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpBOztBQWNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXRCQSxFQTdEQTs7QUFxRkE7QUFDQSxzQkFEQSxnQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDJEQUZBO0FBR0EsZUFIQSxtQkFHQSxNQUhBLEVBR0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQVZBOztBQVlBLEtBM0JBO0FBNEJBLHFCQTVCQSw2QkE0QkEsTUE1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx5QkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsNkNBREE7QUFFQSw0Q0FGQTtBQUdBLG1CQUhBLHFCQUdBO0FBQ0E7QUFDQSxhQUxBOztBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BLGtIQU5BO0FBT0EsaUJBUEEsbUJBT0EsTUFQQSxFQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBOztBQUtBO0FBQ0EsV0FuQkE7OztBQXNCQSxPQS9DQSxNQStDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEseUJBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLDZDQURBO0FBRUEsNENBRkE7QUFHQSxtQkFIQSxxQkFHQTtBQUNBO0FBQ0EsYUFMQTs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLGdDQURBO0FBRUEsc0RBRkEsRUFGQTs7QUFNQSxvSEFOQTtBQU9BLGlCQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTs7QUFLQTtBQUNBLFdBbkJBOzs7QUFzQkE7QUFDQSxLQTdIQTs7QUErSEE7QUFDQSxrQkFoSUEsMEJBZ0lBLE1BaElBLEVBZ0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUlBO0FBNklBLHFCQTdJQSw2QkE2SUEsTUE3SUEsRUE2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6SkE7O0FBMkpBO0FBQ0Esb0JBNUpBLDRCQTRKQSxRQTVKQSxFQTRKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6S0E7QUEwS0E7QUFDQSxvQkEzS0EsNEJBMktBLFFBM0tBLEVBMktBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhMQTs7O0FBMkxBO0FBQ0EsWUE1TEEsb0JBNExBLFFBNUxBLEVBNExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHVCQUZBO0FBR0Esc0JBSEE7OztBQU1BO0FBQ0EsMkNBREE7QUFFQSwwQ0FGQTtBQUdBLGlCQUhBLHFCQUdBO0FBQ0E7QUFDQSxXQUxBOzs7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSw4QkFEQTtBQUVBLG9EQUZBLEVBRkE7O0FBTUEsZ0ZBTkE7QUFPQSxlQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7QUFDQSxTQWxCQTs7O0FBcUJBLEtBeE9BOztBQTBPQSxvQkExT0EsNEJBME9BLE1BMU9BLEVBME9BO0FBQ0E7QUFDQTtBQUNBLHdEQURBOztBQUdBLEtBL09BOztBQWlQQSxjQWpQQSxzQkFpUEEsQ0FqUEEsRUFpUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJQQTs7QUF1UEEsZ0JBdlBBLDBCQXVQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBL1BBOztBQWlRQSxZQWpRQSxzQkFpUUE7QUFDQTtBQUNBLEtBblFBOztBQXFRQSxjQXJRQSx3QkFxUUE7QUFDQTtBQUNBLEtBdlFBOztBQXlRQSx1QkF6UUEsaUNBeVFBO0FBQ0E7QUFDQSxLQTNRQTs7QUE2UUEsYUE3UUEscUJBNlFBLENBN1FBLEVBNlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxHQUpBOztBQU1BO0FBQ0E7QUFDQSxLQXZSQTs7QUF5UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOVJBO0FBK1JBO0FBQ0EsS0FoU0E7QUFpU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdFNBOztBQXdTQSxlQXhTQSx5QkF3U0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxUQTs7O0FBcVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQTdVQTs7QUErVUE7QUFDQSxzQkFoVkEsOEJBZ1ZBLElBaFZBLEVBZ1ZBLGFBaFZBLEVBZ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBLDhCQURBO0FBRUEsb0RBRkEsRUFGQTs7QUFNQSw2RkFOQTtBQU9BLGVBUEEsbUJBT0EsTUFQQSxFQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FmQSxNQWVBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7O0FBRUEsU0FoQ0E7QUFpQ0EsZ0JBakNBLHNCQWlDQTtBQUNBO0FBQ0EsU0FuQ0E7O0FBcUNBLEtBallBOztBQW1ZQSxXQW5ZQSxxQkFtWUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxFQU1BLElBTkE7QUFPQSxLQTVZQTs7QUE4WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxaQTtBQW1aQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBNVpBOztBQThaQTtBQUNBLG1CQS9aQSw2QkErWkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExYUE7O0FBNGFBLHFCQTVhQSwrQkE0YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHVFQUZBO0FBR0EsZUFIQSxtQkFHQSxNQUhBLEVBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7O0FBVUEsS0E1YkE7O0FBOGJBLHFDQTliQSw2Q0E4YkEsTUE5YkEsRUE4YkEsTUE5YkEsRUE4YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExY0E7O0FBNGNBLGlCQTVjQSwyQkE0Y0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0EsS0FqZEE7QUFrZEEsZUFsZEEseUJBa2RBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBdmRBLEVBckZBLEUiLCJmaWxlIjoiMTkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuXHQuaWNvbiB7XG5cdFx0d2lkdGg6IDgwcnB4O1xuXHRcdGhlaWdodDogODBycHg7XG5cdFx0b3BhY2l0eTogMC45O1xuXHR9XG5cdFxuXHQudXNlci1mYWNlIHtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0fVxuXHRcblx0LnBsYXktY2Qge1xuXHRcdHdpZHRoOiAxNTBycHg7XG5cdFx0aGVpZ2h0OiAxNTBycHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cdC5yZWZyZXNoLWluZm8tdHh0IHtcblx0XHRjb2xvcjogI0YxRjFGMTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAyMDBycHg7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4OyBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWUge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogNDBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLW11c2ljLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tY29udGVudCB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdGxpbmVzOiA1O1xuXHRcdHdpZHRoOiA1MjBycHg7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblx0Lmljb24tZmlyZSB7XG5cdFx0d2lkdGg6IDM2cnB4O1xuXHRcdGhlaWdodDogMzZycHg7XG5cdH1cblx0Lm11aXNjLXdvcmRzIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdHdpZHRoOjQwMHJweDtcblx0fVxuXHQuc29tZS1jb3VudHMge1xuXHRcdGZvbnQtc2l6ZToyNHJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAycnB4O1xuXHR9XG5cdC5vcGVyYXRpb24tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDsgXG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDtcblx0fVxuXHQub3BlcmF0aW9uLWZhY2UtYm94IHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci13aWR0aDogM3JweDtcblx0fVxuXHQuZm9sbG93LW1lIHtcblx0XHR3aWR0aDogNDBycHg7XG5cdFx0aGVpZ2h0OiA0MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC0yMHJweDtcblx0fVxuXHQubGlrZS1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcblx0fVxuXHQuY29tbWVudC1hbmQtc2hhcmUtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XG5cdH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdDwhLS0gPHVuaS1saXN0IEBjaGFuZ2U9XCJvbmNoYW5nZVwiIDpudW09XCJwbGF5ZXJMaXN0Lmxlbmd0aFwiPiAtLT5cblx0XHQ8bGlzdCA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIEBzY3JvbGw9XCJsaXN0U2Nyb2xsXCIgQHNjcm9sbGVuZD1cInNjcm9sbFwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiID5cdFxuXHRcdFx0PHJlZnJlc2ggQHB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIEByZWZyZXNoPVwib25yZWZyZXNoXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XG5cdFx0XHQgIDx0ZXh0IGNsYXNzPVwicmVmcmVzaC1pbmZvLXR4dFwiPjwvdGV4dD5cblx0XHRcdCAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHQ8Y2VsbCA6cmVjeWNsZT1cImZhbHNlXCIgXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwbGF5ZXJMaXN0XCIgXG5cdFx0XHRcdDprZXk9XCJpbmRleFwiIFxuXHRcdFx0XHQ6ZGF0YS1pbmRleD1cImluZGV4XCIgXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0Jzogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIj5cblx0XHRcdFx0PCEtLSA8dW5pLXZpZGVvIDpzcmM9XCJpdGVtLnVybFwiIDpwbGF5U3RhdHVzPVwicGxheVN0YXR1c1wiIDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiIEBwbGF5PVwib25wbGF5XCI+PC91bmktdmlkZW8+IC0tPlxuXHRcdFx0XHQ8dmlkZW8gXG5cdFx0XHRcdFx0cmVmPVwibXlGb2xsb3dWaWRlb1wiIFxuXHRcdFx0XHRcdGlkPVwibXlGb2xsb3dWaWRlb1wiIFxuXHRcdFx0XHRcdDpvYmplY3QtZml0PVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdjb250YWluJyA6ICdmaWxsJ1wiIFxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLnVybFwiIFxuXHRcdFx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcblx0XHRcdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0IHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCJcblx0XHRcdFx0XHRsb29wIFxuXHRcdFx0XHRcdGF1dG9wbGF5XG5cdFx0XHRcdFx0c2hvdy1sb2FkaW5nPVwidHJ1ZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgXG5cdFx0XHRcdFx0QGNsaWNrPVwicGxheU9yUGF1c2VcIlxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXG5cdFx0XHRcdFx0QGVycm9yPVwib25lcnJvclwiIFxuXHRcdFx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiPjwvdmlkZW8+XG5cdFx0XHRcdDxpbWFnZSBcblx0XHRcdFx0XHQ6bGF6eS1sb2FkPVwidHJ1ZVwiIFxuXHRcdFx0XHRcdDpmYWRlLXNob3c9XCJmYWxzZVwiIFxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0uY292ZXJcIiBcblx0XHRcdFx0XHQ6bW9kZT1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnYXNwZWN0Rml0JyA6ICdzY2FsZVRvRmlsbCdcIiBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPlxuXHRcdFx0XHQ8IS0tPGltYWdlIDpsYXp5LWxvYWQ9XCJ0cnVlXCIgOmZhZGUtc2hvdz1cImZhbHNlXCIgdi1pZj1cIiFpdGVtLnBsYXlcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDogMDtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwOyBmaWx0ZXI6IGJsdXIoMTBweCk7XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+LS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiPkB7e2l0ZW0udmxvZ2VyTmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiBjbGFzcz1cImljb24tZmlyZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cblx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NkLXBsYXktNC5naWZcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDE1MHJweDtoZWlnaHQ6IDE1MHJweDtvcGFjaXR5OiAwLjg7XCI+PC9pbWFnZT4gLS0+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIiBzdHlsZT1cIndpZHRoOiAxMjBycHg7aGVpZ2h0OiAxMjBycHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNJT1NcIiA6c3JjPVwiJ2h0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT0nK3RpbWVzXCIgXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSDop4bpopHlsZXnpLrlj7PkvqfnmoTmk43kvZzmjInpkq7vvIzlpLTlg48gLSDngrnotZ4gLSDor4TorrogLSDovazlj5EgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWZhY2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udmxvZ2VyRmFjZVwiIGNsYXNzPVwidXNlci1mYWNlXCIgQGNsaWNrPVwiZ29Vc2VySW5mb1NlZVNlZShpdGVtLnZsb2dlcklkKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JRm9sbG93VmxvZ2VyXCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiBcblx0XHRcdFx0XHRcdEBjbGljaz1cImZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXCIgXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbGxvdy1tZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi11bmxpa2UucG5nXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMSlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0ubGlrZUNvdW50c319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgQGNsaWNrPVwiY29tbWVudFRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0uY29tbWVudHNDb3VudHN9fTwvdGV4dD4gLS0+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3t0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiBAY2xpY2s9XCJzaGFyZVRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9jZWxsPlxuXHRcdDwvbGlzdD5cblx0XHQ8IS0tIDwvdW5pLWxpc3Q+IC0tPlxuXHRcdFxuXHRcdDx2aWV3IHYtaWY9XCJ0aGlzVmxvZyAhPSBudWxsICYmIHRoaXNWbG9nICE9IHt9XCI+XG5cdFx0XHQ8IS0tIOW6lemDqOivhOiuuueql+WPo3BvcHVwIC0tPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJjb21tZW50XCIgdHlwZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwic2hhcmVcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJzaGFyZVwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlXG5cdFx0XHRcdFx0OnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIFxuXHRcdFx0XHRcdDp0aGlzVmxvZ0lkPVwidGhpc1Zsb2dJZFwiIFxuXHRcdFx0XHRcdDp2bG9nVXJsPVwidGhpc1Zsb2cudXJsXCJcblx0XHRcdFx0XHQ6aXNQcml2YXRlPVwidGhpc1Zsb2cuaXNQcml2YXRlXCJcblx0XHRcdFx0XHQ+PC91bmktcG9wdXAtc2hhcmU+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRzY3JlZW5IZWlnaHQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogMFxuXHRcdFx0fSxcblx0XHRcdHNyYzoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHBsYXlGb2xsb3dTdGF0dXM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRwbGF5U3RhdHVzOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9MaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cmVmcmVzaExpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH0sXG5cdFx0XHRwYWdpbmdMaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXG5cdFx0XHRcdHRoaXNWbG9nZXJJZDogXCJcIixcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Y2a5Li755qE5Li76ZSuaWRcblx0XHRcdFx0XG5cdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLFxuXHRcdFx0XHRzaG93UmVmcmVzaExvYWRpbmc6IFwiaGlkZVwiLFxuXHRcdFx0XHRcblx0XHRcdFx0cGxheWVyQ3VyOiAwLFxuXHRcdFx0XHRwYWdlOiAwLFxuXHRcdFx0XHR0b3RhbFBhZ2U6IDAsXG5cdFx0XHRcdHBsYXllckxpc3Q6IHRoaXMudmlkZW9MaXN0LFxuXHRcdFx0XHR0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0dmlkZW9Db250ZXh0OiB7fSxcblx0XHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRJbmRleDogMCxcblx0XHRcdFx0Y29udGVudE9mZnNldFk6IDAsXG5cdFx0XHRcdFxuXHRcdFx0XHR0aW1lczogbmV3IERhdGUoKS5nZXRUaW1lKCksXG5cdFx0XHRcdFxuXHRcdFx0XHRvYmplY3RGaXQ6IFwiZmlsbFwiLFxuXHRcdFx0XHRpc0lPUzogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdGlmKCF0aGlzLmlzSU9TKSB7XG5cdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIHRydWUpO1xuXHRcdFx0XG5cdFx0XHR2YXIgdmlkZW9Db250ZXh0ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlGb2xsb3dWaWRlbycpO1xuXHRcdFx0dGhpcy52aWRlb0NvbnRleHQgPSB2aWRlb0NvbnRleHQ7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cmVmcmVzaExpc3QodmFsdWUpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKG5ld0xpc3QgIT0gbnVsbCAmJiBuZXdMaXN0ICE9IHVuZGVmaW5lZCAmJiBuZXdMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6YeN572uXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheUZvbGxvd1N0YXR1czogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXZhbCkge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ID09IG51bGwgfHwgbWUucGxheWVyTGlzdCA9PSB1bmRlZmluZWQgfHwgbWUucGxheWVyTGlzdC5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dmFyIHZsb2dJZCA9IHZsb2cudmxvZ0lkO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2NvbW1lbnQvY291bnRzP3Zsb2dJZD1cIiArIHZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bGlrZU9yRGlzbGlrZVZsb2coaXNMaWtlKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdGlmIChpc0xpa2UgPT0gMSkge1xuXHRcdFx0XHRcdC8vIOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2xpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZUxpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSBlbHNlIGlmIChpc0xpa2UgPT0gMCkge1xuXHRcdFx0XHRcdC8vIOWPlua2iOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy91bmxpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZURpc2xpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5Zac5qyiL+eCuei1nueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlTGlrZVBsYXlMaXN0KHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUxpa2VUaGlzVmxvZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRyZURpc2xpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ0lkID09IHZsb2dJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdC8vIOWPluWFs+WQjueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlQ2FuY2VsUGxheUxpc3QodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUZvbGxvd1Zsb2dlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIOWFs+azqOWNmuS4u1xuXHRcdFx0Zm9sbG93TWUodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmFucy9mb2xsb3c/bXlJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZ2VySWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUucmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Z29Vc2VySW5mb1NlZVNlZSh1c2VySWQpIHtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlclBhZ2VJZFwiLCB1c2VySWQpO1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9tZS92bG9nZXJJbmZvP3VzZXJQYWdlSWQ9XCIgKyB1c2VySWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGxpc3RTY3JvbGwoZSkge1xuXHRcdFx0XHRpZihlLmNvbnRlbnRPZmZzZXQueSA+IDApIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KFwic2hvd0xvYWRpbmdcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGRvd25sb2FkVmxvZygpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvcHlMaW5rKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHNob3dRUkNvZGUoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRvbnJlZnJlc2goZSkge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KFwiaGlkZUxvYWRpbmdcIik7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoVGV4dCA9ICfihpMgUHVsbCBUbyBSZWZyZXNoJ1xuXHRcdFx0XHR9LCAzMDApXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDpgJrov4dsaXN057uE5Lu255qE5LiL5ouJ5Yi35paw6Kem5Y+R5b2T5YmN5omA5Zyo6aG16Z2i55qE5LiL5ouJ5Yi35pawXG5cdFx0XHRcdHVuaS5zdGFydFB1bGxEb3duUmVmcmVzaCgpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0b25wbGF5OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xuXHRcdFx0XHRcdC8vIHRoaXMuJGVtaXQoXCJwbGF5XCIsIDAuMSk7XG5cdFx0XHRcdFx0dGhpcy5kb3BsYXkoMC4xKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0fSxcblx0XHRcdHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUuZGV0YWlsLmN1cnJlbnRUaW1lID4gMC4yKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy4kZW1pdChcInBsYXlcIiwgZS5kZXRhaWwuY3VycmVudFRpbWUpO1xuXHRcdFx0XHRcdHRoaXMuZG9wbGF5KGUuZGV0YWlsLmN1cnJlbnRUaW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheU9yUGF1c2UoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5Rm9sbG93U3RhdHVzID0gdGhpcy5wbGF5Rm9sbG93U3RhdHVzO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCFwbGF5Rm9sbG93U3RhdHVzKSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBsYXlGb2xsb3dTdGF0dXMgPSAhcGxheUZvbGxvd1N0YXR1cztcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0c2Nyb2xsOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGxldCBvcmlnaW5hbEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XG5cdFx0XHRcdGxldCBpc05leHQgPSBmYWxzZTtcblx0XHRcdFx0aWYgKGUuY29udGVudE9mZnNldC55IDwgdGhpcy5jb250ZW50T2Zmc2V0WSkge1xuXHRcdFx0XHRcdGlzTmV4dCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jb250ZW50T2Zmc2V0WSA9IGUuY29udGVudE9mZnNldC55O1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIG51bSA9IHRoaXMucGxheWVyTGlzdC5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5jb250ZW50T2Zmc2V0WSkgLyAoZS5jb250ZW50U2l6ZS5oZWlnaHQgLyBudW0pKTtcblx0XHRcdFx0dGhpcy5vbmNoYW5nZSh0aGlzLmN1cnJlbnRJbmRleCk7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnRpbWVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDliKTmlq3lpoLmnpzop4bpopHliJfooajmgLvplb/luqYt5b2T5YmN5LiL5qCH77yM5bCR5LqOM+S4qu+8jOWImeW8gOWni+WIhumhteafpeivouWQjue7reeahOinhumike+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xuXHRcdFx0XHRcdC8vIOWmguaenOimgeWIhumhteeahHBhZ2XlkozmgLvmlbB0b3RhbFBhZ2Xnm7jnrYnvvIzliJnmsqHmnInmm7TlpJpcblx0XHRcdFx0XHRpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWIhumhteafpeivouaWsOeahGxpc3TvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXG5cdFx0XHRkaXNwbGF5VmlkZW9QYWdpbmcocGFnZSwgbmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9mb2xsb3dMaXN0P215SWQ9XCIgKyB1c2VySWQgKyBcIiZwYWdlPVwiICsgcGFnZSArIFwiJnBhZ2VTaXplPTEwXCIsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZsb2dMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3QuY29uY2F0KHZsb2dMaXN0KTtcblx0XHRcdFx0XHRcdFx0bWUucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRcdG1lLnRvdGFsUGFnZSA9IHRvdGFsUGFnZTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChuZWVkQ2xlYXJMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWUuZG9UaW1lcigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHQvLyBtZS5kb1RpbWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGRvVGltZXIoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciB0ID0gc2V0VGltZW91dCgoKSA9PiB7IFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ICE9IG51bGwgJiYgbWUucGxheWVyTGlzdCAhPSB1bmRlZmluZWQgJiYgbWUucGxheWVyTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9LCAzMDAwKVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG9wbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGlmICh0aW1lID4gMCkge1xuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbmNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdFx0aWYgKGluZGV4ICE9IHRoaXMucGxheWVyQ3VyKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHR0aGlzLnNldFRoaXNWbG9nSW5mbygpO1xuXHRcdFx0XHR0aGlzLmZyZXNoQ29tbWVudENvdW50cygpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6K6+572u5b2T5YmNdmxvZ+eahOS/oeaBr1xuXHRcdFx0c2V0VGhpc1Zsb2dJbmZvKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG1lLnBsYXllckxpc3QgIT0gbnVsbCAmJiBtZS5wbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBtZS5wbGF5ZXJMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2cgPSB2bG9nO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2dJZCA9IHZsb2cudmxvZ0lkO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2dlcklkID0gdmxvZy52bG9nZXJJZDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVmcmVzaFZsb2dDb3VudHMoKSB7XG5cdFx0XHRcdC8vIOafpeivouW9k+WJjeeCuei1nuaVsO+8jOmHjeaWsOi1i+WAvOe7meW9k+WJjeinhumikVxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3RvdGFsTGlrZWRDb3VudHM/dmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBjb3VudHMgPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0XHRtZS5yZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QodmxvZy52bG9nSWQsIGNvdW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nSWQsIGNvdW50cykge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmxpa2VDb3VudHMgPSBjb3VudHM7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvbW1lbnRUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuY29tbWVudC5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuc2hhcmUub3BlbigpO1xuXHRcdFx0XHR1bmkuaGlkZVRhYkJhcih7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///191\n");

/***/ }),

/***/ 192:
/*!********************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 193);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "width": "80rpx",
    "height": "80rpx",
    "opacity": 0.9
  },
  "user-face": {
    "width": "100rpx",
    "height": "100rpx",
    "borderRadius": "100rpx"
  },
  "play-cd": {
    "width": "150rpx",
    "height": "150rpx",
    "opacity": 0.8
  },
  "refresh-info-txt": {
    "color": "#F1F1F1",
    "textAlign": "center",
    "fontSize": "12"
  },
  "publish-info-box": {
    "position": "absolute",
    "bottom": "200rpx",
    "left": 0,
    "right": 0,
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "publish-info-vloger-name": {
    "color": "#FFFFFF",
    "fontSize": "40rpx",
    "fontWeight": "600",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "publish-info-music-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "publish-info-content": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "fontWeight": "400",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "lines": 5,
    "width": "520rpx",
    "textOverflow": "ellipsis"
  },
  "icon-fire": {
    "width": "36rpx",
    "height": "36rpx"
  },
  "muisc-words": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "width": "400rpx"
  },
  "some-counts": {
    "fontSize": "24rpx",
    "fontWeight": "500",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "2rpx"
  },
  "operation-box": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "alignItems": "center",
    "justifyContent": "center",
    "paddingRight": "20rpx"
  },
  "operation-face-box": {
    "borderRadius": "100rpx",
    "borderColor": "#FFFFFF",
    "borderWidth": "3rpx"
  },
  "follow-me": {
    "width": "40rpx",
    "height": "40rpx",
    "borderRadius": "10",
    "position": "relative",
    "top": "-20rpx"
  },
  "like-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "30rpx"
  },
  "comment-and-share-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "45rpx"
  }
}

/***/ }),

/***/ 194:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 195);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "#000000"
  },
  "header": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "center",
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "header-center": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "header-left": {
    "color": "#999999",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "fontFamily": "iconfont"
  },
  "header-right": {
    "color": "#999999",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "fontFamily": "iconfont"
  },
  "header-right-search": {
    "height": "100rpx"
  },
  "header-item": {
    "alignItems": "center",
    "marginLeft": "6rpx",
    "marginRight": "6rpx"
  },
  "header-item-title": {
    "width": "120rpx",
    "textAlign": "center",
    "height": "60rpx",
    "lineHeight": "60rpx",
    "color": "#FFFFFF",
    "fontSize": "16",
    "fontWeight": "600"
  },
  "header-refresh-title": {
    "width": "300rpx",
    "textAlign": "center",
    "height": "60rpx",
    "lineHeight": "60rpx",
    "color": "#FFFFFF",
    "fontSize": "16",
    "fontWeight": "600"
  },
  "header-item-line": {
    "height": "5rpx",
    "lineHeight": "8rpx",
    "width": "60rpx",
    "borderRadius": "8rpx"
  },
  "my-swiper": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "near-by": {
    "backgroundColor": "#000000",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "my-follow": {
    "backgroundColor": "#000000",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "warn-info": {
    "color": "#FFFFFF",
    "fontSize": "36rpx",
    "fontWeight": "600"
  },
  "normal-img": {
    "width": "50rpx",
    "height": "50rpx",
    "opacity": 0.8
  }
}

/***/ }),

/***/ 2:
/*!********************************************************************************!*\
  !*** C:/Users/555/Desktop/RedBook-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/555/Desktop/RedBook-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "activate-line": {
    "backgroundColor": "#FFFFFF"
  }
}

/***/ })

/******/ });