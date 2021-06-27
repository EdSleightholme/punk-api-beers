(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/BeerCell.js":
/*!***************************!*\
  !*** ./pages/BeerCell.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeerCell": function() { return /* binding */ BeerCell; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerCell.js";


const BeerCell = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_outer_wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_wrapper),
      onClick: props.setSelectedBeer,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_img),
        src: props.beer.image_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_text_wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_title),
          children: props.beer.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell_tagline),
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

/***/ }),

/***/ "./pages/BeerDetails.js":
/*!******************************!*\
  !*** ./pages/BeerDetails.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerDetails.js";



function BeerDetails(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_img),
      src: props.beer.image_url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_text_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_title),
        children: props.beer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_abv),
        children: ["ABV: ", props.beer.abv]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_description),
        children: props.beer.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Why Not try with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), props.beer.food_pairing.map(foodPairing => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail_food_pairing),
        children: foodPairing
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (BeerDetails);

/***/ }),

/***/ "./pages/BeerTable.js":
/*!****************************!*\
  !*** ./pages/BeerTable.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BeerCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BeerCell */ "./pages/BeerCell.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\BeerTable.js";




const BeerTable = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: props.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined) : props.beers.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "No Data To Display"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid_wrapper),
      children: props.beers.map((beer, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BeerCell__WEBPACK_IMPORTED_MODULE_2__.BeerCell, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAllBeers": function() { return /* binding */ fetchAllBeers; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_caller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_caller */ "./pages/api_caller.js");
/* harmony import */ var _BeerTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BeerTable */ "./pages/BeerTable.js");
/* harmony import */ var _BeerDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BeerDetails */ "./pages/BeerDetails.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./pages/modal.js");

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\index.js";






