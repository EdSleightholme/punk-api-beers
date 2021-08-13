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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/BeerCell.js":
/*!***************************!*\
  !*** ./pages/BeerCell.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerCell.js";




const BeerCell = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_outer_wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_wrapper,
      onClick: props.setSelectedBeer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_img,
        src: props.beer.image_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_text_wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_title,
          children: props.beer.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cell_tagline,
          children: props.beer.tagline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BeerCell);

/***/ }),

/***/ "./pages/BeerDetails.js":
/*!******************************!*\
  !*** ./pages/BeerDetails.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerDetails.js";




const BeerDetails = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_img,
      src: props.beer.image_url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_text_wrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_title,
        children: props.beer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_abv,
        children: ["ABV: ", props.beer.abv]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_description,
        children: props.beer.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "Why Not try with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), props.beer.food_pairing.map(foodPairing => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail_food_pairing,
        children: foodPairing
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BeerDetails);

/***/ }),

/***/ "./pages/BeerTable.js":
/*!****************************!*\
  !*** ./pages/BeerTable.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BeerCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeerCell */ "./pages/BeerCell.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerTable.js";





const BeerTable = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: props.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: "loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined) : props.beers.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: "No Data To Display"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid_wrapper,
      children: props.beers.map((beer, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_BeerCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
          beer: beer,
          setSelectedBeer: () => {
            props.setSelectedBeer(beer);
          }
        }, index + "beer", false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 24
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BeerTable);

/***/ }),

/***/ "./pages/api_caller.js":
/*!*****************************!*\
  !*** ./pages/api_caller.js ***!
  \*****************************/
/*! exports provided: fetchAllBeers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllBeers", function() { return fetchAllBeers; });
const fetchAllBeers = async () => {
  return fetch(" https://api.punkapi.com/v2/beers", {
    method: "GET"
  }).then(response => response.json()).then(data => {
    return data.map(beer => {
      return {
        abv: beer.abv,
        description: beer.description,
        food_pairing: beer.food_pairing,
        image_url: beer.image_url,
        name: beer.name,
        tagline: beer.tagline
      };
    });
  });
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_caller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_caller */ "./pages/api_caller.js");
/* harmony import */ var _BeerTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BeerTable */ "./pages/BeerTable.js");
/* harmony import */ var _BeerDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BeerDetails */ "./pages/BeerDetails.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./pages/modal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\index.js";







