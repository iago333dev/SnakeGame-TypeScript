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
    x: 27,
    y: 27
  },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 50,
  score: 0
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
    var interval = stateOptions.velocity * 0.8;
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
        alert("Fim de Jogo \npontuação: " + stateOptions.score);
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
        alert("Fim de Jogo \npontuação: " + stateOptions.score);
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
    lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJzY29yZSIsIlNuYWtlIiwic3RhdGVPcHRpb25zIiwic2V0U3RhdGVWYWx1ZXMiLCJ1c2VTdGF0ZSIsInN0YXRlU25ha2UiLCJzZXRTdGF0ZVNuYWtlIiwiZ2V0Qm9hcmQiLCJib2FyZCIsIkFycmF5IiwibWFwIiwiZm9yRWFjaCIsImNvb3JkcyIsImxpc3RlbkZvcktleUNoYW5nZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJzdGF0ZSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlRm9vZCIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZm9vZFN0YXRlIiwidXBkYXRlU3BlZWQiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY3VycmVudEhlYWQiLCJuZXdIZWFkIiwiYWxlcnQiLCJsb2NhdGlvbiIsImhyZWYiLCJuZXdIZWFkU3RhdGUiLCJwb3AiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUEsTUFBTUEsWUFBMEIsR0FBRztBQUNqQ0MsWUFBVSxFQUFFLENBRHFCO0FBRWpDQyxZQUFVLEVBQUUsQ0FGcUI7QUFHakNDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSDJCO0FBSWpDQyxNQUFJLEVBQUU7QUFBRUMsS0FBQyxFQUFFLEVBQUw7QUFBU0MsS0FBQyxFQUFFO0FBQVosR0FKMkI7QUFLakNDLE9BQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJ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YixDQUFSO0FBQ0FhLGVBQUssQ0FBQ3NCLEdBQU47QUFDQSxpQkFBT3RCLEtBQVA7QUFDRCxTQUpZLENBQWI7QUFLRCxPQU5ELE1BT0UsSUFBSXFCLFlBQVksS0FBSyxNQUFyQixFQUE2QjtBQUMzQjtBQUNBakMscUJBQWEsQ0FBQ1ksS0FBSyxJQUFJO0FBQ3JCQSxlQUFLLEdBQUcsQ0FBQ2lCLE9BQUQsRUFBVSxHQUFHakIsS0FBYixDQUFSO0FBQ0EsaUJBQU9BLEtBQVA7QUFDRCxTQUhZLENBQWIsQ0FGMkIsQ0FNM0I7O0FBQ0FXLG1CQUFXLEdBUGdCLENBUTNCOztBQUNBSixvQkFBWTtBQUNiLE9BVkQsTUFVTztBQUNKVyxhQUFLLENBQUMsOEJBQTRCbEMsWUFBWSxDQUFDRixLQUExQyxDQUFMO0FBQ0FjLGNBQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0Y7QUFDSixLQTlCUyxFQThCUHBDLFlBQVksQ0FBQ0gsUUE5Qk4sQ0FBVjtBQStCRCxHQWpDUSxFQWlDTixDQUFDTSxVQUFELENBakNNLENBQVQ7QUFtQ0EsTUFBSUcsS0FBSyxHQUFHRCxRQUFRLENBQUNMLFlBQUQsQ0FBcEI7QUFDQXVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVsQyxTQUFGO0FBQVNOO0FBQVQsR0FBWjtBQUVBLHNCQUFPLHFFQUFDLHlEQUFEO0FBQU8saUJBQWEsRUFBRU0sS0FBdEI7QUFBNkIsU0FBSyxFQUFFTixZQUFZLENBQUNGO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBM0lEOztHQUFNQyxLOztLQUFBQSxLO0FBNklTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NTI3MWRhZTc3OGY1MGM3NTczNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xyXG4gIGRpcmVjdGlvblg6IG51bWJlcjtcclxuICBkaXJlY3Rpb25ZOiBudW1iZXI7XHJcbiAgZm9vZDogbnVtYmVyW107XHJcbiAgc2l6ZToge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIH07XHJcbiAgc25ha2U6IG51bWJlcltdW107XHJcbiAgdmVsb2NpdHk6IG51bWJlcjtcclxuICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xyXG4gIGRpcmVjdGlvblg6IDEsXHJcbiAgZGlyZWN0aW9uWTogMCxcclxuICBmb29kOiBbNSwgNV0sXHJcbiAgc2l6ZTogeyB4OiAyNywgeTogMjcgfSxcclxuICBzbmFrZTogW1syLCAwXSwgWzEsIDBdLCBbMCwgMF1dLFxyXG4gIHZlbG9jaXR5OiA1MCxcclxuICBzY29yZTogMCxcclxufTtcclxuXHJcbmNvbnN0IFNuYWtlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3N0YXRlT3B0aW9ucywgc2V0U3RhdGVWYWx1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbc3RhdGVTbmFrZSwgc2V0U3RhdGVTbmFrZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuc25ha2UpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoeyBzbmFrZSwgZm9vZCB9OiBJbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLnkpXS5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLngpXS5tYXAoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIk5PVF9TTkFLRVwiO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYm9hcmRbc3RhdGVPcHRpb25zLmZvb2RbMF1dW3N0YXRlT3B0aW9ucy5mb29kWzFdXSA9IFwiRk9PRFwiO1xyXG5cclxuICAgIHN0YXRlU25ha2UuZm9yRWFjaChjb29yZHMgPT4ge1xyXG4gICAgICBib2FyZFtjb29yZHNbMV1dW2Nvb3Jkc1swXV0gPSBcIlNOQUtFXCI7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RlbkZvcktleUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAwICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMTtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IDAgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAxICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gLTEgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAtMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlRm9vZCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tWCA9IGdldFJhbmRvbUludCgwLCBzdGF0ZU9wdGlvbnMuc2l6ZS54KTtcclxuICAgIGNvbnN0IHJhbmRvbVkgPSBnZXRSYW5kb21JbnQoMCwgc3RhdGVPcHRpb25zLnNpemUueSk7XHJcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKHN0YXRlT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKGJvYXJkW3JhbmRvbVldKSB7XHJcbiAgICAgIGNvbnN0IGZvb2RTdGF0ZSA9IGJvYXJkW3JhbmRvbVldW3JhbmRvbVhdO1xyXG4gICAgICBpZiAoZm9vZFN0YXRlID09PSBcIk5PVF9TTkFLRVwiKSB7XHJcbiAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZm9vZCA9IFtyYW5kb21ZLCByYW5kb21YXVxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3BlZWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgaW50ZXJ2YWwgPSBzdGF0ZU9wdGlvbnMudmVsb2NpdHkgKiAwLjg7XHJcblxyXG4gICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHN0YXRlLnZlbG9jaXR5KTtcclxuICAgICAgc3RhdGUudmVsb2NpdHkgPSBpbnRlcnZhbDtcclxuICAgICAgc3RhdGUuc2NvcmUrKztcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5Gb3JLZXlDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdmFyIGN1cnJlbnRIZWFkID0gc3RhdGVTbmFrZVswXVxyXG4gICAgICB2YXIgbmV3SGVhZCA9IFtjdXJyZW50SGVhZFswXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YLCBjdXJyZW50SGVhZFsxXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZXTtcclxuXHJcbiAgICAgIGlmICghYm9hcmRbbmV3SGVhZFsxXV0pIHtcclxuICAgICAgICBhbGVydChcIkZpbSBkZSBKb2dvIFxcbnBvbnR1YcOnw6NvOiBcIiArIHN0YXRlT3B0aW9ucy5zY29yZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxyXG4gICAgICB9XHJcbiAgICAgIHZhciBuZXdIZWFkU3RhdGUgPSBib2FyZFtuZXdIZWFkWzFdXVtuZXdIZWFkWzBdXTtcclxuICAgICAgaWYgKG5ld0hlYWRTdGF0ZSA9PT0gXCJOT1RfU05BS0VcIikge1xyXG4gICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUgPSBbbmV3SGVhZCwgLi4uc3RhdGVTbmFrZV07XHJcbiAgICAgICAgICBzdGF0ZS5wb3AoKTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChuZXdIZWFkU3RhdGUgPT09IFwiRk9PRFwiKSB7XHJcbiAgICAgICAgICAvL2dsb3cgc25ha2VcclxuICAgICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IFtuZXdIZWFkLCAuLi5zdGF0ZV07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vZ2xvdyBzcGVlZCAmIHNjb3JlKytcclxuICAgICAgICAgIHVwZGF0ZVNwZWVkKCk7XHJcbiAgICAgICAgICAvL2dlbiBuZXcgZm9vZFxyXG4gICAgICAgICAgZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBhbGVydChcIkZpbSBkZSBKb2dvIFxcbnBvbnR1YcOnw6NvOiBcIitzdGF0ZU9wdGlvbnMuc2NvcmUpOyBcclxuICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSwgc3RhdGVPcHRpb25zLnZlbG9jaXR5KVxyXG4gIH0sIFtzdGF0ZVNuYWtlXSlcclxuXHJcbiAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoc3RhdGVPcHRpb25zKTtcclxuICBjb25zb2xlLmxvZyh7IGJvYXJkLCBzdGF0ZU9wdGlvbnMgfSlcclxuXHJcbiAgcmV0dXJuIDxCb2FyZCBib2FyZGVsZW1lbnRzPXtib2FyZH0gc2NvcmU9e3N0YXRlT3B0aW9ucy5zY29yZX0gLz5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNuYWtlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9