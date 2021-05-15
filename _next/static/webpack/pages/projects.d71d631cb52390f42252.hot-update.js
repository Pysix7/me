webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/MasonryLayout/index.tsx":
/*!************************************************!*\
  !*** ./src/components/MasonryLayout/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/prathap/projects/pysix/me/src/components/MasonryLayout/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // not using cause of children type issue\n\n/* interface IProps {\n  columns: number;\n  gap: number;\n  children: any;\n}; */\n// REF: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99\n\nvar MasonryLayout = function MasonryLayout(props) {\n  var _props$columns = props.columns,\n      columns = _props$columns === void 0 ? 2 : _props$columns,\n      _props$gap = props.gap,\n      gap = _props$gap === void 0 ? 20 : _props$gap,\n      children = props.children;\n  var columnWrapper = {};\n  var result = []; // create columns\n\n  for (var i = 0; i < columns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < children.length; _i++) {\n    var columnIndex = _i % columns;\n    columnWrapper[\"column\".concat(columnIndex)].push(__jsx(\"div\", {\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, children[_i]));\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < columns; _i2++) {\n    result.push(__jsx(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }\n    }, columnWrapper[\"column\".concat(_i2)]));\n  }\n\n  return __jsx(\"div\", {\n    style: {\n      display: 'flex'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, result);\n};\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFzb25yeUxheW91dC9pbmRleC50c3g/MmEwMSJdLCJuYW1lcyI6WyJNYXNvbnJ5TGF5b3V0IiwicHJvcHMiLCJjb2x1bW5zIiwiZ2FwIiwiY2hpbGRyZW4iLCJjb2x1bW5XcmFwcGVyIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNvbHVtbkluZGV4IiwicHVzaCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJmbGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxhQUE0QixHQUFHLFNBQS9CQSxhQUErQixDQUFDQyxLQUFELEVBQVc7QUFBQSx1QkFDRkEsS0FERSxDQUN0Q0MsT0FEc0M7QUFBQSxNQUN0Q0EsT0FEc0MsK0JBQzVCLENBRDRCO0FBQUEsbUJBQ0ZELEtBREUsQ0FDekJFLEdBRHlCO0FBQUEsTUFDekJBLEdBRHlCLDJCQUNuQixFQURtQjtBQUFBLE1BQ2ZDLFFBRGUsR0FDRkgsS0FERSxDQUNmRyxRQURlO0FBRzlDLE1BQU1DLGFBQWtCLEdBQUcsRUFBM0I7QUFDQSxNQUFNQyxNQUFXLEdBQUcsRUFBcEIsQ0FKOEMsQ0FNOUM7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxPQUFwQixFQUE2QkssQ0FBQyxFQUE5QixFQUFrQztBQUNoQ0YsaUJBQWEsaUJBQVVFLENBQVYsRUFBYixHQUE4QixFQUE5QjtBQUNELEdBVDZDLENBVzlDOzs7QUFDQSxPQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBN0IsRUFBcUNELEVBQUMsRUFBdEMsRUFBMEM7QUFDeEMsUUFBTUUsV0FBVyxHQUFHRixFQUFDLEdBQUdMLE9BQXhCO0FBQ0FHLGlCQUFhLGlCQUFVSSxXQUFWLEVBQWIsQ0FBc0NDLElBQXRDLENBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsb0JBQVksWUFBS1IsR0FBTDtBQUFkLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxRQUFRLENBQUNHLEVBQUQsQ0FEWCxDQURGO0FBS0QsR0FuQjZDLENBcUI5Qzs7O0FBQ0EsT0FBSyxJQUFJQSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHTCxPQUFwQixFQUE2QkssR0FBQyxFQUE5QixFQUFrQztBQUNoQ0QsVUFBTSxDQUFDSSxJQUFQLENBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEUsa0JBQVUsWUFBS0wsR0FBQyxHQUFHLENBQUosR0FBUUosR0FBUixHQUFjLENBQW5CLE9BREw7QUFFTFUsWUFBSSxFQUFFO0FBRkQsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dSLGFBQWEsaUJBQVVFLEdBQVYsRUFMaEIsQ0FERjtBQVNEOztBQUVELFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8sYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLE1BREgsQ0FERjtBQUtELENBdkNEOztLQUFNTixhO0FBeUNTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01hc29ucnlMYXlvdXQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gbm90IHVzaW5nIGNhdXNlIG9mIGNoaWxkcmVuIHR5cGUgaXNzdWVcbi8qIGludGVyZmFjZSBJUHJvcHMge1xuICBjb2x1bW5zOiBudW1iZXI7XG4gIGdhcDogbnVtYmVyO1xuICBjaGlsZHJlbjogYW55O1xufTsgKi9cblxuLy8gUkVGOiBodHRwczovL21lZGl1bS5jb20vdGhlLWFuZGVsYS13YXkvaG93LXRvLWNyZWF0ZS1hLW1hc29ucnktbGF5b3V0LWNvbXBvbmVudC11c2luZy1yZWFjdC1mMzBlYzljYTVlOTlcbmNvbnN0IE1hc29ucnlMYXlvdXQ6IFJlYWN0LkZDPGFueT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2x1bW5zID0gMiwgZ2FwID0gMjAsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICBjb25zdCBjb2x1bW5XcmFwcGVyOiBhbnkgPSB7fTtcbiAgY29uc3QgcmVzdWx0OiBhbnkgPSBbXTtcblxuICAvLyBjcmVhdGUgY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgIGNvbHVtbldyYXBwZXJbYGNvbHVtbiR7aX1gXSA9IFtdO1xuICB9XG5cbiAgLy8gZGl2aWRlIGNoaWxkcmVuIGludG8gY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBpICUgY29sdW1ucztcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2NvbHVtbkluZGV4fWBdLnB1c2goXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogYCR7Z2FwfXB4YCB9fT5cbiAgICAgICAge2NoaWxkcmVuW2ldfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIHdyYXAgY2hpbGRyZW4gaW4gZWFjaCBjb2x1bW4gd2l0aCBhIGRpdlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6IGAke2kgPiAwID8gZ2FwIDogMH1weGAsXG4gICAgICAgICAgZmxleDogMSxcbiAgICAgICAgfX0+XG4gICAgICAgIHtjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2l9YF19XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIHtyZXN1bHR9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc29ucnlMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MasonryLayout/index.tsx\n");

/***/ })

})