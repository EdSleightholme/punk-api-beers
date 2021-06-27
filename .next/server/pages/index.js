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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);



var BeerCell = function BeerCell(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_outer_wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_wrapper),
    onClick: props.setSelectedBeer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_img),
    src: props.beer.image_url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_text_wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_title)
  }, props.beer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().cell_tagline)
  }, props.beer.tagline))));
};

/* harmony default export */ __webpack_exports__["default"] = (BeerCell);

/***/ }),

/***/ "./pages/BeerDetails.js":
/*!******************************!*\
  !*** ./pages/BeerDetails.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);



var BeerDetails = function BeerDetails(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_img),
    src: props.beer.image_url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_text_wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_title)
  }, props.beer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_abv)
  }, "ABV: ", props.beer.abv), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_description)
  }, props.beer.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Why Not try with:"), props.beer.food_pairing.map(function (foodPairing) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail_food_pairing)
    }, foodPairing);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BeerDetails);

/***/ }),

/***/ "./pages/BeerTable.js":
/*!****************************!*\
  !*** ./pages/BeerTable.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BeerCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeerCell */ "./pages/BeerCell.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);




var BeerTable = function BeerTable(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "loading....") : props.beers.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No Data To Display") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid_wrapper)
  }, props.beers.map(function (beer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BeerCell__WEBPACK_IMPORTED_MODULE_1__.default, {
      beer: beer,
      key: index + "beer",
      setSelectedBeer: function setSelectedBeer() {
        props.setSelectedBeer(beer);
      }
    });
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdW5rX2FwaV9kZW1vLy4vcGFnZXMvQmVlckNlbGwuanMiLCJ3ZWJwYWNrOi8vcHVua19hcGlfZGVtby8uL3BhZ2VzL0JlZXJEZXRhaWxzLmpzIiwid2VicGFjazovL3B1bmtfYXBpX2RlbW8vLi9wYWdlcy9CZWVyVGFibGUuanMiLCJ3ZWJwYWNrOi8vcHVua19hcGlfZGVtby8uL3BhZ2VzL2FwaV9jYWxsZXIuanMiLCJ3ZWJwYWNrOi8vcHVua19hcGlfZGVtby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3B1bmtfYXBpX2RlbW8vLi9wYWdlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wdW5rX2FwaV9kZW1vLy4vcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcHVua19hcGlfZGVtby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHVua19hcGlfZGVtby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJlZXJDZWxsIiwicHJvcHMiLCJzdHlsZXMiLCJjZWxsX291dGVyX3dyYXBwZXIiLCJzZXRTZWxlY3RlZEJlZXIiLCJiZWVyIiwiaW1hZ2VfdXJsIiwiY2VsbF90ZXh0X3dyYXBwZXIiLCJjZWxsX3RpdGxlIiwibmFtZSIsImNlbGxfdGFnbGluZSIsInRhZ2xpbmUiLCJCZWVyRGV0YWlscyIsImRldGFpbF93cmFwcGVyIiwiZGV0YWlsX3RleHRfd3JhcHBlciIsImRldGFpbF90aXRsZSIsImRldGFpbF9hYnYiLCJhYnYiLCJkZXRhaWxfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImZvb2RfcGFpcmluZyIsIm1hcCIsImZvb2RQYWlyaW5nIiwiZGV0YWlsX2Zvb2RfcGFpcmluZyIsIkJlZXJUYWJsZSIsImxvYWRpbmciLCJiZWVycyIsImxlbmd0aCIsImdyaWRfd3JhcHBlciIsImluZGV4IiwiZmV0Y2hBbGxCZWVycyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJIb21lIiwic2V0QmVlcnMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQmVlciIsInNldExvYWRpbmciLCJsb2FkQmVlcnMiLCJhbGxCZWVycyIsInVzZUVmZmVjdCIsIk1vZGFsIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQ0U7QUFDRSxhQUFTLEVBQUVDLDhFQUF5QkM7QUFEdEMsa0JBR0U7QUFDRSxhQUFTLEVBQUVELHdFQURiO0FBRUUsV0FBTyxFQUFFRCxLQUFLLENBQUNHO0FBRmpCLGtCQUlFO0FBQUssYUFBUyxFQUFFRixvRUFBaEI7QUFBaUMsT0FBRyxFQUFFRCxLQUFLLENBQUNJLElBQU4sQ0FBV0M7QUFBakQsSUFKRixlQUtFO0FBQUssYUFBUyxFQUFFSiw2RUFBd0JLO0FBQXhDLGtCQUNFO0FBQUksYUFBUyxFQUFFTCxzRUFBaUJNO0FBQWhDLEtBQW1DUCxLQUFLLENBQUNJLElBQU4sQ0FBV0ksSUFBOUMsQ0FERixlQUVFO0FBQUssYUFBUyxFQUFFUCx3RUFBbUJRO0FBQW5DLEtBQXNDVCxLQUFLLENBQUNJLElBQU4sQ0FBV00sT0FBakQsQ0FGRixDQUxGLENBSEYsQ0FERjtBQWdCRCxDQWpCRDs7QUFtQkEsK0RBQWVYLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNYLEtBQUQsRUFBVztBQUM3QixzQkFDRTtBQUNFLGFBQVMsRUFBRUMsMEVBQXFCVztBQURsQyxrQkFHRTtBQUFLLGFBQVMsRUFBRVgsc0VBQWhCO0FBQW1DLE9BQUcsRUFBRUQsS0FBSyxDQUFDSSxJQUFOLENBQVdDO0FBQW5ELElBSEYsZUFJRTtBQUFLLGFBQVMsRUFBRUosK0VBQTBCWTtBQUExQyxrQkFD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LGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRSxNQUFNRCxLQUFLLENBQUM4QyxVQUFOLENBQWlCLEtBQWpCLENBRGpCO0FBRUUsbUJBQVMsRUFBRTdDLDhFQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQVFHRCxLQUFLLENBQUMrQyxRQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWNEO0FBQ0YsQzs7Ozs7Ozs7OztBQ3JCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBCZWVyQ2VsbCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfb3V0ZXJfd3JhcHBlcn1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfd3JhcHBlcn1cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZXRTZWxlY3RlZEJlZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfaW1nfSBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbF90YWdsaW5lfT57cHJvcHMuYmVlci50YWdsaW5lfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJDZWxsOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQmVlckRldGFpbHMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfd3JhcHBlcn1cclxuICAgID5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfaW1nfSBzcmM9e3Byb3BzLmJlZXIuaW1hZ2VfdXJsfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdGl0bGV9Pntwcm9wcy5iZWVyLm5hbWV9PC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Fidn0+QUJWOiB7cHJvcHMuYmVlci5hYnZ9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZGVzY3JpcHRpb259Pntwcm9wcy5iZWVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8aDM+V2h5IE5vdCB0cnkgd2l0aDo8L2gzPlxyXG4gICAgICAgIHtwcm9wcy5iZWVyLmZvb2RfcGFpcmluZy5tYXAoZm9vZFBhaXJpbmcgPT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Zvb2RfcGFpcmluZ30+e2Zvb2RQYWlyaW5nfTwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZXJEZXRhaWxzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJlZXJDZWxsIGZyb20gXCIuL0JlZXJDZWxsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJlZXJUYWJsZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb3BzLmxvYWRpbmcgPyAoXHJcbiAgICAgICAgPHA+bG9hZGluZy4uLi48L3A+XHJcbiAgICAgICkgOiBwcm9wcy5iZWVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHA+Tm8gRGF0YSBUbyBEaXNwbGF5PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmJlZXJzLm1hcCgoYmVlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmVlckNlbGxcclxuICAgICAgICAgICAgICAgICAgYmVlcj17YmVlcn1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCArIFwiYmVlclwifVxyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEJlZXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZEJlZXIoYmVlcilcclxuICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVlclRhYmxlO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGZldGNoQWxsQmVlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgXCIgaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfVxyXG5cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhLm1hcChiZWVyID0+IHtyZXR1cm57IFxyXG4gICAgICAgIGFidjogYmVlci5hYnYsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBiZWVyLmRlc2NyaXB0aW9uLCBcclxuICAgICAgICBmb29kX3BhaXJpbmc6IGJlZXIuZm9vZF9wYWlyaW5nLFxyXG4gICAgICAgIGltYWdlX3VybDpiZWVyLmltYWdlX3VybCxcclxuICAgICAgICBuYW1lOmJlZXIubmFtZSxcclxuICAgICAgICB0YWdsaW5lOmJlZXIudGFnbGluZVxyXG4gICAgICAgfX0pXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hBbGxCZWVycyB9IGZyb20gXCIuL2FwaV9jYWxsZXJcIjtcclxuaW1wb3J0IEJlZXJUYWJsZSBmcm9tICcuL0JlZXJUYWJsZSdcclxuaW1wb3J0IEJlZXJEZXRhaWxzIGZyb20gJy4vQmVlckRldGFpbHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW2JlZXJzLCBzZXRCZWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmVlciwgc2V0U2VsZWN0ZWRCZWVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsb2FkQmVlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgYWxsQmVlcnMgPSBhd2FpdCBmZXRjaEFsbEJlZXJzKCk7XHJcbiAgICBzZXRCZWVycyhhbGxCZWVycyk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEJlZXJzKClcclxuICAgIHJldHVyblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRCZWVyKCkgfX0gPlBVTksgQVBJPC9oMT5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPEJlZXJUYWJsZSBsb2FkaW5nPXtsb2FkaW5nfSBiZWVycz17YmVlcnN9IHNldFNlbGVjdGVkQmVlcj17c2V0U2VsZWN0ZWRCZWVyfSAvPlxyXG4gICAgPE1vZGFsIGRpc3BsYXk9eyEhc2VsZWN0ZWRCZWVyfSBzZXREaXNwbGF5PXtzZXRTZWxlY3RlZEJlZXJ9PlxyXG4gICAgICA8QmVlckRldGFpbHMgYmVlcj17c2VsZWN0ZWRCZWVyfSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5NYWRlIEJ5IEVkLlMgfCBQb3dlcmVkIGJ5IFB1bmtBcGkuY29tL3YyIDwvZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XHJcbiAgaWYgKCFwcm9wcy5kaXNwbGF5KSB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX291dGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXREaXNwbGF5KGZhbHNlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY2xvc2VfYnV0dG9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzR3Y1FIXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM1VubmxcIixcblx0XCJncmlkX3dyYXBwZXJcIjogXCJzdHlsZXNfZ3JpZF93cmFwcGVyX19ROEVYaFwiLFxuXHRcImdyaWRfY2VsbFwiOiBcInN0eWxlc19ncmlkX2NlbGxfXzNGMTdQXCIsXG5cdFwiY2VsbF93cmFwcGVyXCI6IFwic3R5bGVzX2NlbGxfd3JhcHBlcl9fMm9yZ0FcIixcblx0XCJjZWxsX3RleHRfd3JhcHBlclwiOiBcInN0eWxlc19jZWxsX3RleHRfd3JhcHBlcl9fNnJwSlZcIixcblx0XCJjZWxsX291dGVyX3dyYXBwZXJcIjogXCJzdHlsZXNfY2VsbF9vdXRlcl93cmFwcGVyX19sRUpkNVwiLFxuXHRcImNlbGxfaW1nXCI6IFwic3R5bGVzX2NlbGxfaW1nX18ydW9BdlwiLFxuXHRcImNlbGxfdGl0bGVcIjogXCJzdHlsZXNfY2VsbF90aXRsZV9fM2ZqelpcIixcblx0XCJkZXRhaWxfdGV4dF93cmFwcGVyXCI6IFwic3R5bGVzX2RldGFpbF90ZXh0X3dyYXBwZXJfX0x6bXZ3XCIsXG5cdFwiZGV0YWlsX3dyYXBwZXJcIjogXCJzdHlsZXNfZGV0YWlsX3dyYXBwZXJfXzFEbUtwXCIsXG5cdFwiZGV0YWlsX2ltZ1wiOiBcInN0eWxlc19kZXRhaWxfaW1nX18yaUc3WVwiLFxuXHRcImRldGFpbF90aXRsZVwiOiBcInN0eWxlc19kZXRhaWxfdGl0bGVfXzNIcnBMXCIsXG5cdFwibW9kYWxfb3V0ZXJcIjogXCJzdHlsZXNfbW9kYWxfb3V0ZXJfXzNxNW42XCIsXG5cdFwibW9kYWxfY29udGVudFwiOiBcInN0eWxlc19tb2RhbF9jb250ZW50X18zVzdqOVwiLFxuXHRcIm1vZGFsX2Nsb3NlX2J1dHRvblwiOiBcInN0eWxlc19tb2RhbF9jbG9zZV9idXR0b25fXzNqbmp5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9