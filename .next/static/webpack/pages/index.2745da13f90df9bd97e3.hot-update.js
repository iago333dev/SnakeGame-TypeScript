webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Board */ "./components/Board/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\iago.alves\\Desktop\\SnakeGame-TypeScript\\pages\\index.tsx",
    _s = $RefreshSig$();



const initialState = {
  directionX: 1,
  directionY: 0,
  food: [5, 5],
  size: {
    x: 28,
    y: 28
  },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 5,
  score: 30
};
const direction = {
  ArrowLeft: {
    x: -1,
    y: 0
  },
  ArrowRight: {
    x: 1,
    y: 0
  },
  ArrowUp: {
    x: 0,
    y: -1
  },
  ArrowDown: {
    x: 0,
    y: 1
  }
};

const Snake = () => {
  _s();

  const {
    0: stateOptions,
    1: setStateValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState);
  const {
    0: stateSnake,
    1: setStateSnake
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState.snake);

  function getBoard({
    snake,
    food
  }) {
    const board = [...Array(stateOptions.size.y)].map(() => {
      return [...Array(stateOptions.size.x)].map(() => {
        return "NOT_SNAKE";
      });
    });
    board[stateOptions.food[0]][stateOptions.food[1]] = "FOOD";
    stateSnake.forEach(coords => {
      board[coords[1]][coords[0]] = "SNAKE";
    });
    return board;
  }

  const listenForKeyChanges = () => {
    window.addEventListener("keydown", event => {
      const key = event.key;

      switch (key) {
        case "ArrowDown":
          if (stateOptions.directionX !== 0 && stateOptions.directionY !== 1) {
            setStateValues(state => {
              state.directionX = 0;
              state.directionY = 1;
              return state;
            });
          }

          break;

        case "ArrowUp":
          if (stateOptions.directionX !== 0 && stateOptions.directionY !== -1) {
            setStateValues(state => {
              state.directionX = 0;
              state.directionY = -1;
              return state;
            });
          }

          break;

        case "ArrowRight":
          if (stateOptions.directionX !== 1 && stateOptions.directionY !== 0) {
            setStateValues(state => {
              state.directionX = 1;
              state.directionY = 0;
              return state;
            });
          }

          break;

        case "ArrowLeft":
          if (stateOptions.directionX !== -1 && stateOptions.directionY !== 0) {
            setStateValues(state => {
              state.directionX = -1;
              state.directionY = 0;
              return state;
            });
          }

          break;
      }
    });
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateFood = () => {
    const randomX = getRandomInt(0, stateOptions.size.x);
    const randomY = getRandomInt(0, stateOptions.size.y);
    const board = getBoard(stateOptions);

    if (board[randomY]) {
      const foodState = board[randomY][randomX];

      if (foodState === "NOT_SNAKE") {
        setStateValues(state => {
          state.food = [randomY, randomX];
          return state;
        });
      } else {
        return generateFood();
      }
    } else {
      return generateFood();
    }
  };

  const updateSpeed = () => {
    var interval = stateOptions.velocity * 0.5;
    setStateValues(state => {
      clearInterval(state.velocity);
      state.velocity = interval;
      state.score++;
      return state;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    listenForKeyChanges();
    setTimeout(() => {
      var currentHead = stateSnake[0];
      var newHead = [currentHead[0] + stateOptions.directionX, currentHead[1] + stateOptions.directionY];

      if (!board[newHead[1]]) {
        alert("Fim de Jogo \npontuação: " + stateOptions.score / 2);
        window.location.href = "/";
      }

      var newHeadState = board[newHead[1]][newHead[0]];

      if (newHeadState === "NOT_SNAKE") {
        setStateSnake(state => {
          state = [newHead, ...stateSnake];
          state.pop();
          return state;
        });
      } else if (newHeadState === "FOOD") {
        //glow snake
        setStateSnake(state => {
          state = [newHead, ...state];
          return state;
        }); //glow speed & score++

        updateSpeed(); //gen new food

        generateFood();
      } else {// alert("Fim de Jogo \npontuação: "+stateOptions.score/2); 
        // window.location.href = "/"
      }
    }, stateOptions.velocity);
  }, [stateSnake]);
  let board = getBoard(stateOptions);
  console.log({
    board,
    stateOptions
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Board__WEBPACK_IMPORTED_MODULE_1__["default"], {
    boardelements: board,
    score: stateOptions.score
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 10
  }, undefined);
};

_s(Snake, "CJJZVoaDVlrb6AklBu52YtHBJCU=");

_c = Snake;
/* harmony default export */ __webpack_exports__["default"] = (Snake);

var _c;

$RefreshReg$(_c, "Snake");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJzY29yZSIsImRpcmVjdGlvbiIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiU25ha2UiLCJzdGF0ZU9wdGlvbnMiLCJzZXRTdGF0ZVZhbHVlcyIsInVzZVN0YXRlIiwic3RhdGVTbmFrZSIsInNldFN0YXRlU25ha2UiLCJnZXRCb2FyZCIsImJvYXJkIiwiQXJyYXkiLCJtYXAiLCJmb3JFYWNoIiwiY29vcmRzIiwibGlzdGVuRm9yS2V5Q2hhbmdlcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInN0YXRlIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVGb29kIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmb29kU3RhdGUiLCJ1cGRhdGVTcGVlZCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjdXJyZW50SGVhZCIsIm5ld0hlYWQiLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsIm5ld0hlYWRTdGF0ZSIsInBvcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQSxNQUFNQSxZQUEwQixHQUFHO0FBQ2pDQyxZQUFVLEVBQUUsQ0FEcUI7QUFFakNDLFlBQVUsRUFBRSxDQUZxQjtBQUdqQ0MsTUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIMkI7QUFJakNDLE1BQUksRUFBRTtBQUFFQyxLQUFDLEVBQUUsRUFBTDtBQUFTQyxLQUFDLEVBQUU7QUFBWixHQUoyQjtBQUtqQ0Ms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LEtBQXRCO0FBQTZCLFNBQUssRUFBRU4sWUFBWSxDQUFDUDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQTNJRDs7R0FBTU0sSzs7S0FBQUEsSztBQTZJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjc0NWRhMTNmOTBkZjliZDk3ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcblxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBkaXJlY3Rpb25YOiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uWTogbnVtYmVyO1xyXG4gIGZvb2Q6IG51bWJlcltdO1xyXG4gIHNpemU6IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICB9O1xyXG4gIHNuYWtlOiBudW1iZXJbXVtdO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbiAgc2NvcmU6IG51bWJlcjtcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcclxuICBkaXJlY3Rpb25YOiAxLFxyXG4gIGRpcmVjdGlvblk6IDAsXHJcbiAgZm9vZDogWzUsIDVdLFxyXG4gIHNpemU6IHsgeDogMjgsIHk6IDI4IH0sXHJcbiAgc25ha2U6IFtbMiwgMF0sIFsxLCAwXSwgWzAsIDBdXSxcclxuICB2ZWxvY2l0eTogNSxcclxuICBzY29yZTogMzAsXHJcbn07XHJcblxyXG5jb25zdCBkaXJlY3Rpb246IGFueSA9IHtcclxuICBBcnJvd0xlZnQ6IHtcclxuICAgIHg6IC0xLFxyXG4gICAgeTogMFxyXG4gIH0sXHJcbiAgQXJyb3dSaWdodDoge1xyXG4gICAgeDogMSxcclxuICAgIHk6IDBcclxuICB9LFxyXG4gIEFycm93VXA6IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAtMVxyXG4gIH0sXHJcbiAgQXJyb3dEb3duOiB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU25ha2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbc3RhdGVPcHRpb25zLCBzZXRTdGF0ZVZhbHVlc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IFtzdGF0ZVNuYWtlLCBzZXRTdGF0ZVNuYWtlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5zbmFrZSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBnZXRCb2FyZCh7IHNuYWtlLCBmb29kIH06IEluaXRpYWxTdGF0ZSkge1xyXG4gICAgY29uc3QgYm9hcmQgPSBbLi4uQXJyYXkoc3RhdGVPcHRpb25zLnNpemUueSldLm1hcCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiBbLi4uQXJyYXkoc3RhdGVPcHRpb25zLnNpemUueCldLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiTk9UX1NOQUtFXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBib2FyZFtzdGF0ZU9wdGlvbnMuZm9vZFswXV1bc3RhdGVPcHRpb25zLmZvb2RbMV1dID0gXCJGT09EXCI7XHJcblxyXG4gICAgc3RhdGVTbmFrZS5mb3JFYWNoKGNvb3JkcyA9PiB7XHJcbiAgICAgIGJvYXJkW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXSA9IFwiU05BS0VcIjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdGVuRm9yS2V5Q2hhbmdlcyA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IDAgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IDEpIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAwO1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblkgPSAxO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gMCAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAwO1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblkgPSAtMTtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IDEgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAxO1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblkgPSAwO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAtMSAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IC0xO1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblkgPSAwO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVGb29kID0gKCk6IGFueSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21YID0gZ2V0UmFuZG9tSW50KDAsIHN0YXRlT3B0aW9ucy5zaXplLngpO1xyXG4gICAgY29uc3QgcmFuZG9tWSA9IGdldFJhbmRvbUludCgwLCBzdGF0ZU9wdGlvbnMuc2l6ZS55KTtcclxuICAgIGNvbnN0IGJvYXJkID0gZ2V0Qm9hcmQoc3RhdGVPcHRpb25zKTtcclxuXHJcbiAgICBpZiAoYm9hcmRbcmFuZG9tWV0pIHtcclxuICAgICAgY29uc3QgZm9vZFN0YXRlID0gYm9hcmRbcmFuZG9tWV1bcmFuZG9tWF07XHJcbiAgICAgIGlmIChmb29kU3RhdGUgPT09IFwiTk9UX1NOQUtFXCIpIHtcclxuICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZS5mb29kID0gW3JhbmRvbVksIHJhbmRvbVhdXHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUZvb2QoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBnZW5lcmF0ZUZvb2QoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTcGVlZCA9ICgpID0+IHtcclxuICAgIHZhciBpbnRlcnZhbCA9IHN0YXRlT3B0aW9ucy52ZWxvY2l0eSAqIDAuNTtcclxuXHJcbiAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUudmVsb2NpdHkpO1xyXG4gICAgICBzdGF0ZS52ZWxvY2l0eSA9IGludGVydmFsO1xyXG4gICAgICBzdGF0ZS5zY29yZSsrO1xyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxpc3RlbkZvcktleUNoYW5nZXMoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB2YXIgY3VycmVudEhlYWQgPSBzdGF0ZVNuYWtlWzBdXHJcbiAgICAgIHZhciBuZXdIZWFkID0gW2N1cnJlbnRIZWFkWzBdICsgc3RhdGVPcHRpb25zLmRpcmVjdGlvblgsIGN1cnJlbnRIZWFkWzFdICsgc3RhdGVPcHRpb25zLmRpcmVjdGlvblldO1xyXG5cclxuICAgICAgaWYgKCFib2FyZFtuZXdIZWFkWzFdXSkge1xyXG4gICAgICAgIGFsZXJ0KFwiRmltIGRlIEpvZ28gXFxucG9udHVhw6fDo286IFwiICsgc3RhdGVPcHRpb25zLnNjb3JlIC8gMik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxyXG4gICAgICB9XHJcbiAgICAgIHZhciBuZXdIZWFkU3RhdGUgPSBib2FyZFtuZXdIZWFkWzFdXVtuZXdIZWFkWzBdXTtcclxuICAgICAgaWYgKG5ld0hlYWRTdGF0ZSA9PT0gXCJOT1RfU05BS0VcIikge1xyXG4gICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUgPSBbbmV3SGVhZCwgLi4uc3RhdGVTbmFrZV07XHJcbiAgICAgICAgICBzdGF0ZS5wb3AoKTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChuZXdIZWFkU3RhdGUgPT09IFwiRk9PRFwiKSB7XHJcbiAgICAgICAgICAvL2dsb3cgc25ha2VcclxuICAgICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IFtuZXdIZWFkLCAuLi5zdGF0ZV07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vZ2xvdyBzcGVlZCAmIHNjb3JlKytcclxuICAgICAgICAgIHVwZGF0ZVNwZWVkKCk7XHJcbiAgICAgICAgICAvL2dlbiBuZXcgZm9vZFxyXG4gICAgICAgICAgZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGFsZXJ0KFwiRmltIGRlIEpvZ28gXFxucG9udHVhw6fDo286IFwiK3N0YXRlT3B0aW9ucy5zY29yZS8yKTsgXHJcbiAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSwgc3RhdGVPcHRpb25zLnZlbG9jaXR5KVxyXG4gIH0sIFtzdGF0ZVNuYWtlXSlcclxuXHJcbiAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoc3RhdGVPcHRpb25zKTtcclxuICBjb25zb2xlLmxvZyh7IGJvYXJkLCBzdGF0ZU9wdGlvbnMgfSlcclxuXHJcbiAgcmV0dXJuIDxCb2FyZCBib2FyZGVsZW1lbnRzPXtib2FyZH0gc2NvcmU9e3N0YXRlT3B0aW9ucy5zY29yZX0gLz5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNuYWtlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9