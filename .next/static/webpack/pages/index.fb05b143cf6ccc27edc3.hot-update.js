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
  velocity: 50,
  score: 0
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
      } else {
        alert("Fim de Jogo \npontuação: " + stateOptions.score / 2);
        window.location.href = "/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJzY29yZSIsImRpcmVjdGlvbiIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiU25ha2UiLCJzdGF0ZU9wdGlvbnMiLCJzZXRTdGF0ZVZhbHVlcyIsInVzZVN0YXRlIiwic3RhdGVTbmFrZSIsInNldFN0YXRlU25ha2UiLCJnZXRCb2FyZCIsImJvYXJkIiwiQXJyYXkiLCJtYXAiLCJmb3JFYWNoIiwiY29vcmRzIiwibGlzdGVuRm9yS2V5Q2hhbmdlcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInN0YXRlIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVGb29kIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmb29kU3RhdGUiLCJ1cGRhdGVTcGVlZCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjdXJyZW50SGVhZCIsIm5ld0hlYWQiLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsIm5ld0hlYWRTdGF0ZSIsInBvcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQSxNQUFNQSxZQUEwQixHQUFHO0FBQ2pDQyxZQUFVLEVBQUUsQ0FEcUI7QUFFakNDLFlBQVUsRUFBRSxDQUZxQjtBQUdqQ0MsTUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIMkI7QUFJakNDLE1BQUksRUFBRTtBQUFFQyxLQUFDLEVBQUUsRUFBTDtBQUFTQyxLQUFDLEVBQUU7QUFBWixHQUoyQjtBQUtqQ0Ms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QjtBQUNBdUMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRWxDLFNBQUY7QUFBU047QUFBVCxHQUFaO0FBRUEsc0JBQU8scUVBQUMseURBQUQ7QUFBTyxpQkFBYSxFQUFFTSxLQUF0QjtBQUE2QixTQUFLLEVBQUVOLFlBQVksQ0FBQ1A7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0EzSUQ7O0dBQU1NLEs7O0tBQUFBLEs7QUE2SVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiMDViMTQzY2Y2Y2NjMjdlZGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Cb2FyZCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5cclxuaW50ZXJmYWNlIEluaXRpYWxTdGF0ZSB7XHJcbiAgZGlyZWN0aW9uWDogbnVtYmVyO1xyXG4gIGRpcmVjdGlvblk6IG51bWJlcjtcclxuICBmb29kOiBudW1iZXJbXTtcclxuICBzaXplOiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgfTtcclxuICBzbmFrZTogbnVtYmVyW11bXTtcclxuICB2ZWxvY2l0eTogbnVtYmVyO1xyXG4gIHNjb3JlOiBudW1iZXI7XHJcbn1cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGUgPSB7XHJcbiAgZGlyZWN0aW9uWDogMSxcclxuICBkaXJlY3Rpb25ZOiAwLFxyXG4gIGZvb2Q6IFs1LCA1XSxcclxuICBzaXplOiB7IHg6IDI4LCB5OiAyOCB9LFxyXG4gIHNuYWtlOiBbWzIsIDBdLCBbMSwgMF0sIFswLCAwXV0sXHJcbiAgdmVsb2NpdHk6IDUwLFxyXG4gIHNjb3JlOiAwLFxyXG59O1xyXG5cclxuY29uc3QgZGlyZWN0aW9uOiBhbnkgPSB7XHJcbiAgQXJyb3dMZWZ0OiB7XHJcbiAgICB4OiAtMSxcclxuICAgIHk6IDBcclxuICB9LFxyXG4gIEFycm93UmlnaHQ6IHtcclxuICAgIHg6IDEsXHJcbiAgICB5OiAwXHJcbiAgfSxcclxuICBBcnJvd1VwOiB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogLTFcclxuICB9LFxyXG4gIEFycm93RG93bjoge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDFcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFNuYWtlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3N0YXRlT3B0aW9ucywgc2V0U3RhdGVWYWx1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbc3RhdGVTbmFrZSwgc2V0U3RhdGVTbmFrZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuc25ha2UpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoeyBzbmFrZSwgZm9vZCB9OiBJbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLnkpXS5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLngpXS5tYXAoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIk5PVF9TTkFLRVwiO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYm9hcmRbc3RhdGVPcHRpb25zLmZvb2RbMF1dW3N0YXRlT3B0aW9ucy5mb29kWzFdXSA9IFwiRk9PRFwiO1xyXG5cclxuICAgIHN0YXRlU25ha2UuZm9yRWFjaChjb29yZHMgPT4ge1xyXG4gICAgICBib2FyZFtjb29yZHNbMV1dW2Nvb3Jkc1swXV0gPSBcIlNOQUtFXCI7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RlbkZvcktleUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAwICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMTtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IDAgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAxICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gLTEgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAtMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlRm9vZCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tWCA9IGdldFJhbmRvbUludCgwLCBzdGF0ZU9wdGlvbnMuc2l6ZS54KTtcclxuICAgIGNvbnN0IHJhbmRvbVkgPSBnZXRSYW5kb21JbnQoMCwgc3RhdGVPcHRpb25zLnNpemUueSk7XHJcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKHN0YXRlT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKGJvYXJkW3JhbmRvbVldKSB7XHJcbiAgICAgIGNvbnN0IGZvb2RTdGF0ZSA9IGJvYXJkW3JhbmRvbVldW3JhbmRvbVhdO1xyXG4gICAgICBpZiAoZm9vZFN0YXRlID09PSBcIk5PVF9TTkFLRVwiKSB7XHJcbiAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZm9vZCA9IFtyYW5kb21ZLCByYW5kb21YXVxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3BlZWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgaW50ZXJ2YWwgPSBzdGF0ZU9wdGlvbnMudmVsb2NpdHkgKiAwLjU7XHJcblxyXG4gICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHN0YXRlLnZlbG9jaXR5KTtcclxuICAgICAgc3RhdGUudmVsb2NpdHkgPSBpbnRlcnZhbDtcclxuICAgICAgc3RhdGUuc2NvcmUrKztcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5Gb3JLZXlDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdmFyIGN1cnJlbnRIZWFkID0gc3RhdGVTbmFrZVswXVxyXG4gICAgICB2YXIgbmV3SGVhZCA9IFtjdXJyZW50SGVhZFswXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YLCBjdXJyZW50SGVhZFsxXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZXTtcclxuXHJcbiAgICAgIGlmICghYm9hcmRbbmV3SGVhZFsxXV0pIHtcclxuICAgICAgICBhbGVydChcIkZpbSBkZSBKb2dvIFxcbnBvbnR1YcOnw6NvOiBcIiArIHN0YXRlT3B0aW9ucy5zY29yZSAvIDIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgfVxyXG4gICAgICB2YXIgbmV3SGVhZFN0YXRlID0gYm9hcmRbbmV3SGVhZFsxXV1bbmV3SGVhZFswXV07XHJcbiAgICAgIGlmIChuZXdIZWFkU3RhdGUgPT09IFwiTk9UX1NOQUtFXCIpIHtcclxuICAgICAgICBzZXRTdGF0ZVNuYWtlKHN0YXRlID0+IHtcclxuICAgICAgICAgIHN0YXRlID0gW25ld0hlYWQsIC4uLnN0YXRlU25ha2VdO1xyXG4gICAgICAgICAgc3RhdGUucG9wKCk7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobmV3SGVhZFN0YXRlID09PSBcIkZPT0RcIikge1xyXG4gICAgICAgICAgLy9nbG93IHNuYWtlXHJcbiAgICAgICAgICBzZXRTdGF0ZVNuYWtlKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgc3RhdGUgPSBbbmV3SGVhZCwgLi4uc3RhdGVdO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvL2dsb3cgc3BlZWQgJiBzY29yZSsrXHJcbiAgICAgICAgICB1cGRhdGVTcGVlZCgpO1xyXG4gICAgICAgICAgLy9nZW4gbmV3IGZvb2RcclxuICAgICAgICAgIGdlbmVyYXRlRm9vZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgYWxlcnQoXCJGaW0gZGUgSm9nbyBcXG5wb250dWHDp8OjbzogXCIrc3RhdGVPcHRpb25zLnNjb3JlLzIpOyBcclxuICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSwgc3RhdGVPcHRpb25zLnZlbG9jaXR5KVxyXG4gIH0sIFtzdGF0ZVNuYWtlXSlcclxuXHJcbiAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoc3RhdGVPcHRpb25zKTtcclxuICBjb25zb2xlLmxvZyh7IGJvYXJkLCBzdGF0ZU9wdGlvbnMgfSlcclxuXHJcbiAgcmV0dXJuIDxCb2FyZCBib2FyZGVsZW1lbnRzPXtib2FyZH0gc2NvcmU9e3N0YXRlT3B0aW9ucy5zY29yZX0gLz5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNuYWtlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9