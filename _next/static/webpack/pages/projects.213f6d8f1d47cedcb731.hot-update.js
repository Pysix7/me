webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/MasonryLayout/index.tsx":
/*!************************************************!*\
  !*** ./src/components/MasonryLayout/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/prathap/projects/pysix/me/src/components/MasonryLayout/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n;\n\nvar MasonryLayout = function MasonryLayout(props) {\n  var _props$columns = props.columns,\n      columns = _props$columns === void 0 ? 2 : _props$columns,\n      _props$gap = props.gap,\n      gap = _props$gap === void 0 ? 20 : _props$gap,\n      children = props.children;\n  var columnWrapper = {};\n  var result = []; // create columns\n\n  for (var i = 0; i < columns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < children.length; _i++) {\n    var columnIndex = _i % columns;\n    columnWrapper[\"column\".concat(columnIndex)].push(__jsx(\"div\", {\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, children[_i]));\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < columns; _i2++) {\n    result.push(__jsx(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }\n    }, columnWrapper[\"column\".concat(_i2)]));\n  }\n\n  return __jsx(\"div\", {\n    style: {\n      display: 'flex'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, result);\n};\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout); // MasonryLayout.propTypes = {\n//   columns: PropTypes.number.isRequired,\n//   gap: PropTypes.number.isRequired,\n//   children: PropTypes.arrayOf(PropTypes.element),\n// };\n// MasonryLayout.defaultProps = {\n//   columns: 2,\n//   gap: 20,\n// };\n// component usage\n//   ReactDOM.render(\n//     <MasonryLayout columns={3} gap={25}>\n//         {\n//         [...Array(12).keys()].map(key => {\n//           const height = 200 + Math.ceil(Math.random() * 300);\n//           return (\n//             <div style={{height: `${height}px`}} />\n//           )\n//         })\n//       }\n//     </MasonryLayout>, \n//     document.body\n//   );\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFzb25yeUxheW91dC9pbmRleC50c3g/MmEwMSJdLCJuYW1lcyI6WyJNYXNvbnJ5TGF5b3V0IiwicHJvcHMiLCJjb2x1bW5zIiwiZ2FwIiwiY2hpbGRyZW4iLCJjb2x1bW5XcmFwcGVyIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNvbHVtbkluZGV4IiwicHVzaCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJmbGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBTUM7O0FBRUQsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQW1CO0FBQUEsdUJBQ0tBLEtBREwsQ0FDL0JDLE9BRCtCO0FBQUEsTUFDL0JBLE9BRCtCLCtCQUNyQixDQURxQjtBQUFBLG1CQUNLRCxLQURMLENBQ2xCRSxHQURrQjtBQUFBLE1BQ2xCQSxHQURrQiwyQkFDWixFQURZO0FBQUEsTUFDUkMsUUFEUSxHQUNLSCxLQURMLENBQ1JHLFFBRFE7QUFHdkMsTUFBTUMsYUFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLE1BQVcsR0FBRyxFQUFwQixDQUp1QyxDQU12Qzs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLE9BQXBCLEVBQTZCSyxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDRixpQkFBYSxpQkFBVUUsQ0FBVixFQUFiLEdBQThCLEVBQTlCO0FBQ0QsR0FUc0MsQ0FXdkM7OztBQUNBLE9BQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0QsRUFBQyxFQUF0QyxFQUEwQztBQUN4QyxRQUFNRSxXQUFXLEdBQUdGLEVBQUMsR0FBR0wsT0FBeEI7QUFDQUcsaUJBQWEsaUJBQVVJLFdBQVYsRUFBYixDQUFzQ0MsSUFBdEMsQ0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxZQUFLUixHQUFMO0FBQWQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLFFBQVEsQ0FBQ0csRUFBRCxDQURYLENBREY7QUFLRCxHQW5Cc0MsQ0FxQnZDOzs7QUFDQSxPQUFLLElBQUlBLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdMLE9BQXBCLEVBQTZCSyxHQUFDLEVBQTlCLEVBQWtDO0FBQ2hDRCxVQUFNLENBQUNJLElBQVAsQ0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMRSxrQkFBVSxZQUFLTCxHQUFDLEdBQUcsQ0FBSixHQUFRSixHQUFSLEdBQWMsQ0FBbkIsT0FETDtBQUVMVSxZQUFJLEVBQUU7QUFGRCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR1IsYUFBYSxpQkFBVUUsR0FBVixFQUxoQixDQURGO0FBU0Q7O0FBRUQsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFTyxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsTUFESCxDQURGO0FBS0QsQ0F2Q0Q7O0tBQU1OLGE7QUF5Q1NBLDRFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFRTtBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFzb25yeUxheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29sdW1uczogbnVtYmVyO1xuICBnYXA6IG51bWJlcjtcbiAgY2hpbGRyZW46IFtSZWFjdC5SZWFjdEVsZW1lbnRdO1xufTtcblxuY29uc3QgTWFzb25yeUxheW91dCA9IChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sdW1ucyA9IDIsIGdhcCA9IDIwLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29sdW1uV3JhcHBlcjogYW55ID0ge307XG4gIGNvbnN0IHJlc3VsdDogYW55ID0gW107XG5cbiAgLy8gY3JlYXRlIGNvbHVtbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2l9YF0gPSBbXTtcbiAgfVxuXG4gIC8vIGRpdmlkZSBjaGlsZHJlbiBpbnRvIGNvbHVtbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gaSAlIGNvbHVtbnM7XG4gICAgY29sdW1uV3JhcHBlcltgY29sdW1uJHtjb2x1bW5JbmRleH1gXS5wdXNoKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGAke2dhcH1weGAgfX0+XG4gICAgICAgIHtjaGlsZHJlbltpXX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLyB3cmFwIGNoaWxkcmVuIGluIGVhY2ggY29sdW1uIHdpdGggYSBkaXZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtpID4gMCA/IGdhcCA6IDB9cHhgLFxuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgIH19PlxuICAgICAgICB7Y29sdW1uV3JhcHBlcltgY29sdW1uJHtpfWBdfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICB7cmVzdWx0fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXNvbnJ5TGF5b3V0O1xuXG4vLyBNYXNvbnJ5TGF5b3V0LnByb3BUeXBlcyA9IHtcbi8vICAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBnYXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbi8vIH07XG5cbi8vIE1hc29ucnlMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuLy8gICBjb2x1bW5zOiAyLFxuLy8gICBnYXA6IDIwLFxuLy8gfTtcblxuICAvLyBjb21wb25lbnQgdXNhZ2VcblxuLy8gICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPE1hc29ucnlMYXlvdXQgY29sdW1ucz17M30gZ2FwPXsyNX0+XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgWy4uLkFycmF5KDEyKS5rZXlzKCldLm1hcChrZXkgPT4ge1xuLy8gICAgICAgICAgIGNvbnN0IGhlaWdodCA9IDIwMCArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMzAwKTtcblxuLy8gICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgJHtoZWlnaHR9cHhgfX0gLz5cbi8vICAgICAgICAgICApXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9XG4vLyAgICAgPC9NYXNvbnJ5TGF5b3V0PiwgXG4vLyAgICAgZG9jdW1lbnQuYm9keVxuLy8gICApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MasonryLayout/index.tsx\n");

/***/ }),

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ \"./node_modules/antd/lib/card/style/index.js\");\n/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography/style */ \"./node_modules/antd/lib/typography/style/index.js\");\n/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography */ \"./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var configs_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! configs/data */ \"./src/configs/data.ts\");\n/* harmony import */ var _components_MasonryLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/MasonryLayout */ \"./src/components/MasonryLayout/index.tsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/prathap/projects/pysix/me/src/pages/projects.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\nvar Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a.Title;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Projects\")), __jsx(\"div\", {\n    style: {\n      margin: '10px 20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    level: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"My Projects\"), __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_components_MasonryLayout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, configs_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].projects.map(function (item) {\n    return __jsx(\"div\", {\n      key: \"project-\".concat(item.title),\n      style: {\n        borderBottom: '1px dashed blueviolet',\n        marginTop: 10,\n        width: '50%',\n        height: ''\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, item.title), __jsx(\"div\", {\n      style: {\n        marginLeft: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    }, \"features:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 19\n      }\n    }, item.features.map(function (feature) {\n      return __jsx(\"li\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 23\n        }\n      }, feature);\n    })), item.appLinks && item.appLinks.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 23\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 25\n      }\n    }, \"app links:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 25\n      }\n    }, item.appLinks.map(function (link) {\n      return __jsx(\"li\", {\n        key: \"link-\".concat(link.url),\n        style: {\n          fontSize: '15px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 29\n        }\n      }, __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 31\n        }\n      }, __jsx(\"a\", {\n        href: link.url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 33\n        }\n      }, link.title)));\n    }))), item.todos && item.todos.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 23\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 25\n      }\n    }, \"todos:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 25\n      }\n    }, item.todos.map(function (todo) {\n      return __jsx(\"li\", {\n        key: \"todo-\".concat(todo),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 29\n        }\n      }, todo);\n    }))))));\n  })))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD84MTk5Il0sIm5hbWVzIjpbIlRpdGxlIiwibWFyZ2luIiwicHJvZmlsZURhdGEiLCJwcm9qZWN0cyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImJvcmRlckJvdHRvbSIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImFwcExpbmtzIiwibGVuZ3RoIiwibGluayIsInVybCIsImZvbnRTaXplIiwidG9kb3MiLCJ0b2RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7SUFFUUEsSyw4REFBQUEsSztBQUVPO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUU7QUFBSyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxvREFBVyxDQUFDQyxRQUFaLENBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxJQUFEO0FBQUEsV0FDeEI7QUFDRSxTQUFHLG9CQUFhQSxJQUFJLENBQUNDLEtBQWxCLENBREw7QUFFRSxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRSx1QkFBaEI7QUFBeUNDLGlCQUFTLEVBQUUsRUFBcEQ7QUFBd0RDLGFBQUssRUFBRSxLQUEvRDtBQUFzRUMsY0FBTSxFQUFFO0FBQTlFLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtMLElBQUksQ0FBQ0MsS0FBVixDQURGLEVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRUssa0JBQVUsRUFBRTtBQUFkLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dOLElBQUksQ0FBQ08sUUFBTCxDQUFjUixHQUFkLENBQWtCLFVBQUNTLE9BQUQ7QUFBQSxhQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLE9BQUwsQ0FEaUI7QUFBQSxLQUFsQixDQURILENBRkYsRUFPR1IsSUFBSSxDQUFDUyxRQUFMLElBQ0NULElBQUksQ0FBQ1MsUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBRHhCLElBRUcsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsSUFBSSxDQUFDUyxRQUFMLENBQWNWLEdBQWQsQ0FBa0IsVUFBQ1ksSUFBRDtBQUFBLGFBQ2pCO0FBQUksV0FBRyxpQkFBVUEsSUFBSSxDQUFDQyxHQUFmLENBQVA7QUFBNkIsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRixJQUFJLENBQUNDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQkQsSUFBSSxDQUFDVixLQUF6QixDQURGLENBREYsQ0FEaUI7QUFBQSxLQUFsQixDQURILENBRkYsQ0FUTixFQXNCR0QsSUFBSSxDQUFDYyxLQUFMLElBQ0NkLElBQUksQ0FBQ2MsS0FBTCxDQUFXSixNQUFYLEdBQW9CLENBRHJCLElBRUcsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsSUFBSSxDQUFDYyxLQUFMLENBQVdmLEdBQVgsQ0FBZSxVQUFDZ0IsSUFBRDtBQUFBLGFBQ2Q7QUFBSSxXQUFHLGlCQUFVQSxJQUFWLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQkEsSUFBMUIsQ0FEYztBQUFBLEtBQWYsQ0FESCxDQUZGLENBeEJOLENBRkYsQ0FKRixDQUR3QjtBQUFBLEdBQXpCLENBREgsQ0FERixDQUZGLENBSkYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgcHJvZmlsZURhdGEgZnJvbSAnY29uZmlncy9kYXRhJztcbmltcG9ydCB7IElQcm9qZWN0LCBJQXBwTGluayB9IGZyb20gJ34vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hc29ucnlMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL01hc29ucnlMYXlvdXQnO1xuXG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UHJvamVjdHM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMjBweCcgfX0+XG4gICAgICA8VGl0bGUgbGV2ZWw9ezF9Pk15IFByb2plY3RzPC9UaXRsZT5cbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE1hc29ucnlMYXlvdXQgPlxuICAgICAgICAgIHtwcm9maWxlRGF0YS5wcm9qZWN0cy5tYXAoKGl0ZW06IElQcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YHByb2plY3QtJHtpdGVtLnRpdGxlfWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBkYXNoZWQgYmx1ZXZpb2xldCcsIG1hcmdpblRvcDogMTAsIHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDE1IH19PlxuICAgICAgICAgICAgICAgICAgPGgzPmZlYXR1cmVzOjwvaDM+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmZlYXR1cmVzLm1hcCgoZmVhdHVyZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPntmZWF0dXJlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmFwcExpbmtzICYmXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwTGlua3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPmFwcCBsaW5rczo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hcHBMaW5rcy5tYXAoKGxpbms6IElBcHBMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YGxpbmstJHtsaW5rLnVybH1gfSBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfT57bGluay50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7aXRlbS50b2RvcyAmJlxuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz50b2Rvczo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b2Rvcy5tYXAoKHRvZG86IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2B0b2RvLSR7dG9kb31gfT57dG9kb308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTWFzb25yeUxheW91dD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2ID5cbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n");

/***/ })

})