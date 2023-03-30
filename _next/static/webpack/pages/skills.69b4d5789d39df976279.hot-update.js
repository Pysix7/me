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
/* harmony import */ var _components_MasonryLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/MasonryLayout */ "./src/components/MasonryLayout/index.tsx");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/layouts/skills.less */ "./src/layouts/skills.less");
/* harmony import */ var _layouts_skills_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_layouts_skills_less__WEBPACK_IMPORTED_MODULE_11__);







var _this = undefined,
    _jsxFileName = "C:\\projects\\portfolio\\src\\pages\\skills.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
    Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_5___default.a.Text;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var skills = _configs_data__WEBPACK_IMPORTED_MODULE_8__["default"].skills;

  var renderItem = function renderItem(data) {
    return __jsx(react_media__WEBPACK_IMPORTED_MODULE_10__["default"], {
      query: "(max-width: 599px)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, function (isMobile) {
      return __jsx(_components_MasonryLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        columns: isMobile ? 1 : 3,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, data.map(function (item) {
        return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
          // key={item.key}
          className: "skillCol",
          style: {
            backgroundColor: item.color || "#d3adf7"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }
        }, __jsx(Text, {
          strong: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }
        }, item.title), __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }
        }, item.children && item.children.length > 0 && __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }
        }, renderItem(item.children))));
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Skills")), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(Title, {
    level: 1,
    className: "antdTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Skills"), renderItem(skills)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NraWxscy50c3giXSwibmFtZXMiOlsiVGl0bGUiLCJUZXh0Iiwic2tpbGxzIiwicHJvZmlsZURhdGEiLCJyZW5kZXJJdGVtIiwiZGF0YSIsImlzTW9iaWxlIiwibWFwIiwiaXRlbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGl0bGUiLCJjaGlsZHJlbiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7SUFFUUEsSyw4REFBQUEsSztJQUFPQyxJLDhEQUFBQSxJO0FBRUEsMkVBQU07QUFBQSxNQUNYQyxNQURXLEdBQ0FDLHFEQURBLENBQ1hELE1BRFc7O0FBR25CLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBZTtBQUNoQyxXQUNFLE1BQUMsb0RBQUQ7QUFBTyxXQUFLLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLFVBQUNDLFFBQUQ7QUFBQSxhQUNDLE1BQUMsaUVBQUQ7QUFBZSxlQUFPLEVBQUVBLFFBQVEsR0FBRyxDQUFILEdBQU8sQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsZUFDUjtBQUNFO0FBQ0EsbUJBQVMsRUFBQyxVQUZaO0FBR0UsZUFBSyxFQUFFO0FBQUVDLDJCQUFlLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxJQUFjO0FBQWpDLFdBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtFLE1BQUMsSUFBRDtBQUFNLGdCQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFjRixJQUFJLENBQUNHLEtBQW5CLENBTEYsRUFNRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR0gsSUFBSSxDQUFDSSxRQUFMLElBQWlCSixJQUFJLENBQUNJLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUF4QyxJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR1QsVUFBVSxDQUFDSSxJQUFJLENBQUNJLFFBQU4sQ0FEYixDQUZKLENBTkYsQ0FEUTtBQUFBLE9BQVQsQ0FESCxDQUREO0FBQUEsS0FESCxDQURGO0FBd0JELEdBekJEOztBQTJCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRSxDQUFkO0FBQWlCLGFBQVMsRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1IsVUFBVSxDQUFDRixNQUFELENBRmIsQ0FKRixDQURGO0FBV0QsQ0F6Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2tpbGxzLjY5YjRkNTc4OWQzOWRmOTc2Mjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBUeXBvZ3JhcGh5LCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBwcm9maWxlRGF0YSBmcm9tICd+L2NvbmZpZ3MvZGF0YSc7XHJcbmltcG9ydCB7IElTa2lsbCB9IGZyb20gJ34vaW50ZXJmYWNlJztcclxuaW1wb3J0IE1hc29ucnlMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL01hc29ucnlMYXlvdXQnO1xyXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xyXG5cclxuaW1wb3J0ICd+L2xheW91dHMvc2tpbGxzLmxlc3MnO1xyXG5cclxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB7IHNraWxscyB9ID0gcHJvZmlsZURhdGE7XHJcblxyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA1OTlweClcIj5cclxuICAgICAgICB7KGlzTW9iaWxlOiBib29sZWFuKSA9PiAoXHJcbiAgICAgICAgICA8TWFzb25yeUxheW91dCBjb2x1bW5zPXtpc01vYmlsZSA/IDEgOiAzfT5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtOiBJU2tpbGwpID0+IChcclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgLy8ga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsQ29sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB8fCBcIiNkM2FkZjdcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0cm9uZz57aXRlbS50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJJdGVtKGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9NYXNvbnJ5TGF5b3V0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWVkaWE+XHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2tpbGxzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUaXRsZSBsZXZlbD17MX0gY2xhc3NOYW1lPVwiYW50ZFRpdGxlXCI+U2tpbGxzPC9UaXRsZT5cclxuICAgICAgICB7cmVuZGVySXRlbShza2lsbHMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9