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
          Icon = _ref.icon;
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
      }, __jsx(Icon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NraWxscy50c3giXSwibmFtZXMiOlsiVGl0bGUiLCJUZXh0Iiwic2tpbGxzIiwicHJvZmlsZURhdGEiLCJyZW5kZXJJdGVtIiwiZGF0YSIsIm1hcCIsImtleSIsImNvbG9yIiwidGl0bGUiLCJjaGlsZHJlbiIsIkljb24iLCJpY29uIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBR0E7SUFFUUEsSyw4REFBQUEsSztJQUFPQyxJLDhEQUFBQSxJO0FBRUEsMkVBQU07QUFBQSxNQUNYQyxNQURXLEdBQ0FDLHFEQURBLENBQ1hELE1BRFc7O0FBRW5CLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBZTtBQUNoQyxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsSUFBSSxDQUFDQyxHQUFMLENBQVM7QUFBQSxVQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxVQUFRQyxLQUFSLFFBQVFBLEtBQVI7QUFBQSxVQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxVQUFzQkMsUUFBdEIsUUFBc0JBLFFBQXRCO0FBQUEsVUFBc0NDLElBQXRDLFFBQWdDQyxJQUFoQztBQUFBLGFBQ1I7QUFDRSxZQUFJLEVBQUUsRUFEUjtBQUVFLFdBQUcsRUFBRUwsR0FGUDtBQUdFLGlCQUFTLEVBQUMsVUFIWjtBQUlFLGFBQUssRUFBRTtBQUFFTSxxQkFBVyxFQUFFTCxLQUFLLElBQUk7QUFBeEIsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRSxNQUFDLElBQUQ7QUFBTSxjQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFjQyxLQUFkLENBRkYsQ0FORixFQVVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQixDQUE5QixJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1YsVUFBVSxDQUFDTSxRQUFELENBRGIsQ0FGSixDQVZGLENBRFE7QUFBQSxLQUFULENBREgsQ0FERjtBQXdCRCxHQXpCRDs7QUEyQkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUUsQ0FBZDtBQUFpQixhQUFTLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLGFBQVMsRUFBRTtBQUFFSyxjQUFRLEVBQUU7QUFBWixLQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR1gsVUFBVSxDQUFDRixNQUFELENBSmIsQ0FGRixDQUpGLENBREY7QUFnQkQsQ0E3Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2tpbGxzLjUxMWU0Zjc4OGNiMDMzZjEzNmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBUeXBvZ3JhcGh5LCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBwcm9maWxlRGF0YSBmcm9tICd+L2NvbmZpZ3MvZGF0YSc7XHJcbmltcG9ydCB7IElTa2lsbCB9IGZyb20gJ34vaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCAnfi9sYXlvdXRzL3NraWxscy5sZXNzJztcclxuXHJcbmNvbnN0IHsgVGl0bGUsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgeyBza2lsbHMgfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoeyBrZXksIGNvbG9yLCB0aXRsZSwgY2hpbGRyZW4sIGljb246IEljb24gfTogSVNraWxsKSA9PiAoXHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNwYW49ezI0fVxyXG4gICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGxDb2xcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogY29sb3IgfHwgXCIjZDNhZGY3XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN0cm9uZz57dGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJJdGVtKGNoaWxkcmVuKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2tpbGxzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUaXRsZSBsZXZlbD17MX0gY2xhc3NOYW1lPVwiYW50ZFRpdGxlXCI+U2tpbGxzPC9UaXRsZT5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgICBib2R5U3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JlbmRlckl0ZW0oc2tpbGxzKX1cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=