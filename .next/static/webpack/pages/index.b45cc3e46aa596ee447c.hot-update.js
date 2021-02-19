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
    margin: auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2FyZC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2NvcmUiLCJXcmFwcGVyIiwiTGluaGEiLCJRdWFkcmFkbyIsInByb3BzIiwic3RhdGUiLCJCb2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2VBLGtJQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFPTyxNQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkRBQWY7QUFNQSxNQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNktBQVg7QUFRQSxNQUFNRSxPQUFPLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdURBQWI7QUFLQSxNQUFNRyxLQUFLLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQVg7QUFRQSxNQUFNSSxRQUFRLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEZBS2pCSyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixPQUFoQixJQUE0Qiw0QkFMcEIsRUFNakJELEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLE1BQWhCLElBQTJCLDRCQU5uQixDQUFkO0FBU1A7QUFDQTtBQUNBO0FBQ0E7O0FBR08sTUFBTUMsSUFBSSxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUFWIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0NWNjM2U0NmFhNTk2ZWU0NDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGJvZHk6IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNjb3JlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYTJhOWFmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCAjMDAwLCAwIDAgMWVtICM1Y2YyZTgsIDAgMCAwLjVlbSAjNWNmMmU4LCAwIDAgMC4xZW0gIzVjZjJlOCwgMCAxMHB4IDNweCAjRkZGXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBMaW5oYSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcbmludGVyZmFjZSBRdWFkcmFkb1Byb3BzIHtcclxuICBzdGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRdWFkcmFkbyA9IHN0eWxlZC5kaXY8UXVhZHJhZG9Qcm9wcz5gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2QzYjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTlhZiA7IFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgPT09ICdTTkFLRScgJiYgYGJhY2tncm91bmQtY29sb3I6ICM0YzU4NzA7YH0gICBcclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlID09PSAnRk9PRCcgJiYgYGJhY2tncm91bmQtY29sb3I6ICM1Y2YyZTg7YH1cclxuYFxyXG5cclxuLyogLy8gXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSA/IGBOT1RfU05BS0VgIDogYGJhY2tncm91bmQtY29sb3I6IGdyZWVuO2B9XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSAmJiAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47J307XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxubWFyZ2luOiAwO1xyXG5mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXHJcbiAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxyXG4gIHNhbnMtc2VyaWY7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4tbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=