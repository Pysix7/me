webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/configs/data.ts":
/*!*****************************!*\
  !*** ./src/configs/data.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _reactIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactIcon */ "./src/configs/reactIcon.jsx");

var data = {
  name: "Prathap K",
  description: "just a guy who's developer for fun!",
  skills: [{
    title: "JavaScript",
    key: "javascript",
    color: "#fadb14"
  }, {
    title: "HTML",
    key: "html",
    color: "#ff4d4f"
  }, {
    title: "CSS",
    key: "css",
    children: [{
      title: "LESS",
      key: "less"
    }]
  }, {
    title: "MERN",
    key: "mern",
    children: [{
      title: "MongoDB",
      key: "mongo-db",
      color: "#237804"
    }, {
      title: "Express JS",
      key: "express-js",
      color: "#faad14"
    }, {
      title: "React",
      key: "react",
      color: "#69c0ff",
      icon: _reactIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
      children: [{
        title: "Next.JS",
        key: "nextjs"
      }, {
        title: "Create React App",
        key: "cra"
      }, {
        title: "Ant Design",
        key: "ant-design"
      }, {
        title: "Redux",
        key: "redux"
      }, {
        title: "React Router",
        key: "redux-router"
      }]
    }, {
      title: "React Native",
      key: "react-native",
      color: "#69c0ff"
    }, {
      title: "Node jS",
      key: "node-js",
      color: "#95de64"
    }]
  }, {
    title: "Webpack",
    key: "webpack",
    color: "#69c0ff"
  }, {
    title: "Electron.js",
    key: "electron.js",
    color: "#69c0ff"
  }, {
    title: "Docker",
    key: "docker",
    color: "#69c0ff"
  }, {
    title: "Micro Services",
    key: "micro-services"
  }],
  projects: [{
    title: "Memory Game",
    features: ["simple cards game", "3 difficulty levels", "websockets api"],
    links: [{
      url: "http://pysix-game.herokuapp.com",
      title: "Memory Game"
    }, {
      url: "https://github.com/Pysix7/memory-game",
      title: "Codebase - github"
    }]
  }, {
    title: "Chat app",
    features: ["MERN Stack", "PWA (Progessive Web application)", "user authentication (login, signup)", "multi user chat (by creating and joining rooms)", "global chat", "chat model - to create and maintain `roomid` and `participants`", "UUID based room-id", "contact list to display the users", "react hooks based"],
    links: [{
      url: "https://pysix-chat.herokuapp.com/",
      title: "Chat (React PWA)"
    }, {
      url: "https://pysix-chat-server.herokuapp.com/ui",
      title: "Node based Global chat UI"
    }, {
      url: "https://github.com/Pysix7/myApps/tree/master/apps",
      title: "Codebase - github"
    }]
  }, {
    title: "Carbooking app",
    features: ["MERN Stack", "user authentication (login, signup).", "roundtrip.", "dummy stripe integration for booking confirmation."],
    links: [{
      url: "https://carbooking1.herokuapp.com",
      title: "Carbooking"
    }, {
      url: "https://github.com/Pysix7/myApps/tree/master/apps/cb",
      title: "Codebase - github"
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

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

/***/ }),

/***/ "./src/configs/reactIcon.jsx":
/*!***********************************!*\
  !*** ./src/configs/reactIcon.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\work\\projects\\portfolio\\src\\configs\\reactIcon.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 1
    }
  }, __jsx("path", {
    d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 63
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZ3MvZGF0YS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZ3MvcmVhY3RJY29uLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzIiwidGl0bGUiLCJrZXkiLCJjb2xvciIsImNoaWxkcmVuIiwiaWNvbiIsIlJlYWN0SWNvbiIsInByb2plY3RzIiwiZmVhdHVyZXMiLCJsaW5rcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUVBLElBQU1BLElBQWtCLEdBQUc7QUFDekJDLE1BQUksRUFBRSxXQURtQjtBQUV6QkMsYUFBVyxFQUFFLHFDQUZZO0FBR3pCQyxRQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFLLEVBQUUsWUFEVDtBQUVFQyxPQUFHLEVBQUUsWUFGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQURNLEVBTU47QUFDRUYsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsT0FBRyxFQUFFLE1BRlA7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0FOTSxFQVdOO0FBQ0VGLFNBQUssRUFBRSxLQURUO0FBRUVDLE9BQUcsRUFBRSxLQUZQO0FBR0VFLFlBQVEsRUFBRSxDQUNSO0FBQ0VILFdBQUssRUFBRSxNQURUO0FBRUVDLFNBQUcsRUFBRTtBQUZQLEtBRFE7QUFIWixHQVhNLEVBcUJOO0FBQ0VELFNBQUssRUFBRSxNQURUO0FBRUVDLE9BQUcsRUFBRSxNQUZQO0FBR0VFLFlBQVEsRUFBRSxDQUNSO0FBQ0VILFdBQUssRUFBRSxTQURUO0FBRUVDLFNBQUcsRUFBRSxVQUZQO0FBR0VDLFdBQUssRUFBRTtBQUhULEtBRFEsRUFNUjtBQUNFRixXQUFLLEVBQUUsWUFEVDtBQUVFQyxTQUFHLEVBQUUsWUFGUDtBQUdFQyxXQUFLLEVBQUU7QUFIVCxLQU5RLEVBV1I7QUFDRUYsV0FBSyxFQUFFLE9BRFQ7QUFFRUMsU0FBRyxFQUFFLE9BRlA7QUFHRUMs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUQsQ0FEcUIsQ0FBTjtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMDA2NThjN2ZmMmFkOGEzMzE0ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9maWxlRGF0YSB9IGZyb20gJ34vaW50ZXJmYWNlJztcclxuaW1wb3J0IFJlYWN0SWNvbiBmcm9tICcuL3JlYWN0SWNvbic7XHJcblxyXG5jb25zdCBkYXRhOiBJUHJvZmlsZURhdGEgPSB7XHJcbiAgbmFtZTogXCJQcmF0aGFwIEtcIixcclxuICBkZXNjcmlwdGlvbjogXCJqdXN0IGEgZ3V5IHdobydzIGRldmVsb3BlciBmb3IgZnVuIVwiLFxyXG4gIHNraWxsczogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIGtleTogXCJqYXZhc2NyaXB0XCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmYWRiMTRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhUTUxcIixcclxuICAgICAga2V5OiBcImh0bWxcIixcclxuICAgICAgY29sb3I6IFwiI2ZmNGQ0ZlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ1NTXCIsXHJcbiAgICAgIGtleTogXCJjc3NcIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJMRVNTXCIsXHJcbiAgICAgICAgICBrZXk6IFwibGVzc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNRVJOXCIsXHJcbiAgICAgIGtleTogXCJtZXJuXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiTW9uZ29EQlwiLFxyXG4gICAgICAgICAga2V5OiBcIm1vbmdvLWRiXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjMjM3ODA0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJFeHByZXNzIEpTXCIsXHJcbiAgICAgICAgICBrZXk6IFwiZXhwcmVzcy1qc1wiLFxyXG4gICAgICAgICAgY29sb3I6IFwiI2ZhYWQxNFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgIGtleTogXCJyZWFjdFwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgICAgICAgaWNvbjogUmVhY3RJY29uLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk5leHQuSlNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwibmV4dGpzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0ZSBSZWFjdCBBcHBcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiY3JhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFudCBEZXNpZ25cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiYW50LWRlc2lnblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJSZWR1eFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJyZWR1eFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdCBSb3V0ZXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwicmVkdXgtcm91dGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgICAgICAga2V5OiBcInJlYWN0LW5hdGl2ZVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiTm9kZSBqU1wiLFxyXG4gICAgICAgICAga2V5OiBcIm5vZGUtanNcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiM5NWRlNjRcIixcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldlYnBhY2tcIixcclxuICAgICAga2V5OiBcIndlYnBhY2tcIixcclxuICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRWxlY3Ryb24uanNcIixcclxuICAgICAga2V5OiBcImVsZWN0cm9uLmpzXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM2OWMwZmZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkRvY2tlclwiLFxyXG4gICAgICBrZXk6IFwiZG9ja2VyXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM2OWMwZmZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1pY3JvIFNlcnZpY2VzXCIsXHJcbiAgICAgIGtleTogXCJtaWNyby1zZXJ2aWNlc1wiXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcHJvamVjdHM6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVtb3J5IEdhbWVcIixcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICBcInNpbXBsZSBjYXJkcyBnYW1lXCIsXHJcbiAgICAgICAgXCIzIGRpZmZpY3VsdHkgbGV2ZWxzXCIsXHJcbiAgICAgICAgXCJ3ZWJzb2NrZXRzIGFwaVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly9weXNpeC1nYW1lLmhlcm9rdWFwcC5jb21cIixcclxuICAgICAgICAgIHRpdGxlOiBcIk1lbW9yeSBHYW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUHlzaXg3L21lbW9yeS1nYW1lXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDb2RlYmFzZSAtIGdpdGh1YlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJDaGF0IGFwcFwiLFxyXG4gICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgIFwiTUVSTiBTdGFja1wiLFxyXG4gICAgICAgIFwiUFdBIChQcm9nZXNzaXZlIFdlYiBhcHBsaWNhdGlvbilcIixcclxuICAgICAgICBcInVzZXIgYXV0aGVudGljYXRpb24gKGxvZ2luLCBzaWdudXApXCIsXHJcbiAgICAgICAgXCJtdWx0aSB1c2VyIGNoYXQgKGJ5IGNyZWF0aW5nIGFuZCBqb2luaW5nIHJvb21zKVwiLFxyXG4gICAgICAgIFwiZ2xvYmFsIGNoYXRcIixcclxuICAgICAgICBcImNoYXQgbW9kZWwgLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGByb29taWRgIGFuZCBgcGFydGljaXBhbnRzYFwiLFxyXG4gICAgICAgIFwiVVVJRCBiYXNlZCByb29tLWlkXCIsXHJcbiAgICAgICAgXCJjb250YWN0IGxpc3QgdG8gZGlzcGxheSB0aGUgdXNlcnNcIixcclxuICAgICAgICBcInJlYWN0IGhvb2tzIGJhc2VkXCJcclxuICAgICAgXSxcclxuICAgICAgbGlua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9weXNpeC1jaGF0Lmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDaGF0IChSZWFjdCBQV0EpXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9weXNpeC1jaGF0LXNlcnZlci5oZXJva3VhcHAuY29tL3VpXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJOb2RlIGJhc2VkIEdsb2JhbCBjaGF0IFVJXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1B5c2l4Ny9teUFwcHMvdHJlZS9tYXN0ZXIvYXBwc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQ29kZWJhc2UgLSBnaXRodWJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ2FyYm9va2luZyBhcHBcIixcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICBcIk1FUk4gU3RhY2tcIixcclxuICAgICAgICBcInVzZXIgYXV0aGVudGljYXRpb24gKGxvZ2luLCBzaWdudXApLlwiLFxyXG4gICAgICAgIFwicm91bmR0cmlwLlwiLFxyXG4gICAgICAgIFwiZHVtbXkgc3RyaXBlIGludGVncmF0aW9uIGZvciBib29raW5nIGNvbmZpcm1hdGlvbi5cIixcclxuICAgICAgXSxcclxuICAgICAgbGlua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jYXJib29raW5nMS5oZXJva3VhcHAuY29tXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDYXJib29raW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUHlzaXg3L215QXBwcy90cmVlL21hc3Rlci9hcHBzL2NiXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDb2RlYmFzZSAtIGdpdGh1YlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBkYXRhOyIsImV4cG9ydCBkZWZhdWx0ICgpPT4gKDw+XHJcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNNDE4LjIgMTc3LjJjLTUuNC0xLjgtMTAuOC0zLjUtMTYuMi01LjEuOS0zLjcgMS43LTcuNCAyLjUtMTEuMSAxMi4zLTU5LjYgNC4yLTEwNy41LTIzLjEtMTIzLjMtMjYuMy0xNS4xLTY5LjIuNi0xMTIuNiAzOC40LTQuMyAzLjctOC41IDcuNi0xMi41IDExLjUtMi43LTIuNi01LjUtNS4yLTguMy03LjctNDUuNS00MC40LTkxLjEtNTcuNC0xMTguNC00MS41LTI2LjIgMTUuMi0zNCA2MC4zLTIzIDExNi43IDEuMSA1LjYgMi4zIDExLjEgMy43IDE2LjctNi40IDEuOC0xMi43IDMuOC0xOC42IDUuOUMzOC4zIDE5Ni4yIDAgMjI1LjQgMCAyNTUuNmMwIDMxLjIgNDAuOCA2Mi41IDk2LjMgODEuNSA0LjUgMS41IDkgMyAxMy42IDQuMy0xLjUgNi0yLjggMTEuOS00IDE4LTEwLjUgNTUuNS0yLjMgOTkuNSAyMy45IDExNC42IDI3IDE1LjYgNzIuNC0uNCAxMTYuNi0zOS4xIDMuNS0zLjEgNy02LjMgMTAuNS05LjcgNC40IDQuMyA5IDguNCAxMy42IDEyLjQgNDIuOCAzNi44IDg1LjEgNTEuNyAxMTEuMiAzNi42IDI3LTE1LjYgMzUuOC02Mi45IDI0LjQtMTIwLjUtLjktNC40LTEuOS04LjktMy0xMy41IDMuMi0uOSA2LjMtMS45IDkuNC0yLjkgNTcuNy0xOS4xIDk5LjUtNTAgOTkuNS04MS43IDAtMzAuMy0zOS40LTU5LjctOTMuOC03OC40ek0yODIuOSA5Mi4zYzM3LjItMzIuNCA3MS45LTQ1LjEgODcuNy0zNiAxNi45IDkuNyAyMy40IDQ4LjkgMTIuOCAxMDAuNC0uNyAzLjQtMS40IDYuNy0yLjMgMTAtMjIuMi01LTQ0LjctOC42LTY3LjMtMTAuNi0xMy0xOC42LTI3LjItMzYuNC00Mi42LTUzLjEgMy45LTMuNyA3LjctNy4yIDExLjctMTAuN3pNMTY3LjIgMzA3LjVjNS4xIDguNyAxMC4zIDE3LjQgMTUuOCAyNS45LTE1LjYtMS43LTMxLjEtNC4yLTQ2LjQtNy41IDQuNC0xNC40IDkuOS0yOS4zIDE2LjMtNDQuNSA0LjYgOC44IDkuMyAxNy41IDE0LjMgMjYuMXptLTMwLjMtMTIwLjNjMTQuNC0zLjIgMjkuNy01LjggNDUuNi03LjgtNS4zIDguMy0xMC41IDE2LjgtMTUuNCAyNS40LTQuOSA4LjUtOS43IDE3LjItMTQuMiAyNi02LjMtMTQuOS0xMS42LTI5LjUtMTYtNDMuNnptMjcuNCA2OC45YzYuNi0xMy44IDEzLjgtMjcuMyAyMS40LTQwLjZzMTUuOC0yNi4yIDI0LjQtMzguOWMxNS0xLjEgMzAuMy0xLjcgNDUuOS0xLjdzMzEgLjYgNDUuOSAxLjdjOC41IDEyLjYgMTYuNiAyNS41IDI0LjMgMzguN3MxNC45IDI2LjcgMjEuNyA0MC40Yy02LjcgMTMuOC0xMy45IDI3LjQtMjEuNiA0MC44LTcuNiAxMy4zLTE1LjcgMjYuMi0yNC4yIDM5LTE0LjkgMS4xLTMwLjQgMS42LTQ2LjEgMS42cy0zMC45LS41LTQ1LjYtMS40Yy04LjctMTIuNy0xNi45LTI1LjctMjQuNi0zOXMtMTQuOC0yNi44LTIxLjUtNDAuNnptMTgwLjYgNTEuMmM1LjEtOC44IDkuOS0xNy43IDE0LjYtMjYuNyA2LjQgMTQuNSAxMiAyOS4yIDE2LjkgNDQuMy0xNS41IDMuNS0zMS4yIDYuMi00NyA4IDUuNC04LjQgMTAuNS0xNyAxNS41LTI1LjZ6bTE0LjQtNzYuNWMtNC43LTguOC05LjUtMTcuNi0xNC41LTI2LjItNC45LTguNS0xMC0xNi45LTE1LjMtMjUuMiAxNi4xIDIgMzEuNSA0LjcgNDUuOSA4LTQuNiAxNC44LTEwIDI5LjItMTYuMSA0My40ek0yNTYuMiAxMTguM2MxMC41IDExLjQgMjAuNCAyMy40IDI5LjYgMzUuOC0xOS44LS45LTM5LjctLjktNTkuNSAwIDkuOC0xMi45IDE5LjktMjQuOSAyOS45LTM1Ljh6TTE0MC4yIDU3YzE2LjgtOS44IDU0LjEgNC4yIDkzLjQgMzkgMi41IDIuMiA1IDQuNiA3LjYgNy0xNS41IDE2LjctMjkuOCAzNC41LTQyLjkgNTMuMS0yMi42IDItNDUgNS41LTY3LjIgMTAuNC0xLjMtNS4xLTIuNC0xMC4zLTMuNS0xNS41LTkuNC00OC40LTMuMi04NC45IDEyLjYtOTR6bS0yNC41IDI2My42Yy00LjItMS4yLTguMy0yLjUtMTIuNC0zLjktMjEuMy02LjctNDUuNS0xNy4zLTYzLTMxLjItMTAuMS03LTE2LjktMTcuOC0xOC44LTI5LjkgMC0xOC4zIDMxLjYtNDEuNyA3Ny4yLTU3LjYgNS43LTIgMTEuNS0zLjggMTcuMy01LjUgNi44IDIxLjcgMTUgNDMgMjQuNSA2My42LTkuNiAyMC45LTE3LjkgNDIuNS0yNC44IDY0LjV6bTExNi42IDk4Yy0xNi41IDE1LjEtMzUuNiAyNy4xLTU2LjQgMzUuMy0xMS4xIDUuMy0yMy45IDUuOC0zNS4zIDEuMy0xNS45LTkuMi0yMi41LTQ0LjUtMTMuNS05MiAxLjEtNS42IDIuMy0xMS4yIDMuNy0xNi43IDIyLjQgNC44IDQ1IDguMSA2Ny45IDkuOCAxMy4yIDE4LjcgMjcuNyAzNi42IDQzLjIgNTMuNC0zLjIgMy4xLTYuNCA2LjEtOS42IDguOXptMjQuNS0yNC4zYy0xMC4yLTExLTIwLjQtMjMuMi0zMC4zLTM2LjMgOS42LjQgMTkuNS42IDI5LjUuNiAxMC4zIDAgMjAuNC0uMiAzMC40LS43LTkuMiAxMi43LTE5LjEgMjQuOC0yOS42IDM2LjR6bTEzMC43IDMwYy0uOSAxMi4yLTYuOSAyMy42LTE2LjUgMzEuMy0xNS45IDkuMi00OS44LTIuOC04Ni40LTM0LjItNC4yLTMuNi04LjQtNy41LTEyLjctMTEuNSAxNS4zLTE2LjkgMjkuNC0zNC44IDQyLjItNTMuNiAyMi45LTEuOSA0NS43LTUuNCA2OC4yLTEwLjUgMSA0LjEgMS45IDguMiAyLjcgMTIuMiA0LjkgMjEuNiA1LjcgNDQuMSAyLjUgNjYuM3ptMTguMi0xMDcuNWMtMi44LjktNS42IDEuOC04LjUgMi42LTctMjEuOC0xNS42LTQzLjEtMjUuNS02My44IDkuNi0yMC40IDE3LjctNDEuNCAyNC41LTYyLjkgNS4yIDEuNSAxMC4yIDMuMSAxNSA0LjcgNDYuNiAxNiA3OS4zIDM5LjggNzkuMyA1OCAwIDE5LjYtMzQuOSA0NC45LTg0LjggNjEuNHptLTE0OS43LTE1YzI1LjMgMCA0NS44LTIwLjUgNDUuOC00NS44cy0yMC41LTQ1LjgtNDUuOC00NS44Yy0yNS4zIDAtNDUuOCAyMC41LTQ1LjggNDUuOHMyMC41IDQ1LjggNDUuOCA0NS44elwiLz48L3N2Zz5cclxuPC8+KSJdLCJzb3VyY2VSb290IjoiIn0=