function Home() {
  const {
    0: beers,
    1: setBeers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedBeer,
    1: setSelectedBeer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const loadBeers = async () => {
    setLoading(true);
    const allBeers = await Object(_api_caller__WEBPACK_IMPORTED_MODULE_1__["fetchAllBeers"])();
    setBeers(allBeers);
    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadBeers();
    return;
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
        onClick: () => {
          setSelectedBeer();
        },
        children: "PUNK API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_BeerTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loading: loading,
      beers: beers,
      setSelectedBeer: setSelectedBeer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      display: !!selectedBeer,
      setDisplay: setSelectedBeer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_BeerDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
        beer: selectedBeer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("footer", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: "Made By Ed.S | Powered by PunkApi.com/v2 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./pages/modal.js":
/*!************************!*\
  !*** ./pages/modal.js ***!
  \************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\modal.js";



function Modal(props) {
  if (!props.display) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal_outer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal_content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          onClick: () => props.setDisplay(false),
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal_close_button,
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), props.children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }
}

/***/ }),

/***/ "./pages/styles.module.css":
/*!*********************************!*\
  !*** ./pages/styles.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "styles_header__4wcQH",
	"footer": "styles_footer__3Unnl",
	"grid_wrapper": "styles_grid_wrapper__Q8EXh",
	"grid_cell": "styles_grid_cell__3F17P",
	"cell_wrapper": "styles_cell_wrapper__2orgA",
	"cell_text_wrapper": "styles_cell_text_wrapper__6rpJV",
	"cell_outer_wrapper": "styles_cell_outer_wrapper__lEJd5",
	"cell_img": "styles_cell_img__2uoAv",
	"cell_title": "styles_cell_title__3fjzZ",
	"detail_text_wrapper": "styles_detail_text_wrapper__Lzmvw",
	"detail_wrapper": "styles_detail_wrapper__1DmKp",
	"detail_img": "styles_detail_img__2iG7Y",
	"detail_title": "styles_detail_title__3HrpL",
	"modal_outer": "styles_modal_outer__3q5n6",
	"modal_content": "styles_modal_content__3W7j9",
	"modal_close_button": "styles_modal_close_button__3jnjy"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQmVlckNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQmVlckRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQmVlclRhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaV9jYWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCZWVyQ2VsbCIsInByb3BzIiwic3R5bGVzIiwiY2VsbF9vdXRlcl93cmFwcGVyIiwiY2VsbF93cmFwcGVyIiwic2V0U2VsZWN0ZWRCZWVyIiwiY2VsbF9pbWciLCJiZWVyIiwiaW1hZ2VfdXJsIiwiY2VsbF90ZXh0X3dyYXBwZXIiLCJjZWxsX3RpdGxlIiwibmFtZSIsImNlbGxfdGFnbGluZSIsInRhZ2xpbmUiLCJCZWVyRGV0YWlscyIsImRldGFpbF93cmFwcGVyIiwiZGV0YWlsX2ltZyIsImRldGFpbF90ZXh0X3dyYXBwZXIiLCJkZXRhaWxfdGl0bGUiLCJkZXRhaWxfYWJ2IiwiYWJ2IiwiZGV0YWlsX2Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJmb29kX3BhaXJpbmciLCJtYXAiLCJmb29kUGFpcmluZyIsImRldGFpbF9mb29kX3BhaXJpbmciLCJCZWVyVGFibGUiLCJsb2FkaW5nIiwiYmVlcnMiLCJsZW5ndGgiLCJncmlkX3dyYXBwZXIiLCJpbmRleCIsImZldGNoQWxsQmVlcnMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiSG9tZSIsInNldEJlZXJzIiwidXNlU3RhdGUiLCJzZWxlY3RlZEJlZXIiLCJzZXRMb2FkaW5nIiwibG9hZEJlZXJzIiwiYWxsQmVlcnMiLCJ1c2VFZmZlY3QiLCJoZWFkZXIiLCJmb290ZXIiLCJNb2RhbCIsImRpc3BsYXkiLCJtb2RhbF9vdXRlciIsIm1vZGFsX2NvbnRlbnQiLCJzZXREaXNwbGF5IiwibW9kYWxfY2xvc2VfYnV0dG9uIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOzs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixzQkFDRTtBQUNFLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0Msa0JBRHBCO0FBQUEsMkJBR0U7QUFDRSxlQUFTLEVBQUVELHlEQUFNLENBQUNFLFlBRHBCO0FBRUUsYUFBTyxFQUFFSCxLQUFLLENBQUNJLGVBRmpCO0FB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Q3BDRDtBQUNBOztBQUNPLFNBQVNDLEtBQVQsQ0FBZWpELEtBQWYsRUFBc0I7QUFDM0IsTUFBSSxDQUFDQSxLQUFLLENBQUNrRCxPQUFYLEVBQW9CO0FBQ2xCLHdCQUFPLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxHQUZELE1BRU87QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBRWpELHlEQUFNLENBQUNrRCxXQUF2QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRWxELHlEQUFNLENBQUNtRCxhQUF2QjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRSxNQUFNcEQsS0FBSyxDQUFDcUQsVUFBTixDQUFpQixLQUFqQixDQURqQjtBQUVFLG1CQUFTLEVBQUVwRCx5REFBTSxDQUFDcUQsa0JBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQVFHdEQsS0FBSyxDQUFDdUQsUUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFjRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBCZWVyQ2VsbCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfb3V0ZXJfd3JhcHBlcn1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfd3JhcHBlcn1cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZXRTZWxlY3RlZEJlZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfaW1nfSBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90YWdsaW5lfT57cHJvcHMuYmVlci50YWdsaW5lfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJDZWxsOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQmVlckRldGFpbHMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfd3JhcHBlcn1cclxuICAgID5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfaW1nfSBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Fidn0+QUJWOiB7cHJvcHMuYmVlci5hYnZ9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZGVzY3JpcHRpb259Pntwcm9wcy5iZWVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aDM+V2h5IE5vdCB0cnkgd2l0aDo8L2gzPlxyXG4gICAgICAgIHtwcm9wcy5iZWVyLmZvb2RfcGFpcmluZy5tYXAoZm9vZFBhaXJpbmcgPT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Zvb2RfcGFpcmluZ30+e2Zvb2RQYWlyaW5nfTwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJEZXRhaWxzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJlZXJDZWxsIGZyb20gXCIuL0JlZXJDZWxsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJlZXJUYWJsZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb3BzLmxvYWRpbmcgPyAoXHJcbiAgICAgICAgPHA+bG9hZGluZy4uLi48L3A+XHJcbiAgICAgICkgOiBwcm9wcy5iZWVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHA+Tm8gRGF0YSBUbyBEaXNwbGF5PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmJlZXJzLm1hcCgoYmVlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmVlckNlbGxcclxuICAgICAgICAgICAgICAgICAgYmVlcj17YmVlcn1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCArIFwiYmVlclwifVxyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEJlZXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZEJlZXIoYmVlcilcclxuICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVlclRhYmxlO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGZldGNoQWxsQmVlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgXCIgaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfVxyXG5cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhLm1hcChiZWVyID0+IHtyZXR1cm57IFxyXG4gICAgICAgIGFidjogYmVlci5hYnYsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBiZWVyLmRlc2NyaXB0aW9uLCBcclxuICAgICAgICBmb29kX3BhaXJpbmc6IGJlZXIuZm9vZF9wYWlyaW5nLFxyXG4gICAgICAgIGltYWdlX3VybDpiZWVyLmltYWdlX3VybCxcclxuICAgICAgICBuYW1lOmJlZXIubmFtZSxcclxuICAgICAgICB0YWdsaW5lOmJlZXIudGFnbGluZVxyXG4gICAgICAgfX0pXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hBbGxCZWVycyB9IGZyb20gXCIuL2FwaV9jYWxsZXJcIjtcclxuaW1wb3J0IEJlZXJUYWJsZSBmcm9tICcuL0JlZXJUYWJsZSdcclxuaW1wb3J0IEJlZXJEZXRhaWxzIGZyb20gJy4vQmVlckRldGFpbHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW2JlZXJzLCBzZXRCZWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmVlciwgc2V0U2VsZWN0ZWRCZWVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsb2FkQmVlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgYWxsQmVlcnMgPSBhd2FpdCBmZXRjaEFsbEJlZXJzKCk7XHJcbiAgICBzZXRCZWVycyhhbGxCZWVycyk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEJlZXJzKClcclxuICAgIHJldHVyblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRCZWVyKCkgfX0gPlBVTksgQVBJPC9oMT5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPEJlZXJUYWJsZSBsb2FkaW5nPXtsb2FkaW5nfSBiZWVycz17YmVlcnN9IHNldFNlbGVjdGVkQmVlcj17c2V0U2VsZWN0ZWRCZWVyfSAvPlxyXG4gICAgPE1vZGFsIGRpc3BsYXk9eyEhc2VsZWN0ZWRCZWVyfSBzZXREaXNwbGF5PXtzZXRTZWxlY3RlZEJlZXJ9PlxyXG4gICAgICA8QmVlckRldGFpbHMgYmVlcj17c2VsZWN0ZWRCZWVyfSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5NYWRlIEJ5IEVkLlMgfCBQb3dlcmVkIGJ5IFB1bmtBcGkuY29tL3YyIDwvZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XHJcbiAgaWYgKCFwcm9wcy5kaXNwbGF5KSB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX291dGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXREaXNwbGF5KGZhbHNlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY2xvc2VfYnV0dG9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzR3Y1FIXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM1VubmxcIixcblx0XCJncmlkX3dyYXBwZXJcIjogXCJzdHlsZXNfZ3JpZF93cmFwcGVyX19ROEVYaFwiLFxuXHRcImdyaWRfY2VsbFwiOiBcInN0eWxlc19ncmlkX2NlbGxfXzNGMTdQXCIsXG5cdFwiY2VsbF93cmFwcGVyXCI6IFwic3R5bGVzX2NlbGxfd3JhcHBlcl9fMm9yZ0FcIixcblx0XCJjZWxsX3RleHRfd3JhcHBlclwiOiBcInN0eWxlc19jZWxsX3RleHRfd3JhcHBlcl9fNnJwSlZcIixcblx0XCJjZWxsX291dGVyX3dyYXBwZXJcIjogXCJzdHlsZXNfY2VsbF9vdXRlcl93cmFwcGVyX19sRUpkNVwiLFxuXHRcImNlbGxfaW1nXCI6IFwic3R5bGVzX2NlbGxfaW1nX18ydW9BdlwiLFxuXHRcImNlbGxfdGl0bGVcIjogXCJzdHlsZXNfY2VsbF90aXRsZV9fM2ZqelpcIixcblx0XCJkZXRhaWxfdGV4dF93cmFwcGVyXCI6IFwic3R5bGVzX2RldGFpbF90ZXh0X3dyYXBwZXJfX0x6bXZ3XCIsXG5cdFwiZGV0YWlsX3dyYXBwZXJcIjogXCJzdHlsZXNfZGV0YWlsX3dyYXBwZXJfXzFEbUtwXCIsXG5cdFwiZGV0YWlsX2ltZ1wiOiBcInN0eWxlc19kZXRhaWxfaW1nX18yaUc3WVwiLFxuXHRcImRldGFpbF90aXRsZVwiOiBcInN0eWxlc19kZXRhaWxfdGl0bGVfXzNIcnBMXCIsXG5cdFwibW9kYWxfb3V0ZXJcIjogXCJzdHlsZXNfbW9kYWxfb3V0ZXJfXzNxNW42XCIsXG5cdFwibW9kYWxfY29udGVudFwiOiBcInN0eWxlc19tb2RhbF9jb250ZW50X18zVzdqOVwiLFxuXHRcIm1vZGFsX2Nsb3NlX2J1dHRvblwiOiBcInN0eWxlc19tb2RhbF9jbG9zZV9idXR0b25fXzNqbmp5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==