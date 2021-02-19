webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Board/styles.tsx":
/*!*************************************!*\
  !*** ./components/Board/styles.tsx ***!
  \*************************************/
/*! exports provided: default, Container, Score, Wrapper, Linha, Quadrado, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linha", function() { return Linha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quadrado", function() { return Quadrado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body: {
    margin: 0;
  }
`);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ihd60f-0"
})(["display:flex;height:100vh;background-color:#dadada;"]);
const Score = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Score",
  componentId: "sc-1ihd60f-1"
})(["margin:auto;text-align:center;color:#a2a9af;font-size:50px;text-shadow:0 -40px 100px,0 0 2px #000,0 0 1em #5cf2e8,0 0 0.5em #5cf2e8,0 0 0.1em #5cf2e8,0 10px 3px #FFF"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1ihd60f-2"
})(["display:flex;flex-direction:column;margin:auto;"]);
const Linha = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Linha",
  componentId: "sc-1ihd60f-3"
})(["display:flex;flex-direction:row;"]);
const Quadrado = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Quadrado",
  componentId: "sc-1ihd60f-4"
})(["background-color:#3d3d3b;width:20px;height:20px;border:1px solid #a2a9af;", "    ", ""], props => props.state === 'SNAKE' && `background-color: #4c5870;`, props => props.state === 'FOOD' && `background-color: #5cf2e8;`);
/* // 
  ${props => props.state ? `NOT_SNAKE` : `background-color: green;`}
  ${props => props.state && 'background-color: green;'};
*/

const Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Body",
  componentId: "sc-1ihd60f-5"
})(["background-color:black;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2FyZC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2NvcmUiLCJXcmFwcGVyIiwiTGluaGEiLCJRdWFkcmFkbyIsInByb3BzIiwic3RhdGUiLCJCb2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLGtJQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBTU8sTUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUFmO0FBTUEsTUFBTUMsS0FBSyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZLQUFYO0FBUUEsTUFBTUUsT0FBTyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFiO0FBS0EsTUFBTUcsS0FBSyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdDQUFYO0FBUUEsTUFBTUksUUFBUSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhGQUtqQkssS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsT0FBaEIsSUFBNEIsNEJBTHBCLEVBTWpCRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixNQUFoQixJQUEyQiw0QkFObkIsQ0FBZDtBQVNQO0FBQ0E7QUFDQTtBQUNBOztBQUdPLE1BQU1DLElBQUksR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpUUFBViIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTg3ZDJjOWQ2NTVkYTVkZTQzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGJvZHk6IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2NvcmUgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhMmE5YWY7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4ICMwMDAsIDAgMCAxZW0gIzVjZjJlOCwgMCAwIDAuNWVtICM1Y2YyZTgsIDAgMCAwLjFlbSAjNWNmMmU4LCAwIDEwcHggM3B4ICNGRkZcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IGF1dG87XHJcbmBcclxuZXhwb3J0IGNvbnN0IExpbmhhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuaW50ZXJmYWNlIFF1YWRyYWRvUHJvcHMge1xyXG4gIHN0YXRlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFF1YWRyYWRvID0gc3R5bGVkLmRpdjxRdWFkcmFkb1Byb3BzPmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNiO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTJhOWFmIDsgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSA9PT0gJ1NOQUtFJyAmJiBgYmFja2dyb3VuZC1jb2xvcjogIzRjNTg3MDtgfSAgIFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgPT09ICdGT09EJyAmJiBgYmFja2dyb3VuZC1jb2xvcjogIzVjZjJlODtgfVxyXG5gXHJcblxyXG4vKiAvLyBcclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlID8gYE5PVF9TTkFLRWAgOiBgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47YH1cclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlICYmICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnfTtcclxuKi9cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5tYXJnaW46IDA7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcclxuICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXHJcbiAgc2Fucy1zZXJpZjtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbi1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==