function Home() {
  const {
    0: beers,
    1: setBeers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selectedBeer,
    1: setSelectedBeer
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const loadBeers = async () => {
    setLoading(true);
    const allBeers = await (0,_api_caller__WEBPACK_IMPORTED_MODULE_2__.fetchAllBeers)();
    setBeers(allBeers);
    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadBeers();
    return;
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BeerTable__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading,
      beers: beers,
      setSelectedBeer: setSelectedBeer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {
      display: !!selectedBeer,
      setDisplay: setSelectedBeer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BeerDetails__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\punk-api-beers\\pages\\modal.js";


function Modal(props) {
  if (!props.display) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_outer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => props.setDisplay(false),
          className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_close_button),
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
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
/***/ (function(module) {

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
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyQ2VsbC5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyVGFibGUuanMiLCJ3ZWJwYWNrOi8vb29kbGUtZnJvbnQtZW5kLXRlY2huaWNhbC10ZXN0Ly4vcGFnZXMvYXBpX2NhbGxlci5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL29vZGxlLWZyb250LWVuZC10ZWNobmljYWwtdGVzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJlZXJDZWxsIiwicHJvcHMiLCJzdHlsZXMiLCJzZXRTZWxlY3RlZEJlZXIiLCJiZWVyIiwiaW1hZ2VfdXJsIiwibmFtZSIsInRhZ2xpbmUiLCJCZWVyRGV0YWlscyIsImFidiIsImRlc2NyaXB0aW9uIiwiZm9vZF9wYWlyaW5nIiwibWFwIiwiZm9vZFBhaXJpbmciLCJCZWVyVGFibGUiLCJsb2FkaW5nIiwiYmVlcnMiLCJsZW5ndGgiLCJpbmRleCIsImZldGNoQWxsQmVlcnMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiSG9tZSIsInNldEJlZXJzIiwidXNlU3RhdGUiLCJzZWxlY3RlZEJlZXIiLCJzZXRMb2FkaW5nIiwibG9hZEJlZXJzIiwiYWxsQmVlcnMiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDakMsc0JBQ0U7QUFDRSxhQUFTLEVBQUVDLDhFQURiO0FBQUEsMkJBR0U7QUFDRSxlQUFTLEVBQUVBLHdFQURiO0FBRUUsYUFBTyxFQUFFRCxLQUFLLENBQUNFLGVBRmpCO0FBQUEsOEJBSUU7QUFBSyxpQkFBUyxFQUFFRCxvRUFBaEI7QUFBaUMsV0FBRyxFQUFFRCxLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQUssaUJBQVMsRUFBRUgsNkVBQWhCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLG9CQUFtQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVKLHdFQUFoQjtBQUFBLG9CQUFzQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdHO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQlAsS0FBckIsRUFBNEI7QUFDMUIsc0JBQ0k7QUFDRSxhQUFTLEVBQUVDLDBFQURiO0FBQUEsNEJBR0U7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFtQyxTQUFHLEVBQUVELEtBQUssQ0FBQ0csSUFBTixDQUFX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QTtBQUFBO0FBQUE7QUFBQSxZQVJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFDQTtBQUNPLFNBQVNnQyxLQUFULENBQWVqQyxLQUFmLEVBQXNCO0FBQzNCLE1BQUksQ0FBQ0EsS0FBSyxDQUFDa0MsT0FBWCxFQUFvQjtBQUNsQix3QkFBTyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxHQUZELE1BRU87QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBRWpDLHVFQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFFLE1BQU1ELEtBQUssQ0FBQ21DLFVBQU4sQ0FBaUIsS0FBakIsQ0FEakI7QUFFRSxtQkFBUyxFQUFFbEMsOEVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLEVBUUdELEtBQUssQ0FBQ29DLFFBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBY0Q7QUFDRixDOzs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBCZWVyQ2VsbCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfb3V0ZXJfd3JhcHBlcn1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfd3JhcHBlcn1cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZXRTZWxlY3RlZEJlZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfaW1nfSBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90YWdsaW5lfT57cHJvcHMuYmVlci50YWdsaW5lfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBCZWVyRGV0YWlscyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfd3JhcHBlcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2ltZ30gc3JjPXtwcm9wcy5iZWVyLmltYWdlX3VybH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Fidn0+QUJWOiB7cHJvcHMuYmVlci5hYnZ9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZGVzY3JpcHRpb259Pntwcm9wcy5iZWVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aDM+V2h5IE5vdCB0cnkgd2l0aDo8L2gzPlxyXG4gICAgICAgIHtwcm9wcy5iZWVyLmZvb2RfcGFpcmluZy5tYXAoZm9vZFBhaXJpbmc9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9mb29kX3BhaXJpbmd9Pntmb29kUGFpcmluZ308L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJEZXRhaWxzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmVlckNlbGwgfSBmcm9tIFwiLi9CZWVyQ2VsbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBCZWVyVGFibGUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwcm9wcy5sb2FkaW5nID8gKFxyXG4gICAgICAgIDxwPmxvYWRpbmcuLi4uPC9wPlxyXG4gICAgICApIDogcHJvcHMuYmVlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwPk5vIERhdGEgVG8gRGlzcGxheTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5iZWVycy5tYXAoKGJlZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJlZXJDZWxsXHJcbiAgICAgICAgICAgICAgICAgIGJlZXI9e2JlZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyBcImJlZXJcIn1cclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCZWVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRCZWVyKGJlZXIpXHJcbiAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJUYWJsZTtcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBmZXRjaEFsbEJlZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIFwiIGh0dHBzOi8vYXBpLnB1bmthcGkuY29tL3YyL2JlZXJzXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIH1cclxuXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YS5tYXAoYmVlciA9PiB7cmV0dXJueyBcclxuICAgICAgICBhYnY6IGJlZXIuYWJ2LCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogYmVlci5kZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZm9vZF9wYWlyaW5nOiBiZWVyLmZvb2RfcGFpcmluZyxcclxuICAgICAgICBpbWFnZV91cmw6YmVlci5pbWFnZV91cmwsXHJcbiAgICAgICAgbmFtZTpiZWVyLm5hbWUsXHJcbiAgICAgICAgdGFnbGluZTpiZWVyLnRhZ2xpbmVcclxuICAgICAgIH19KVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoQWxsQmVlcnMgfSBmcm9tIFwiLi9hcGlfY2FsbGVyXCI7XHJcbmltcG9ydCBCZWVyVGFibGUgZnJvbSAnLi9CZWVyVGFibGUnXHJcbmltcG9ydCBCZWVyRGV0YWlscyBmcm9tICcuL0JlZXJEZXRhaWxzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtiZWVycywgc2V0QmVlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJlZXIsIHNldFNlbGVjdGVkQmVlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbG9hZEJlZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IGFsbEJlZXJzID0gYXdhaXQgZmV0Y2hBbGxCZWVycygpO1xyXG4gICAgc2V0QmVlcnMoYWxsQmVlcnMpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRCZWVycygpXHJcbiAgICByZXR1cm5cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkQmVlcigpIH19ID5QVU5LIEFQSTwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxCZWVyVGFibGUgbG9hZGluZz17bG9hZGluZ30gYmVlcnM9e2JlZXJzfSBzZXRTZWxlY3RlZEJlZXI9e3NldFNlbGVjdGVkQmVlcn0gLz5cclxuICAgIDxNb2RhbCBkaXNwbGF5PXshIXNlbGVjdGVkQmVlcn0gc2V0RGlzcGxheT17c2V0U2VsZWN0ZWRCZWVyfT5cclxuICAgICAgPEJlZXJEZXRhaWxzIGJlZXI9e3NlbGVjdGVkQmVlcn0gLz5cclxuICAgIDwvTW9kYWw+XHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+TWFkZSBCeSBFZC5TIHwgUG93ZXJlZCBieSBQdW5rQXBpLmNvbS92MiA8L2Zvb3Rlcj5cclxuICA8L2Rpdj5cclxuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xyXG4gIGlmICghcHJvcHMuZGlzcGxheSkge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCAvPjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9vdXRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0RGlzcGxheShmYWxzZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2Nsb3NlX2J1dHRvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX180d2NRSFwiLFxuXHRcImZvb3RlclwiOiBcInN0eWxlc19mb290ZXJfXzNVbm5sXCIsXG5cdFwiZ3JpZF93cmFwcGVyXCI6IFwic3R5bGVzX2dyaWRfd3JhcHBlcl9fUThFWGhcIixcblx0XCJncmlkX2NlbGxcIjogXCJzdHlsZXNfZ3JpZF9jZWxsX18zRjE3UFwiLFxuXHRcImNlbGxfd3JhcHBlclwiOiBcInN0eWxlc19jZWxsX3dyYXBwZXJfXzJvcmdBXCIsXG5cdFwiY2VsbF90ZXh0X3dyYXBwZXJcIjogXCJzdHlsZXNfY2VsbF90ZXh0X3dyYXBwZXJfXzZycEpWXCIsXG5cdFwiY2VsbF9vdXRlcl93cmFwcGVyXCI6IFwic3R5bGVzX2NlbGxfb3V0ZXJfd3JhcHBlcl9fbEVKZDVcIixcblx0XCJjZWxsX2ltZ1wiOiBcInN0eWxlc19jZWxsX2ltZ19fMnVvQXZcIixcblx0XCJjZWxsX3RpdGxlXCI6IFwic3R5bGVzX2NlbGxfdGl0bGVfXzNmanpaXCIsXG5cdFwiZGV0YWlsX3RleHRfd3JhcHBlclwiOiBcInN0eWxlc19kZXRhaWxfdGV4dF93cmFwcGVyX19Mem12d1wiLFxuXHRcImRldGFpbF93cmFwcGVyXCI6IFwic3R5bGVzX2RldGFpbF93cmFwcGVyX18xRG1LcFwiLFxuXHRcImRldGFpbF9pbWdcIjogXCJzdHlsZXNfZGV0YWlsX2ltZ19fMmlHN1lcIixcblx0XCJkZXRhaWxfdGl0bGVcIjogXCJzdHlsZXNfZGV0YWlsX3RpdGxlX18zSHJwTFwiLFxuXHRcIm1vZGFsX291dGVyXCI6IFwic3R5bGVzX21vZGFsX291dGVyX18zcTVuNlwiLFxuXHRcIm1vZGFsX2NvbnRlbnRcIjogXCJzdHlsZXNfbW9kYWxfY29udGVudF9fM1c3ajlcIixcblx0XCJtb2RhbF9jbG9zZV9idXR0b25cIjogXCJzdHlsZXNfbW9kYWxfY2xvc2VfYnV0dG9uX18zam5qeVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==