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
      Icon: _reactIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZ3MvZGF0YS50cyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzIiwidGl0bGUiLCJrZXkiLCJjb2xvciIsImNoaWxkcmVuIiwiSWNvbiIsIlJlYWN0SWNvbiIsInByb2plY3RzIiwiZmVhdHVyZXMiLCJsaW5rcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUVBLElBQU1BLElBQWtCLEdBQUc7QUFDekJDLE1BQUksRUFBRSxXQURtQjtBQUV6QkMsYUFBVyxFQUFFLHFDQUZZO0FBR3pCQyxRQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFLLEVBQUUsWUFEVDtBQUVFQyxPQUFHLEVBQUUsWUFGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQURNLEVBTU47QUFDRUYsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsT0FBRyxFQUFFLE1BRlA7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0FOTSxFQVdOO0FBQ0VGLFNBQUssRUFBRSxLQURUO0FBRUVDLE9BQUcsRUFBRSxLQUZQO0FBR0VFLFlBQVEsRUFBRSxDQUNSO0FBQ0VILFdBQUssRUFBRSxNQURUO0FBRUVDLFNBQUcsRUFBRTtBQUZQLEtBRFE7QUFIWixHQVhNLEVBcUJOO0FBQ0VELFNBQUssRUFBRSxNQURUO0FBRUVDLE9BQUcsRUFBRSxNQUZQO0FBR0VFLFlBQVEsRUFBRSxDQUNSO0FBQ0VILFdBQUssRUFBRSxTQURUO0FBRUVDLFNBQUcsRUFBRSxVQUZQO0FBR0VDLFdBQUssRUFBRTtBQUhULEtBRFEsRUFNUjtBQUNFRixXQUFLLEVBQUUsWUFEVDtBQUVFQyxTQUFHLEVBQUUsWUFGUDtBQUdFQyxXQUFLLEVBQUU7QUFIVCxLQU5RLEVBV1I7QUFDRUYsV0FBSyxFQUFFLE9BRFQ7QUFFRUMsU0FBRyxFQUFFLE9BRlA7QUFHRUMsV0FBSyxFQUFFLFNBSFQ7QUFJRUUsVUFBSSxFQUFFQyxrREFKUjtBQUtFRixjQUFRLEVBQUUsQ0FDUjtBQUNFSCxhQUFLLEVBQUUsU0FEVDtBQUVFQyxXQUFHLEVBQUU7QUFGUCxPQURRLEVBS1I7QUFDRUQsYUFBSyxFQUFFLGtCQURUO0FBRUVDLFdBQUcsRUFBRTtBQUZQLE9BTFEsRUFTUjtBQUNFRCxhQUFLLEVBQUUsWUFEVDtBQUVFQyxXQUFHLEVBQUU7QUFGUCxPQVRRLEVBYVI7QUFDRUQsYUFBSyxFQUFFLE9BRFQ7QUFFRUMsV0FBRyxFQUFFO0FBRlAsT0FiUSxFQWlCUjtBQUNFRCxhQUFLLEVBQUUsY0FEVDtBQUVFQyxXQUFHLEVBQUU7QUFGUCxPQWpCUTtBQUxaLEtBWFEsRUF1Q1I7QUFDRUQsV0FBSyxFQUFFLGNBRFQ7QUFFRUMsU0FBRyxFQUFFLGNBRlA7QUFHRUMsV0FBSyxFQUFFO0FBSFQsS0F2Q1EsRUE0Q1I7QUFDRUYsV0FBSyxFQUFFLFNBRFQ7QUFFRUMsU0FBRyxFQUFFLFNBRlA7QUFHRUMsV0FBSyxFQUFFO0FBSFQsS0E1Q1E7QUFIWixHQXJCTSxFQTJFTjtBQUNFRixTQUFLLEVBQUUsU0FEVDtBQUVFQyxPQUFHLEVBQUUsU0FGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQTNFTSxFQWdGTjtBQUNFRixTQUFLLEVBQUUsYUFEVDtBQUVFQyxPQUFHLEVBQUUsYUFGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQWhGTSxFQXFGTjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxPQUFHLEVBQUUsUUFGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQXJGTSxFQTBGTjtBQUNFRixTQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0ExRk0sQ0FIaUI7QUFrR3pCSyxVQUFRLEVBQUUsQ0FDUjtBQUNFTixTQUFLLEVBQUUsYUFEVDtBQUVFTyxZQUFRLEVBQUUsQ0FDUixtQkFEUSxFQUVSLHFCQUZRLEVBR1IsZ0JBSFEsQ0FGWjtBQU9FQyxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxTQUFHLEVBQUUsaUNBRFA7QUFFRVQsV0FBSyxFQUFFO0FBRlQsS0FESyxFQUtMO0FBQ0VTLFNBQUcsRUFBRSx1Q0FEUDtBQUVFVCxXQUFLLEVBQUU7QUFGVCxLQUxLO0FBUFQsR0FEUSxFQW1CUjtBQUNFQSxTQUFLLEVBQUUsVUFEVDtBQUVFTyxZQUFRLEVBQUUsQ0FDUixZQURRLEVBRVIsa0NBRlEsRUFHUixxQ0FIUSxFQUlSLGlEQUpRLEVBS1IsYUFMUSxFQU1SLGlFQU5RLEVBT1Isb0JBUFEsRUFRUixtQ0FSUSxFQVNSLG1CQVRRLENBRlo7QUFhRUMsU0FBSyxFQUFFLENBQ0w7QUFDRUMsU0FBRyxFQUFFLG1DQURQO0FBRUVULFdBQUssRUFBRTtBQUZULEtBREssRUFLTDtBQUNFUyxTQUFHLEVBQUUsNENBRFA7QUFFRVQsV0FBSyxFQUFFO0FBRlQsS0FMSyxFQVVMO0FBQ0VTLFNBQUcsRUFBRSxtREFEUDtBQUVFVCxXQUFLLEVBQUU7QUFGVCxLQVZLO0FBYlQsR0FuQlEsRUFnRFI7QUFDRUEsU0FBSyxFQUFFLGdCQURUO0FBRUVPLFlBQVEsRUFBRSxDQUNSLFlBRFEsRUFFUixzQ0FGUSxFQUdSLFlBSFEsRUFJUixvREFKUSxDQUZaO0FBUUVDLFNBQUssRUFBRSxDQUNMO0FBQ0VDLFNBQUcsRUFBRSxtQ0FEUDtBQUVFVCxXQUFLLEVBQUU7QUFGVCxLQURLLEVBS0w7QUFDRVMsU0FBRyxFQUFFLHNEQURQO0FBRUVULFdBQUssRUFBRTtBQUZULEtBTEs7QUFSVCxHQWhEUTtBQWxHZSxDQUEzQjtBQXVLZUosbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuZjI5MmUwMzkwYjNjYjRhYjI1ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9maWxlRGF0YSB9IGZyb20gJ34vaW50ZXJmYWNlJztcclxuaW1wb3J0IFJlYWN0SWNvbiBmcm9tICcuL3JlYWN0SWNvbic7XHJcblxyXG5jb25zdCBkYXRhOiBJUHJvZmlsZURhdGEgPSB7XHJcbiAgbmFtZTogXCJQcmF0aGFwIEtcIixcclxuICBkZXNjcmlwdGlvbjogXCJqdXN0IGEgZ3V5IHdobydzIGRldmVsb3BlciBmb3IgZnVuIVwiLFxyXG4gIHNraWxsczogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIGtleTogXCJqYXZhc2NyaXB0XCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmYWRiMTRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhUTUxcIixcclxuICAgICAga2V5OiBcImh0bWxcIixcclxuICAgICAgY29sb3I6IFwiI2ZmNGQ0ZlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ1NTXCIsXHJcbiAgICAgIGtleTogXCJjc3NcIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJMRVNTXCIsXHJcbiAgICAgICAgICBrZXk6IFwibGVzc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNRVJOXCIsXHJcbiAgICAgIGtleTogXCJtZXJuXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiTW9uZ29EQlwiLFxyXG4gICAgICAgICAga2V5OiBcIm1vbmdvLWRiXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjMjM3ODA0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJFeHByZXNzIEpTXCIsXHJcbiAgICAgICAgICBrZXk6IFwiZXhwcmVzcy1qc1wiLFxyXG4gICAgICAgICAgY29sb3I6IFwiI2ZhYWQxNFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgIGtleTogXCJyZWFjdFwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgICAgICAgSWNvbjogUmVhY3RJY29uLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk5leHQuSlNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwibmV4dGpzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0ZSBSZWFjdCBBcHBcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiY3JhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFudCBEZXNpZ25cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiYW50LWRlc2lnblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJSZWR1eFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJyZWR1eFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdCBSb3V0ZXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwicmVkdXgtcm91dGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgICAgICAga2V5OiBcInJlYWN0LW5hdGl2ZVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiTm9kZSBqU1wiLFxyXG4gICAgICAgICAga2V5OiBcIm5vZGUtanNcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiM5NWRlNjRcIixcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldlYnBhY2tcIixcclxuICAgICAga2V5OiBcIndlYnBhY2tcIixcclxuICAgICAgY29sb3I6IFwiIzY5YzBmZlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRWxlY3Ryb24uanNcIixcclxuICAgICAga2V5OiBcImVsZWN0cm9uLmpzXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM2OWMwZmZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkRvY2tlclwiLFxyXG4gICAgICBrZXk6IFwiZG9ja2VyXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM2OWMwZmZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1pY3JvIFNlcnZpY2VzXCIsXHJcbiAgICAgIGtleTogXCJtaWNyby1zZXJ2aWNlc1wiXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcHJvamVjdHM6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVtb3J5IEdhbWVcIixcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICBcInNpbXBsZSBjYXJkcyBnYW1lXCIsXHJcbiAgICAgICAgXCIzIGRpZmZpY3VsdHkgbGV2ZWxzXCIsXHJcbiAgICAgICAgXCJ3ZWJzb2NrZXRzIGFwaVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly9weXNpeC1nYW1lLmhlcm9rdWFwcC5jb21cIixcclxuICAgICAgICAgIHRpdGxlOiBcIk1lbW9yeSBHYW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUHlzaXg3L21lbW9yeS1nYW1lXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDb2RlYmFzZSAtIGdpdGh1YlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJDaGF0IGFwcFwiLFxyXG4gICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgIFwiTUVSTiBTdGFja1wiLFxyXG4gICAgICAgIFwiUFdBIChQcm9nZXNzaXZlIFdlYiBhcHBsaWNhdGlvbilcIixcclxuICAgICAgICBcInVzZXIgYXV0aGVudGljYXRpb24gKGxvZ2luLCBzaWdudXApXCIsXHJcbiAgICAgICAgXCJtdWx0aSB1c2VyIGNoYXQgKGJ5IGNyZWF0aW5nIGFuZCBqb2luaW5nIHJvb21zKVwiLFxyXG4gICAgICAgIFwiZ2xvYmFsIGNoYXRcIixcclxuICAgICAgICBcImNoYXQgbW9kZWwgLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGByb29taWRgIGFuZCBgcGFydGljaXBhbnRzYFwiLFxyXG4gICAgICAgIFwiVVVJRCBiYXNlZCByb29tLWlkXCIsXHJcbiAgICAgICAgXCJjb250YWN0IGxpc3QgdG8gZGlzcGxheSB0aGUgdXNlcnNcIixcclxuICAgICAgICBcInJlYWN0IGhvb2tzIGJhc2VkXCJcclxuICAgICAgXSxcclxuICAgICAgbGlua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9weXNpeC1jaGF0Lmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDaGF0IChSZWFjdCBQV0EpXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9weXNpeC1jaGF0LXNlcnZlci5oZXJva3VhcHAuY29tL3VpXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJOb2RlIGJhc2VkIEdsb2JhbCBjaGF0IFVJXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL1B5c2l4Ny9teUFwcHMvdHJlZS9tYXN0ZXIvYXBwc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQ29kZWJhc2UgLSBnaXRodWJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ2FyYm9va2luZyBhcHBcIixcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICBcIk1FUk4gU3RhY2tcIixcclxuICAgICAgICBcInVzZXIgYXV0aGVudGljYXRpb24gKGxvZ2luLCBzaWdudXApLlwiLFxyXG4gICAgICAgIFwicm91bmR0cmlwLlwiLFxyXG4gICAgICAgIFwiZHVtbXkgc3RyaXBlIGludGVncmF0aW9uIGZvciBib29raW5nIGNvbmZpcm1hdGlvbi5cIixcclxuICAgICAgXSxcclxuICAgICAgbGlua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jYXJib29raW5nMS5oZXJva3VhcHAuY29tXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDYXJib29raW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUHlzaXg3L215QXBwcy90cmVlL21hc3Rlci9hcHBzL2NiXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJDb2RlYmFzZSAtIGdpdGh1YlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBkYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=