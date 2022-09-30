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
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/layouts/skills.less */ "./src/layouts/skills.less");
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_layouts_skills_less__WEBPACK_IMPORTED_MODULE_9__);







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
        lineNumber: 15,
        columnNumber: 7
      }
    }, data.map(function (_ref) {
      var key = _ref.key,
          color = _ref.color,
          title = _ref.title,
          children = _ref.children,
          Icon = _ref.Icon;
      return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        key: key,
        className: "skillCol",
        style: {
          borderColor: color || "#d3adf7"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, Icon && __jsx(Icon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }
      }), __jsx(Text, {
        strong: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, title)), __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, children && children.length > 0 && __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, renderItem(children))));
    }));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Skills")), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(Title, {
    level: 1,
    className: "antdTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NraWxscy50c3giXSwibmFtZXMiOlsiVGl0bGUiLCJUZXh0Iiwic2tpbGxzIiwicHJvZmlsZURhdGEiLCJyZW5kZXJJdGVtIiwiZGF0YSIsIm1hcCIsImtleSIsImNvbG9yIiwidGl0bGUiLCJjaGlsZHJlbiIsIkljb24iLCJib3JkZXJDb2xvciIsImxlbmd0aCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQTtJQUVRQSxLLDhEQUFBQSxLO0lBQU9DLEksOERBQUFBLEk7QUFFQSwyRUFBTTtBQUFBLE1BQ1hDLE1BRFcsR0FDQUMscURBREEsQ0FDWEQsTUFEVzs7QUFFbkIsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ2hDLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUztBQUFBLFVBQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFVBQVFDLEtBQVIsUUFBUUEsS0FBUjtBQUFBLFVBQWVDLEtBQWYsUUFBZUEsS0FBZjtBQUFBLFVBQXNCQyxRQUF0QixRQUFzQkEsUUFBdEI7QUFBQSxVQUFnQ0MsSUFBaEMsUUFBZ0NBLElBQWhDO0FBQUEsYUFDUjtBQUNFLFlBQUksRUFBRSxFQURSO0FBRUUsV0FBRyxFQUFFSixHQUZQO0FBR0UsaUJBQVMsRUFBQyxVQUhaO0FBSUUsYUFBSyxFQUFFO0FBQUVLLHFCQUFXLEVBQUVKLEtBQUssSUFBSTtBQUF4QixTQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dHLElBQUksSUFBSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURYLEVBRUUsTUFBQyxJQUFEO0FBQU0sY0FBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBY0YsS0FBZCxDQUZGLENBTkYsRUFVRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsUUFBUSxJQUFJQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBOUIsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dULFVBQVUsQ0FBQ00sUUFBRCxDQURiLENBRkosQ0FWRixDQURRO0FBQUEsS0FBVCxDQURILENBREY7QUF3QkQsR0F6QkQ7O0FBMkJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFLENBQWQ7QUFBaUIsYUFBUyxFQUFDLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxhQUFTLEVBQUU7QUFBRUksY0FBUSxFQUFFO0FBQVosS0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdWLFVBQVUsQ0FBQ0YsTUFBRCxDQUpiLENBRkYsQ0FKRixDQURGO0FBZ0JELENBN0NEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NraWxscy43NDhmOWQxZTMyZWIzNzc3YTAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgVHlwb2dyYXBoeSwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgcHJvZmlsZURhdGEgZnJvbSAnfi9jb25maWdzL2RhdGEnO1xyXG5pbXBvcnQgeyBJU2tpbGwgfSBmcm9tICd+L2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgJ34vbGF5b3V0cy9za2lsbHMubGVzcyc7XHJcblxyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2tpbGxzIH0gPSBwcm9maWxlRGF0YTtcclxuICBjb25zdCByZW5kZXJJdGVtID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YS5tYXAoKHsga2V5LCBjb2xvciwgdGl0bGUsIGNoaWxkcmVuLCBJY29uIH06IElTa2lsbCkgPT4gKFxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzcGFuPXsyNH1cclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsQ29sXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGNvbG9yIHx8IFwiI2QzYWRmN1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge0ljb24gJiYgPEljb24gLz59XHJcbiAgICAgICAgICAgICAgPFRleHQgc3Ryb25nPnt0aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckl0ZW0oY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2RpdiA+XHJcbiAgICApXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ta2lsbHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRpdGxlIGxldmVsPXsxfSBjbGFzc05hbWU9XCJhbnRkVGl0bGVcIj5Ta2lsbHM8L1RpdGxlPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgIGJvZHlTdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVySXRlbShza2lsbHMpfVxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==