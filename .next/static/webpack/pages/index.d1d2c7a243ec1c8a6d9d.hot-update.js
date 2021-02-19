webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Board/styles.tsx":
/*!*************************************!*\
  !*** ./components/Board/styles.tsx ***!
  \*************************************/
/*! exports provided: Container, Score, Wrapper, Linha, Quadrado, Body */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2FyZC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlNjb3JlIiwiV3JhcHBlciIsIkxpbmhhIiwiUXVhZHJhZG8iLCJwcm9wcyIsInN0YXRlIiwiQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtPLE1BQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyREFBZjtBQU1BLE1BQU1DLEtBQUssR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2S0FBWDtBQVFBLE1BQU1FLE9BQU8sR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBYjtBQUtBLE1BQU1HLEtBQUssR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FBWDtBQVFBLE1BQU1JLFFBQVEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RkFLakJLLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLE9BQWhCLElBQTRCLDRCQUxwQixFQU1qQkQsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsTUFBaEIsSUFBMkIsNEJBTm5CLENBQWQ7QUFTUDtBQUNBO0FBQ0E7QUFDQTs7QUFHTyxNQUFNQyxJQUFJLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQVYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDFkMmM3YTI0M2VjMWM4YTZkOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTY29yZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2EyYTlhZjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHggIzAwMCwgMCAwIDFlbSAjNWNmMmU4LCAwIDAgMC41ZW0gIzVjZjJlOCwgMCAwIDAuMWVtICM1Y2YyZTgsIDAgMTBweCAzcHggI0ZGRlxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogYXV0bztcclxuYFxyXG5leHBvcnQgY29uc3QgTGluaGEgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5pbnRlcmZhY2UgUXVhZHJhZG9Qcm9wcyB7XHJcbiAgc3RhdGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUXVhZHJhZG8gPSBzdHlsZWQuZGl2PFF1YWRyYWRvUHJvcHM+YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2I7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YWYgOyBcclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlID09PSAnU05BS0UnICYmIGBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM1ODcwO2B9ICAgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSA9PT0gJ0ZPT0QnICYmIGBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNmMmU4O2B9XHJcbmBcclxuXHJcbi8qIC8vIFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgPyBgTk9UX1NOQUtFYCA6IGBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtgfVxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgJiYgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOyd9O1xyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbm1hcmdpbjogMDtcclxuZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxyXG4gICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICBzYW5zLXNlcmlmO1xyXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9