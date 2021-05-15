webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ \"./node_modules/antd/lib/card/style/index.js\");\n/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var configs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! configs/data */ \"./src/configs/data.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/prathap/projects/pysix/me/src/pages/projects.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"Projects\")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      margin: '10px 20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"My Projects\"), __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, configs_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].projects.map(function (item) {\n    return __jsx(\"div\", {\n      key: \"project-\".concat(item.title),\n      style: {\n        borderBottom: '1px dashed blueviolet',\n        marginTop: 10\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }\n    }, item.title), __jsx(\"div\", {\n      style: {\n        marginLeft: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }\n    }, \"features:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, item.features.map(function (feature) {\n      return __jsx(\"li\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }\n      }, feature);\n    })), item.appLinks && item.appLinks.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 21\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 23\n      }\n    }, \"app links:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }\n    }, item.appLinks.map(function (link) {\n      return __jsx(\"li\", {\n        key: \"link-\".concat(link.url),\n        style: {\n          fontSize: '15px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 27\n        }\n      }, __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 29\n        }\n      }, __jsx(\"a\", {\n        href: link.url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 31\n        }\n      }, link.title)));\n    }))), item.todos && item.todos.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 23\n      }\n    }, \"todos:\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 23\n      }\n    }, item.todos.map(function (todo) {\n      return __jsx(\"li\", {\n        key: \"todo-\".concat(todo),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 27\n        }\n      }, todo);\n    })))));\n  })))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD84MTk5Il0sIm5hbWVzIjpbIm1hcmdpbiIsInByb2ZpbGVEYXRhIiwicHJvamVjdHMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiYXBwTGlua3MiLCJsZW5ndGgiLCJsaW5rIiwidXJsIiwiZm9udFNpemUiLCJ0b2RvcyIsInRvZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQVcsQ0FBQ0MsUUFBWixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsSUFBRDtBQUFBLFdBQ3hCO0FBQ0UsU0FBRyxvQkFBYUEsSUFBSSxDQUFDQyxLQUFsQixDQURMO0FBRUUsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUUsdUJBQWhCO0FBQXlDQyxpQkFBUyxFQUFFO0FBQXBELE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsSUFBSSxDQUFDQyxLQUFWLENBSkYsRUFLRTtBQUFLLFdBQUssRUFBRTtBQUFFRyxrQkFBVSxFQUFFO0FBQWQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0osSUFBSSxDQUFDSyxRQUFMLENBQWNOLEdBQWQsQ0FBa0IsVUFBQ08sT0FBRDtBQUFBLGFBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsT0FBTCxDQURpQjtBQUFBLEtBQWxCLENBREgsQ0FGRixFQU9HTixJQUFJLENBQUNPLFFBQUwsSUFDQ1AsSUFBSSxDQUFDTyxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FEeEIsSUFFRyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUixJQUFJLENBQUNPLFFBQUwsQ0FBY1IsR0FBZCxDQUFrQixVQUFDVSxJQUFEO0FBQUEsYUFDakI7QUFBSSxXQUFHLGlCQUFVQSxJQUFJLENBQUNDLEdBQWYsQ0FBUDtBQUE2QixhQUFLLEVBQUU7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLEVBQUVGLElBQUksQ0FBQ0MsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9CRCxJQUFJLENBQUNSLEtBQXpCLENBREYsQ0FERixDQURpQjtBQUFBLEtBQWxCLENBREgsQ0FGRixDQVROLEVBc0JHRCxJQUFJLENBQUNZLEtBQUwsSUFDQ1osSUFBSSxDQUFDWSxLQUFMLENBQVdKLE1BQVgsR0FBb0IsQ0FEckIsSUFFRyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUixJQUFJLENBQUNZLEtBQUwsQ0FBV2IsR0FBWCxDQUFlLFVBQUNjLElBQUQ7QUFBQSxhQUNkO0FBQUksV0FBRyxpQkFBVUEsSUFBVixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEJBLElBQTFCLENBRGM7QUFBQSxLQUFmLENBREgsQ0FGRixDQXhCTixDQUxGLENBRHdCO0FBQUEsR0FBekIsQ0FESCxDQUZGLENBREYsQ0FKRixDQURhO0FBQUEsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHByb2ZpbGVEYXRhIGZyb20gJ2NvbmZpZ3MvZGF0YSc7XG5pbXBvcnQgeyBJUHJvamVjdCwgSUFwcExpbmsgfSBmcm9tICd+L2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlByb2plY3RzPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPENhcmQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMjBweCcgfX0+XG4gICAgICAgIDxoMT5NeSBQcm9qZWN0czwvaDE+XG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICB7cHJvZmlsZURhdGEucHJvamVjdHMubWFwKChpdGVtOiBJUHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LSR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggZGFzaGVkIGJsdWV2aW9sZXQnLCBtYXJnaW5Ub3A6IDEwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDE1IH19PlxuICAgICAgICAgICAgICAgIDxoMz5mZWF0dXJlczo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmZlYXR1cmVzLm1hcCgoZmVhdHVyZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57ZmVhdHVyZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7aXRlbS5hcHBMaW5rcyAmJlxuICAgICAgICAgICAgICAgICAgaXRlbS5hcHBMaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5hcHAgbGlua3M6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hcHBMaW5rcy5tYXAoKGxpbms6IElBcHBMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2BsaW5rLSR7bGluay51cmx9YH0gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfT57bGluay50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2l0ZW0udG9kb3MgJiZcbiAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+dG9kb3M6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b2Rvcy5tYXAoKHRvZG86IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgdG9kby0ke3RvZG99YH0+e3RvZG99PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICA8L2RpdiA+XG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n");

/***/ })

})