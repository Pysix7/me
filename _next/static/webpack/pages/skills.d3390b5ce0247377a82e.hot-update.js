webpackHotUpdate_N_E("pages/skills",{

/***/ "./src/pages/skills.tsx":
/*!******************************!*\
  !*** ./src/pages/skills.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/typography/style */ "./node_modules/antd/lib/typography/style/index.js");
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _configs_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/configs/data */ "./src/configs/data.ts");
/* harmony import */ var _configs_reactIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/configs/reactIcon */ "./src/configs/reactIcon.jsx");
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/layouts/skills.less */ "./src/layouts/skills.less");
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_layouts_skills_less__WEBPACK_IMPORTED_MODULE_10__);







var _this = undefined,
    _jsxFileName = "C:\\Users\\work\\projects\\portfolio\\src\\pages\\skills.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
    Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Text;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var skills = _configs_data__WEBPACK_IMPORTED_MODULE_8__["default"].skills;

  var renderItem = function renderItem(data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, data.map(function (item) {
      return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        key: item.key,
        className: "skillCol",
        style: {
          borderColor: item.color || "#d3adf7"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, __jsx(_configs_reactIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }), __jsx(Text, {
        strong: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, item.title)), __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, item.children && item.children.length > 0 && __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, renderItem(item.children))));
    }));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Skills")), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(Title, {
    level: 1,
    className: "antdTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Skills"), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "card",
    bodyStyle: {
      overflow: 'hidden'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, renderItem(skills))));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NraWxscy50c3giXSwibmFtZXMiOlsiVGl0bGUiLCJUZXh0Iiwic2tpbGxzIiwicHJvZmlsZURhdGEiLCJyZW5kZXJJdGVtIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJib3JkZXJDb2xvciIsImNvbG9yIiwidGl0bGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtJQUVRQSxLLDhEQUFBQSxLO0lBQU9DLEksOERBQUFBLEk7QUFFQSwyRUFBTTtBQUFBLE1BQ1hDLE1BRFcsR0FDQUMscURBREEsQ0FDWEQsTUFEVzs7QUFFbkIsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ2hDLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsYUFDUjtBQUNFLFlBQUksRUFBRSxFQURSO0FBRUUsV0FBRyxFQUFFQSxJQUFJLENBQUNDLEdBRlo7QUFHRSxpQkFBUyxFQUFDLFVBSFo7QUFJRSxhQUFLLEVBQUU7QUFBRUMscUJBQVcsRUFBRUYsSUFBSSxDQUFDRyxLQUFMLElBQWM7QUFBN0IsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUUsTUFBQyxJQUFEO0FBQU0sY0FBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBY0gsSUFBSSxDQUFDSSxLQUFuQixDQUZGLENBTkYsRUFVRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0osSUFBSSxDQUFDSyxRQUFMLElBQWlCTCxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUF4QyxJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1QsVUFBVSxDQUFDRyxJQUFJLENBQUNLLFFBQU4sQ0FEYixDQUZKLENBVkYsQ0FEUTtBQUFBLEtBQVQsQ0FESCxDQURGO0FBd0JELEdBekJEOztBQTJCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsYUFBUyxFQUFFO0FBQUVFLGNBQVEsRUFBRTtBQUFaLEtBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHVixVQUFVLENBQUNGLE1BQUQsQ0FKYixDQUZGLENBSkYsQ0FERjtBQWdCRCxDQTdDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9za2lsbHMuZDMzOTBiNWNlMDI0NzM3N2E4MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIFR5cG9ncmFwaHksIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHByb2ZpbGVEYXRhIGZyb20gJ34vY29uZmlncy9kYXRhJztcclxuaW1wb3J0IHsgSVNraWxsIH0gZnJvbSAnfi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgUmVhY3RJY29uIGZyb20gJ34vY29uZmlncy9yZWFjdEljb24nO1xyXG5cclxuaW1wb3J0ICd+L2xheW91dHMvc2tpbGxzLmxlc3MnO1xyXG5cclxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB7IHNraWxscyB9ID0gcHJvZmlsZURhdGE7XHJcbiAgY29uc3QgcmVuZGVySXRlbSA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtOiBJU2tpbGwpID0+IChcclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc3Bhbj17MjR9XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsQ29sXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGl0ZW0uY29sb3IgfHwgXCIjZDNhZGY3XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8UmVhY3RJY29uIC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3Ryb25nPntpdGVtLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckl0ZW0oaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2ID5cclxuICAgIClcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNraWxsczwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VGl0bGUgbGV2ZWw9ezF9IGNsYXNzTmFtZT1cImFudGRUaXRsZVwiPlNraWxsczwvVGl0bGU+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgICAgYm9keVN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtyZW5kZXJJdGVtKHNraWxscyl9XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9