module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// jshint ignore: start\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"10%\",\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log(\"submission\", this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToogle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? \"Disabled\" : \"Enabled\";\n    const textStatus = enabled ? \"enabled\" : \"disabled\";\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Default discount\",\n      description: \"Add a product to Sample App, it will automatically be discounted.\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      sectioned: true\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n      onSubmit: this.handleSubmit\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n      value: discount,\n      onChange: this.handleChange(\"discount\"),\n      label: \"Discount percentage\",\n      type: \"discount\"\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      distribution: \"trailing\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      primary: true,\n      submit: true\n    }, \"Save\")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Price Updates\",\n      description: \"Temporarily disable all Sample App price updates\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"SettingToggle\"], {\n      action: {\n        content: contentStatus,\n        onAction: this.handleToogle\n      },\n      enabled: enabled\n    }, \"This setting is \", \"\", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextStyle\"], {\n      variation: \"strong\"\n    }, textStatus)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvb2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBY0EsTUFBTUEsZUFBTixTQUE4QkMsNENBQUssQ0FBQ0MsU0FBcEMsQ0FBOEM7QUFBQTtBQUFBOztBQUFBLG1DQUNwQztBQUNOQyxjQUFRLEVBQUUsS0FESjtBQUVOQyxhQUFPLEVBQUU7QUFGSCxLQURvQzs7QUFBQSwwQ0FxRDdCLE1BQU07QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUUsS0FBS0csS0FBTCxDQUFXSDtBQURULE9BQWQ7QUFHQUksYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLRixLQUEvQjtBQUNELEtBMUQyQzs7QUFBQSwwQ0E0RDVCRyxLQUFELElBQVc7QUFDeEIsYUFBUUMsS0FBRCxJQUFXLEtBQUtMLFFBQUwsQ0FBYztBQUFFLFNBQUNJLEtBQUQsR0FBU0M7QUFBWCxPQUFkLENBQWxCO0FBQ0QsS0E5RDJDOztBQUFBLDBDQWdFN0IsTUFBTTtBQUNuQixXQUFLTCxRQUFMLENBQWMsQ0FBQztBQUFFRDtBQUFGLE9BQUQsS0FBaUI7QUFDN0IsZUFBTztBQUFFQSxpQkFBTyxFQUFFLENBQUNBO0FBQVosU0FBUDtBQUNELE9BRkQ7QUFHRCxLQXBFMkM7QUFBQTs7QUFNNUNPLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRVIsY0FBRjtBQUFZQztBQUFaLFFBQXdCLEtBQUtFLEtBQW5DO0FBQ0EsVUFBTU0sYUFBYSxHQUFHUixPQUFPLEdBQUcsVUFBSCxHQUFnQixTQUE3QztBQUNBLFVBQU1TLFVBQVUsR0FBR1QsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVBLFdBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxXQUFLLEVBQUMsa0JBRFI7QUFFRSxpQkFBVyxFQUFDO0FBRmQsT0FJRSxNQUFDLHFEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0UsTUFBQyxxREFBRDtBQUFNLGNBQVEsRUFBRSxLQUFLVTtBQUFyQixPQUNFLE1BQUMsMkRBQUQsUUFDRSxNQUFDLDBEQUFEO0FBQ0UsV0FBSyxFQUFFWCxRQURUO0FBRUUsY0FBUSxFQUFFLEtBQUtZLFlBQUwsQ0FBa0IsVUFBbEIsQ0FGWjtBQUdFLFdBQUssRUFBQyxxQkFIUjtBQUlFLFVBQUksRUFBQztBQUpQLE1BREYsRUFPRSxNQUFDLHNEQUFEO0FBQU8sa0JBQVksRUFBQztBQUFwQixPQUNFLE1BQUMsdURBQUQ7QUFBUSxhQUFPLE1BQWY7QUFBZ0IsWUFBTTtBQUF0QixjQURGLENBUEYsQ0FERixDQURGLENBSkYsQ0FERixFQXVCRSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxXQUFLLEVBQUMsZUFEUjtBQUVFLGlCQUFXLEVBQUM7QUFGZCxPQUlFLE1BQUMsOERBQUQ7QUFDRSxZQUFNLEVBQUU7QUFBRUMsZUFBTyxFQUFFSixhQUFYO0FBQTBCSyxnQkFBUSxFQUFFLEtBQUtDO0FBQXpDLE9BRFY7QUFFRSxhQUFPLEVBQUVkO0FBRlgsMkJBSW1CLEVBSm5CLEVBS0UsTUFBQywwREFBRDtBQUFXLGVBQVMsRUFBQztBQUFyQixPQUErQlMsVUFBL0IsQ0FMRixDQUpGLENBdkJGLENBREYsQ0FERjtBQXdDRDs7QUFuRDJDOztBQXVFL0JiLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGpzaGludCBpZ25vcmU6IHN0YXJ0XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgTGF5b3V0LFxuICBQYWdlLFxuICBTZXR0aW5nVG9nZ2xlLFxuICBTdGFjayxcbiAgVGV4dEZpZWxkLFxuICBUZXh0U3R5bGUsXG4gIENoZWNrYm94LFxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNjb3VudDogXCIxMCVcIixcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/IFwiRGlzYWJsZWRcIiA6IFwiRW5hYmxlZFwiO1xuICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gXCJlbmFibGVkXCIgOiBcImRpc2FibGVkXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIkRlZmF1bHQgZGlzY291bnRcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZShcImRpc2NvdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50IHBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIlByaWNlIFVwZGF0ZXNcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmlseSBkaXNhYmxlIGFsbCBTYW1wbGUgQXBwIHByaWNlIHVwZGF0ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgIGFjdGlvbj17eyBjb250ZW50OiBjb250ZW50U3RhdHVzLCBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb29nbGUgfX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGhpcyBzZXR0aW5nIGlzIHtcIlwifVxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPnt0ZXh0U3RhdHVzfTwvVGV4dFN0eWxlPlxuICAgICAgICAgICAgPC9TZXR0aW5nVG9nZ2xlPlxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25cIiwgdGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvb2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7IGVuYWJsZWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });