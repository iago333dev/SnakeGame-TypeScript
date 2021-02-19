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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJzY29yZSIsIlNuYWtlIiwic3RhdGVPcHRpb25zIiwic2V0U3RhdGVWYWx1ZXMiLCJ1c2VTdGF0ZSIsInN0YXRlU25ha2UiLCJzZXRTdGF0ZVNuYWtlIiwiZ2V0Qm9hcmQiLCJib2FyZCIsIkFycmF5IiwibWFwIiwiZm9yRWFjaCIsImNvb3JkcyIsImxpc3RlbkZvcktleUNoYW5nZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJzdGF0ZSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlRm9vZCIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZm9vZFN0YXRlIiwidXBkYXRlU3BlZWQiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY3VycmVudEhlYWQiLCJuZXdIZWFkIiwiYWxlcnQiLCJsb2NhdGlvbiIsImhyZWYiLCJuZXdIZWFkU3RhdGUiLCJwb3AiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUEsTUFBTUEsWUFBMEIsR0FBRztBQUNqQ0MsWUFBVSxFQUFFLENBRHFCO0FBRWpDQyxZQUFVLEVBQUUsQ0FGcUI7QUFHakNDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSDJCO0FBSWpDQyxNQUFJLEVBQUU7QUFBRUMsS0FBQyxFQUFFLEVBQUw7QUFBU0MsS0FBQyxFQUFFO0FBQVosR0FKMkI7QUFLakNDLE9BQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJ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LEdBQUc5QixVQUFiLENBQVI7QUFDQWEsZUFBSyxDQUFDc0IsR0FBTjtBQUNBLGlCQUFPdEIsS0FBUDtBQUNELFNBSlksQ0FBYjtBQUtELE9BTkQsTUFPRSxJQUFJcUIsWUFBWSxLQUFLLE1BQXJCLEVBQTZCO0FBQzNCO0FBQ0FqQyxxQkFBYSxDQUFDWSxLQUFLLElBQUk7QUFDckJBLGVBQUssR0FBRyxDQUFDaUIsT0FBRCxFQUFVLEdBQUdqQixLQUFiLENBQVI7QUFDQSxpQkFBT0EsS0FBUDtBQUNELFNBSFksQ0FBYixDQUYyQixDQU0zQjs7QUFDQVcsbUJBQVcsR0FQZ0IsQ0FRM0I7O0FBQ0FKLG9CQUFZO0FBQ2IsT0FWRCxNQVVPO0FBQ0pXLGFBQUssQ0FBQyw4QkFBNEJsQyxZQUFZLENBQUNGLEtBQWIsR0FBbUIsQ0FBaEQsQ0FBTDtBQUNBYyxjQUFNLENBQUN1QixRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNGO0FBQ0osS0E5QlMsRUE4QlBwQyxZQUFZLENBQUNILFFBOUJOLENBQVY7QUErQkQsR0FqQ1EsRUFpQ04sQ0FBQ00sVUFBRCxDQWpDTSxDQUFUO0FBbUNBLE1BQUlHLEtBQUssR0FBR0QsUUFBUSxDQUFDTCxZQUFELENBQXBCO0FBQ0F1QyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFbEMsU0FBRjtBQUFTTjtBQUFULEdBQVo7QUFFQSxzQkFBTyxxRUFBQyx5REFBRDtBQUFPLGlCQUFhLEVBQUVNLEtBQXRCO0FBQTZCLFNBQUssRUFBRU4sWUFBWSxDQUFDRjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQTNJRDs7R0FBTUMsSzs7S0FBQUEsSztBQTZJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE2MjE5MTgyNjkwODM3YTMzYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcblxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBkaXJlY3Rpb25YOiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uWTogbnVtYmVyO1xyXG4gIGZvb2Q6IG51bWJlcltdO1xyXG4gIHNpemU6IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICB9O1xyXG4gIHNuYWtlOiBudW1iZXJbXVtdO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbiAgc2NvcmU6IG51bWJlcjtcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcclxuICBkaXJlY3Rpb25YOiAxLFxyXG4gIGRpcmVjdGlvblk6IDAsXHJcbiAgZm9vZDogWzUsIDVdLFxyXG4gIHNpemU6IHsgeDogMjgsIHk6IDI4IH0sXHJcbiAgc25ha2U6IFtbMiwgMF0sIFsxLCAwXSwgWzAsIDBdXSxcclxuICB2ZWxvY2l0eTogNTAsXHJcbiAgc2NvcmU6IDAsXHJcbn07XHJcblxyXG5jb25zdCBTbmFrZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZU9wdGlvbnMsIHNldFN0YXRlVmFsdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW3N0YXRlU25ha2UsIHNldFN0YXRlU25ha2VdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnNuYWtlKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGdldEJvYXJkKHsgc25ha2UsIGZvb2QgfTogSW5pdGlhbFN0YXRlKSB7XHJcbiAgICBjb25zdCBib2FyZCA9IFsuLi5BcnJheShzdGF0ZU9wdGlvbnMuc2l6ZS55KV0ubWFwKCgpID0+IHtcclxuICAgICAgcmV0dXJuIFsuLi5BcnJheShzdGF0ZU9wdGlvbnMuc2l6ZS54KV0ubWFwKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJOT1RfU05BS0VcIjtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGJvYXJkW3N0YXRlT3B0aW9ucy5mb29kWzBdXVtzdGF0ZU9wdGlvbnMuZm9vZFsxXV0gPSBcIkZPT0RcIjtcclxuXHJcbiAgICBzdGF0ZVNuYWtlLmZvckVhY2goY29vcmRzID0+IHtcclxuICAgICAgYm9hcmRbY29vcmRzWzFdXVtjb29yZHNbMF1dID0gXCJTTkFLRVwiO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ZW5Gb3JLZXlDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gMCAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gMSkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAwICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IC0xO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gMSAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDE7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IC0xICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gLTE7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZUZvb2QgPSAoKTogYW55ID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbVggPSBnZXRSYW5kb21JbnQoMCwgc3RhdGVPcHRpb25zLnNpemUueCk7XHJcbiAgICBjb25zdCByYW5kb21ZID0gZ2V0UmFuZG9tSW50KDAsIHN0YXRlT3B0aW9ucy5zaXplLnkpO1xyXG4gICAgY29uc3QgYm9hcmQgPSBnZXRCb2FyZChzdGF0ZU9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChib2FyZFtyYW5kb21ZXSkge1xyXG4gICAgICBjb25zdCBmb29kU3RhdGUgPSBib2FyZFtyYW5kb21ZXVtyYW5kb21YXTtcclxuICAgICAgaWYgKGZvb2RTdGF0ZSA9PT0gXCJOT1RfU05BS0VcIikge1xyXG4gICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgIHN0YXRlLmZvb2QgPSBbcmFuZG9tWSwgcmFuZG9tWF1cclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlRm9vZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdlbmVyYXRlRm9vZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNwZWVkID0gKCkgPT4ge1xyXG4gICAgdmFyIGludGVydmFsID0gc3RhdGVPcHRpb25zLnZlbG9jaXR5ICogMC44O1xyXG5cclxuICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChzdGF0ZS52ZWxvY2l0eSk7XHJcbiAgICAgIHN0YXRlLnZlbG9jaXR5ID0gaW50ZXJ2YWw7XHJcbiAgICAgIHN0YXRlLnNjb3JlKys7XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGlzdGVuRm9yS2V5Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHZhciBjdXJyZW50SGVhZCA9IHN0YXRlU25ha2VbMF1cclxuICAgICAgdmFyIG5ld0hlYWQgPSBbY3VycmVudEhlYWRbMF0gKyBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCwgY3VycmVudEhlYWRbMV0gKyBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWV07XHJcblxyXG4gICAgICBpZiAoIWJvYXJkW25ld0hlYWRbMV1dKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGaW0gZGUgSm9nbyBcXG5wb250dWHDp8OjbzogXCIgKyBzdGF0ZU9wdGlvbnMuc2NvcmUgLyAyKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgIH1cclxuICAgICAgdmFyIG5ld0hlYWRTdGF0ZSA9IGJvYXJkW25ld0hlYWRbMV1dW25ld0hlYWRbMF1dO1xyXG4gICAgICBpZiAobmV3SGVhZFN0YXRlID09PSBcIk5PVF9TTkFLRVwiKSB7XHJcbiAgICAgICAgc2V0U3RhdGVTbmFrZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZSA9IFtuZXdIZWFkLCAuLi5zdGF0ZVNuYWtlXTtcclxuICAgICAgICAgIHN0YXRlLnBvcCgpO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5ld0hlYWRTdGF0ZSA9PT0gXCJGT09EXCIpIHtcclxuICAgICAgICAgIC8vZ2xvdyBzbmFrZVxyXG4gICAgICAgICAgc2V0U3RhdGVTbmFrZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gW25ld0hlYWQsIC4uLnN0YXRlXTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy9nbG93IHNwZWVkICYgc2NvcmUrK1xyXG4gICAgICAgICAgdXBkYXRlU3BlZWQoKTtcclxuICAgICAgICAgIC8vZ2VuIG5ldyBmb29kXHJcbiAgICAgICAgICBnZW5lcmF0ZUZvb2QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGFsZXJ0KFwiRmltIGRlIEpvZ28gXFxucG9udHVhw6fDo286IFwiK3N0YXRlT3B0aW9ucy5zY29yZS8yKTsgXHJcbiAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxyXG4gICAgICAgIH1cclxuICAgIH0sIHN0YXRlT3B0aW9ucy52ZWxvY2l0eSlcclxuICB9LCBbc3RhdGVTbmFrZV0pXHJcblxyXG4gIGxldCBib2FyZCA9IGdldEJvYXJkKHN0YXRlT3B0aW9ucyk7XHJcbiAgY29uc29sZS5sb2coeyBib2FyZCwgc3RhdGVPcHRpb25zIH0pXHJcblxyXG4gIHJldHVybiA8Qm9hcmQgYm9hcmRlbGVtZW50cz17Ym9hcmR9IHNjb3JlPXtzdGF0ZU9wdGlvbnMuc2NvcmV9IC8+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbmFrZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==