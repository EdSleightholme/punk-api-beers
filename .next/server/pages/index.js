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

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\front-end-technical-test-oodlefinance\\pages\\BeerCell.js";


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

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\front-end-technical-test-oodlefinance\\pages\\BeerDetails.js";



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

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\front-end-technical-test-oodlefinance\\pages\\BeerTable.js";




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
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\CCNCH\\Documents\\Coding Tests\\front-end-technical-test-oodlefinance\\pages\\index.js";





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
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
        onClick: () => {
          setSelectedBeer();
        },
        children: "PUNK API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, this), selectedBeer ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BeerDetails__WEBPACK_IMPORTED_MODULE_4__.default, {
      beer: selectedBeer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 20
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BeerTable__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading,
      beers: beers,
      setSelectedBeer: setSelectedBeer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 56
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),
      children: "Made By Ed.S | Powered by PunkApi.com/v2 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
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
	"detail_title": "styles_detail_title__3HrpL"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyQ2VsbC5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9CZWVyVGFibGUuanMiLCJ3ZWJwYWNrOi8vb29kbGUtZnJvbnQtZW5kLXRlY2huaWNhbC10ZXN0Ly4vcGFnZXMvYXBpX2NhbGxlci5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvLi9wYWdlcy9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9vb2RsZS1mcm9udC1lbmQtdGVjaG5pY2FsLXRlc3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL29vZGxlLWZyb250LWVuZC10ZWNobmljYWwtdGVzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJlZXJDZWxsIiwicHJvcHMiLCJzdHlsZXMiLCJzZXRTZWxlY3RlZEJlZXIiLCJiZWVyIiwiaW1hZ2VfdXJsIiwibmFtZSIsInRhZ2xpbmUiLCJCZWVyRGV0YWlscyIsImFidiIsImRlc2NyaXB0aW9uIiwiZm9vZF9wYWlyaW5nIiwibWFwIiwiZm9vZFBhaXJpbmciLCJCZWVyVGFibGUiLCJsb2FkaW5nIiwiYmVlcnMiLCJsZW5ndGgiLCJpbmRleCIsImZldGNoQWxsQmVlcnMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiSG9tZSIsInNldEJlZXJzIiwidXNlU3RhdGUiLCJzZWxlY3RlZEJlZXIiLCJzZXRMb2FkaW5nIiwibG9hZEJlZXJzIiwiYWxsQmVlcnMiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDakMsc0JBQ0U7QUFDRSxhQUFTLEVBQUVDLDhFQURiO0FBQUEsMkJBR0U7QUFDRSxlQUFTLEVBQUVBLHdFQURiO0FBRUUsYUFBTyxFQUFFRCxLQUFLLENBQUNFLGVBRmpCO0FBQUEsOEJBSUU7QUFBSyxpQkFBUyxFQUFFRCxvRUFBaEI7QUFBaUMsV0FBRyxFQUFFRCxLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQUssaUJBQVMsRUFBRUgsNkVBQWhCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLG9CQUFtQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVKLHdFQUFoQjtBQUFBLG9CQUFzQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdHO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQlAsS0FBckIsRUFBNEI7QUFDMUIsc0JBQ0k7QUFDRSxhQUFTLEVBQUVDLDBFQURiO0FBQUEsNEJBR0U7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFtQyxTQUFHLEVBQUVELEtBQUssQ0FBQ0csSUFBTixDQUFXQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFLLGVBQVMsRUFBRUgsK0VBQWhCO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFFQSx3RUFBZjtBQUFBLGtCQUFxQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUksaUJBQVMsRUFBRUosc0VBQWY7QUFBQSw0QkFBd0NELEtBQUssQ0FBQ0csSUFBTixDQUFXSyxHQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQUcsaUJBQVMsRUFBRVAsOEVBQWQ7QUFBQSxrQkFBMENELEtBQUssQ0FBQ0csSUFBTixDQUFXTTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLEVBS0NULEtBQUssQ0FBQ0csSUFBTixDQUFXTyxZQUFYLENBQXdCQyxHQUF4QixDQUE0QkMsV0FBVyxpQkFDcEM7QUFBSyxpQkFBUyxFQUFFWCwrRUFBaEI7QUFBQSxrQkFBNkNXO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxDQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJEOztBQUVELCtEQUFlTCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU0sU0FBUyxHQUFJYixLQUFELElBQVc7QUFFM0Isc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLENBQUNjLE9BQU4sZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FFR2QsS0FBSyxDQUFDZSxLQUFOLENBQVlDLE1BQVosS0FBdUIsQ0FBdkIsZ0JBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREUsZ0JBR0U7QUFBSyxlQUFTLEVBQUVmLHdFQUFoQjtBQUFBLGdCQUNHRCxLQUFLLENBQUNlLEtBQU4sQ0FBWUosR0FBWixDQUFnQixDQUFDUixJQUFELEVBQU9jLEtBQVAsS0FBaUI7QUFDaEMsNEJBQU8sOERBQUMsK0NBQUQ7QUFDTCxjQUFJLEVBQUVkLElBREQ7QUFHTCx5QkFBZSxFQUFFLE1BQU07QUFDckJILGlCQUFLLENBQUNFLGVBQU4sQ0FBc0JDLElBQXRCO0FBQ0Q7QUFMSSxXQUVBYyxLQUFLLEdBQUcsTUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBTUQsT0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0F0QkQ7O0FBd0JBLCtEQUFlSixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQzNCTyxNQUFNSyxhQUFhLEdBQUcsWUFBWTtBQUN2QyxTQUFPQyxLQUFLLENBQ1YsbUNBRFUsRUFFVjtBQUNFQyxVQUFNLEVBQUU7QUFEVixHQUZVLENBQUwsQ0FPSkMsSUFQSSxDQU9FQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQVBmLEVBUUpGLElBUkksQ0FRRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBSSxDQUFDYixHQUFMLENBQVNSLElBQUksSUFBSTtBQUFDLGFBQU07QUFDN0JLLFdBQUcsRUFBRUwsSUFBSSxDQUFDSyxHQURtQjtBQUU3QkMsbUJBQVcsRUFBRU4sSUFBSSxDQUFDTSxXQUZXO0FBRzdCQyxvQkFBWSxFQUFFUCxJQUFJLENBQUNPLFlBSFU7QUFJN0JOLGlCQUFTLEVBQUNELElBQUksQ0FBQ0MsU0FKYztBQUs3QkMsWUFBSSxFQUFDRixJQUFJLENBQUNFLElBTG1CO0FBTTdCQyxlQUFPLEVBQUNILElBQUksQ0FBQ0c7QUFOZ0IsT0FBTjtBQU90QixLQVBJLENBQVA7QUFRRCxHQWpCSSxDQUFQO0FBa0JELENBbkJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVlLFNBQVNtQixJQUFULEdBQWdCO0FBRTdCLFFBQU07QUFBQSxPQUFDVixLQUFEO0FBQUEsT0FBUVc7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlMUI7QUFBZixNQUFrQ3lCLCtDQUFRLEVBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNiLE9BQUQ7QUFBQSxPQUFVZTtBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBRUEsUUFBTUcsU0FBUyxHQUFHLFlBQVk7QUFDNUJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxVQUFNRSxRQUFRLEdBQUcsTUFBTWIsMERBQWEsRUFBcEM7QUFDQVEsWUFBUSxDQUFDSyxRQUFELENBQVI7QUFDQUYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBTEQ7O0FBT0FHLGtEQUFTLENBQUMsTUFBTTtBQUNkRixhQUFTO0FBQ1Q7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQU87QUFBQSw0QkFDTDtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBRTdCLGtFQUFmO0FBQThCLGVBQU8sRUFBRSxNQUFJO0FBQUNDLHlCQUFlO0FBQUcsU0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssRUFJSjBCLFlBQVksZ0JBQUUsOERBQUMsaURBQUQ7QUFBYSxVQUFJLEVBQUdBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRixnQkFBc0MsOERBQUMsK0NBQUQ7QUFBVyxhQUFPLEVBQUVkLE9BQXBCO0FBQTZCLFdBQUssRUFBRUMsS0FBcEM7QUFBNEMscUJBQWUsRUFBRWI7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUo5QyxlQUtMO0FBQVEsZUFBUyxFQUFFRCxrRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVFELEM7Ozs7Ozs7Ozs7QUNsQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgQmVlckNlbGwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsX291dGVyX3dyYXBwZXJ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsX3dyYXBwZXJ9XHJcbiAgICAgICAgb25DbGljaz17cHJvcHMuc2V0U2VsZWN0ZWRCZWVyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jZWxsX2ltZ30gc3JjPXtwcm9wcy5iZWVyLmltYWdlX3VybH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfdGV4dF93cmFwcGVyfT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jZWxsX3RpdGxlfT57cHJvcHMuYmVlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxfdGFnbGluZX0+e3Byb3BzLmJlZXIudGFnbGluZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gQmVlckRldGFpbHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX3dyYXBwZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9pbWd9IHNyYz17cHJvcHMuYmVlci5pbWFnZV91cmx9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfdGV4dF93cmFwcGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX3RpdGxlfT57cHJvcHMuYmVlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9hYnZ9PkFCVjoge3Byb3BzLmJlZXIuYWJ2fTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2Rlc2NyaXB0aW9ufT57cHJvcHMuYmVlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGgzPldoeSBOb3QgdHJ5IHdpdGg6PC9oMz5cclxuICAgICAgICB7cHJvcHMuYmVlci5mb29kX3BhaXJpbmcubWFwKGZvb2RQYWlyaW5nPT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfZm9vZF9wYWlyaW5nfT57Zm9vZFBhaXJpbmd9PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWVyRGV0YWlsczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJlZXJDZWxsIH0gZnJvbSBcIi4vQmVlckNlbGxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQmVlclRhYmxlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cHJvcHMubG9hZGluZyA/IChcclxuICAgICAgICA8cD5sb2FkaW5nLi4uLjwvcD5cclxuICAgICAgKSA6IHByb3BzLmJlZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cD5ObyBEYXRhIFRvIERpc3BsYXk8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZF93cmFwcGVyfT5cclxuICAgICAgICAgICAgICB7cHJvcHMuYmVlcnMubWFwKChiZWVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCZWVyQ2VsbFxyXG4gICAgICAgICAgICAgICAgICBiZWVyPXtiZWVyfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4ICsgXCJiZWVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQmVlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFNlbGVjdGVkQmVlcihiZWVyKVxyXG4gICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWVyVGFibGU7XHJcbiIsIlxyXG5leHBvcnQgY29uc3QgZmV0Y2hBbGxCZWVycyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBcIiBodHRwczovL2FwaS5wdW5rYXBpLmNvbS92Mi9iZWVyc1wiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9XHJcblxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGEubWFwKGJlZXIgPT4ge3JldHVybnsgXHJcbiAgICAgICAgYWJ2OiBiZWVyLmFidiwgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGJlZXIuZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGZvb2RfcGFpcmluZzogYmVlci5mb29kX3BhaXJpbmcsXHJcbiAgICAgICAgaW1hZ2VfdXJsOmJlZXIuaW1hZ2VfdXJsLFxyXG4gICAgICAgIG5hbWU6YmVlci5uYW1lLFxyXG4gICAgICAgIHRhZ2xpbmU6YmVlci50YWdsaW5lXHJcbiAgICAgICB9fSlcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaEFsbEJlZXJzIH0gZnJvbSBcIi4vYXBpX2NhbGxlclwiO1xyXG5pbXBvcnQgQmVlclRhYmxlIGZyb20gJy4vQmVlclRhYmxlJ1xyXG5pbXBvcnQgQmVlckRldGFpbHMgZnJvbSAnLi9CZWVyRGV0YWlscydcclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbYmVlcnMsIHNldEJlZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRCZWVyLCBzZXRTZWxlY3RlZEJlZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgbG9hZEJlZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IGFsbEJlZXJzID0gYXdhaXQgZmV0Y2hBbGxCZWVycygpO1xyXG4gICAgc2V0QmVlcnMoYWxsQmVlcnMpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEJlZXJzKClcclxuICAgIHJldHVyblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IG9uQ2xpY2s9eygpPT57c2V0U2VsZWN0ZWRCZWVyKCl9fSA+UFVOSyBBUEk8L2gxPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICB7c2VsZWN0ZWRCZWVyPyA8QmVlckRldGFpbHMgYmVlciA9e3NlbGVjdGVkQmVlcn0vPjo8QmVlclRhYmxlIGxvYWRpbmc9e2xvYWRpbmd9IGJlZXJzPXtiZWVyc30gIHNldFNlbGVjdGVkQmVlcj17c2V0U2VsZWN0ZWRCZWVyfS8+fVxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9Pk1hZGUgQnkgRWQuUyB8IFBvd2VyZWQgYnkgUHVua0FwaS5jb20vdjIgPC9mb290ZXI+XHJcbiAgPC9kaXY+XHJcblxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzR3Y1FIXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM1VubmxcIixcblx0XCJncmlkX3dyYXBwZXJcIjogXCJzdHlsZXNfZ3JpZF93cmFwcGVyX19ROEVYaFwiLFxuXHRcImdyaWRfY2VsbFwiOiBcInN0eWxlc19ncmlkX2NlbGxfXzNGMTdQXCIsXG5cdFwiY2VsbF93cmFwcGVyXCI6IFwic3R5bGVzX2NlbGxfd3JhcHBlcl9fMm9yZ0FcIixcblx0XCJjZWxsX3RleHRfd3JhcHBlclwiOiBcInN0eWxlc19jZWxsX3RleHRfd3JhcHBlcl9fNnJwSlZcIixcblx0XCJjZWxsX291dGVyX3dyYXBwZXJcIjogXCJzdHlsZXNfY2VsbF9vdXRlcl93cmFwcGVyX19sRUpkNVwiLFxuXHRcImNlbGxfaW1nXCI6IFwic3R5bGVzX2NlbGxfaW1nX18ydW9BdlwiLFxuXHRcImNlbGxfdGl0bGVcIjogXCJzdHlsZXNfY2VsbF90aXRsZV9fM2ZqelpcIixcblx0XCJkZXRhaWxfdGV4dF93cmFwcGVyXCI6IFwic3R5bGVzX2RldGFpbF90ZXh0X3dyYXBwZXJfX0x6bXZ3XCIsXG5cdFwiZGV0YWlsX3dyYXBwZXJcIjogXCJzdHlsZXNfZGV0YWlsX3dyYXBwZXJfXzFEbUtwXCIsXG5cdFwiZGV0YWlsX2ltZ1wiOiBcInN0eWxlc19kZXRhaWxfaW1nX18yaUc3WVwiLFxuXHRcImRldGFpbF90aXRsZVwiOiBcInN0eWxlc19kZXRhaWxfdGl0bGVfXzNIcnBMXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9