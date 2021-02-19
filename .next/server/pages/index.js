module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Board/index.tsx":
/*!************************************!*\
  !*** ./components/Board/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Board/styles.tsx");

var _jsxFileName = "C:\\Users\\iago.alves\\Desktop\\SnakeGame-TypeScript\\components\\Board\\index.tsx";



const Board = ({
  boardelements,
  score
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Score"], {
    children: ["Snake Game", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), "Your Score: ", score, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "By iago333dev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    children: boardelements.map((row, j) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Linha"], {
      children: row.map((element, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Quadrado"], {
        state: element
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined))
    }, j, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./components/Board/styles.tsx":
/*!*************************************!*\
  !*** ./components/Board/styles.tsx ***!
  \*************************************/
/*! exports provided: default, Container, Score, Wrapper, Linha, Quadrado, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linha", function() { return Linha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quadrado", function() { return Quadrado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body: {
    margin: auto;

  }
`);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ihd60f-0"
})(["display:flex;height:100vh;background-color:#dadada;"]);
const Score = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Score",
  componentId: "sc-1ihd60f-1"
})(["margin:auto;text-align:center;color:#a2a9af;font-size:50px;text-shadow:0 -40px 100px,0 0 2px #000,0 0 1em #5cf2e8,0 0 0.5em #5cf2e8,0 0 0.1em #5cf2e8,0 10px 3px #FFF"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1ihd60f-2"
})(["display:flex;flex-direction:column;margin:auto;"]);
const Linha = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Linha",
  componentId: "sc-1ihd60f-3"
})(["display:flex;flex-direction:row;"]);
const Quadrado = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Quadrado",
  componentId: "sc-1ihd60f-4"
})(["background-color:#3d3d3b;width:20px;height:20px;border:1px solid #a2a9af;", "    ", ""], props => props.state === 'SNAKE' && `background-color: #4c5870;`, props => props.state === 'FOOD' && `background-color: #5cf2e8;`);
/* // 
  ${props => props.state ? `NOT_SNAKE` : `background-color: green;`}
  ${props => props.state && 'background-color: green;'};
*/

const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Body",
  componentId: "sc-1ihd60f-5"
})(["background-color:black;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Board */ "./components/Board/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\iago.alves\\Desktop\\SnakeGame-TypeScript\\pages\\index.tsx";


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

/* harmony default export */ __webpack_exports__["default"] = (Snake);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb2FyZC9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQm9hcmQiLCJib2FyZGVsZW1lbnRzIiwic2NvcmUiLCJtYXAiLCJyb3ciLCJqIiwiZWxlbWVudCIsImkiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlNjb3JlIiwiV3JhcHBlciIsIkxpbmhhIiwiUXVhZHJhZG8iLCJwcm9wcyIsInN0YXRlIiwiQm9keSIsImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJTbmFrZSIsInN0YXRlT3B0aW9ucyIsInNldFN0YXRlVmFsdWVzIiwidXNlU3RhdGUiLCJzdGF0ZVNuYWtlIiwic2V0U3RhdGVTbmFrZSIsImdldEJvYXJkIiwiYm9hcmQiLCJBcnJheSIsImZvckVhY2giLCJjb29yZHMiLCJsaXN0ZW5Gb3JLZXlDaGFuZ2VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVGb29kIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmb29kU3RhdGUiLCJ1cGRhdGVTcGVlZCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjdXJyZW50SGVhZCIsIm5ld0hlYWQiLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsIm5ld0hlYWRTdGF0ZSIsInBvcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBOztBQU9BLE1BQU1BLEtBQTJCLEdBQUcsQ0FBQztBQUNuQ0MsZUFEbUM7QUFDcEJDO0FBRG9CLENBQUQsa0JBR2xDLHFFQUFDLGlEQUFEO0FBQUEsMEJBQ0UscUVBQUMsNkNBQUQ7QUFBQSwwQ0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGtCQUllQSxLQUpmLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDLHlEQUFEO0FBQU8saUJBQWEsRUFBRU0sS0FBdEI7QUFBNkIsU0FBSyxFQUFFTixZQUFZLENBQUMzQjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQTNJRDs7QUE2SWUwQixvRUFBZixFOzs7Ozs7Ozs7OztBQ3ZLQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBXcmFwcGVyLCBMaW5oYSwgUXVhZHJhZG8sIFNjb3JlIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5pbnRlcmZhY2UgQm9hcmRQcm9wcyB7XHJcbiAgYm9hcmRlbGVtZW50czogc3RyaW5nW11bXVxyXG4gIHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkOiBSZWFjdC5GQzxCb2FyZFByb3BzPiA9ICh7XHJcbiAgYm9hcmRlbGVtZW50cywgc2NvcmVcclxufSkgPT4gKFxyXG4gIDxDb250YWluZXI+XHJcbiAgICA8U2NvcmU+XHJcbiAgICAgIFNuYWtlIEdhbWVcclxuICAgICAgPGJyPlxyXG4gICAgICA8L2JyPlxyXG4gICAgICBZb3VyIFNjb3JlOiB7c2NvcmV9XHJcbiAgICAgIDxicj5cclxuICAgICAgPC9icj5cclxuICAgICAgPHA+QnkgaWFnbzMzM2RldjwvcD5cclxuICAgIDwvU2NvcmU+XHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge2JvYXJkZWxlbWVudHMubWFwKChyb3csIGopID0+IChcclxuICAgICAgICA8TGluaGEga2V5PXtqfT5cclxuICAgICAgICAgIHtyb3cubWFwKChlbGVtZW50LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxRdWFkcmFkbyBrZXk9e2l9IHN0YXRlPXtlbGVtZW50fT5cclxuXHJcbiAgICAgICAgICAgIDwvUXVhZHJhZG8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpbmhhPlxyXG4gICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICA8L0NvbnRhaW5lcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7ICIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keToge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2NvcmUgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhMmE5YWY7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIC00MHB4IDEwMHB4LCAwIDAgMnB4ICMwMDAsIDAgMCAxZW0gIzVjZjJlOCwgMCAwIDAuNWVtICM1Y2YyZTgsIDAgMCAwLjFlbSAjNWNmMmU4LCAwIDEwcHggM3B4ICNGRkZcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IGF1dG87XHJcbmBcclxuZXhwb3J0IGNvbnN0IExpbmhhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuaW50ZXJmYWNlIFF1YWRyYWRvUHJvcHMge1xyXG4gIHN0YXRlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFF1YWRyYWRvID0gc3R5bGVkLmRpdjxRdWFkcmFkb1Byb3BzPmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNiO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTJhOWFmIDsgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSA9PT0gJ1NOQUtFJyAmJiBgYmFja2dyb3VuZC1jb2xvcjogIzRjNTg3MDtgfSAgIFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgPT09ICdGT09EJyAmJiBgYmFja2dyb3VuZC1jb2xvcjogIzVjZjJlODtgfVxyXG5gXHJcblxyXG4vKiAvLyBcclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlID8gYE5PVF9TTkFLRWAgOiBgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47YH1cclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlICYmICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnfTtcclxuKi9cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5tYXJnaW46IDA7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcclxuICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXHJcbiAgc2Fucy1zZXJpZjtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbi1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbmBcclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQm9hcmQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xyXG4gIGRpcmVjdGlvblg6IG51bWJlcjtcclxuICBkaXJlY3Rpb25ZOiBudW1iZXI7XHJcbiAgZm9vZDogbnVtYmVyW107XHJcbiAgc2l6ZToge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIH07XHJcbiAgc25ha2U6IG51bWJlcltdW107XHJcbiAgdmVsb2NpdHk6IG51bWJlcjtcclxuICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xyXG4gIGRpcmVjdGlvblg6IDEsXHJcbiAgZGlyZWN0aW9uWTogMCxcclxuICBmb29kOiBbNSwgNV0sXHJcbiAgc2l6ZTogeyB4OiAyNywgeTogMjcgfSxcclxuICBzbmFrZTogW1syLCAwXSwgWzEsIDBdLCBbMCwgMF1dLFxyXG4gIHZlbG9jaXR5OiA1MCxcclxuICBzY29yZTogMCxcclxufTtcclxuXHJcbmNvbnN0IFNuYWtlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3N0YXRlT3B0aW9ucywgc2V0U3RhdGVWYWx1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbc3RhdGVTbmFrZSwgc2V0U3RhdGVTbmFrZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuc25ha2UpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoeyBzbmFrZSwgZm9vZCB9OiBJbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLnkpXS5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gWy4uLkFycmF5KHN0YXRlT3B0aW9ucy5zaXplLngpXS5tYXAoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIk5PVF9TTkFLRVwiO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYm9hcmRbc3RhdGVPcHRpb25zLmZvb2RbMF1dW3N0YXRlT3B0aW9ucy5mb29kWzFdXSA9IFwiRk9PRFwiO1xyXG5cclxuICAgIHN0YXRlU25ha2UuZm9yRWFjaChjb29yZHMgPT4ge1xyXG4gICAgICBib2FyZFtjb29yZHNbMV1dW2Nvb3Jkc1swXV0gPSBcIlNOQUtFXCI7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RlbkZvcktleUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAwICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMTtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IDAgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAxICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gLTEgJiYgc3RhdGVPcHRpb25zLmRpcmVjdGlvblkgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvblggPSAtMTtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25ZID0gMDtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlRm9vZCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tWCA9IGdldFJhbmRvbUludCgwLCBzdGF0ZU9wdGlvbnMuc2l6ZS54KTtcclxuICAgIGNvbnN0IHJhbmRvbVkgPSBnZXRSYW5kb21JbnQoMCwgc3RhdGVPcHRpb25zLnNpemUueSk7XHJcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKHN0YXRlT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKGJvYXJkW3JhbmRvbVldKSB7XHJcbiAgICAgIGNvbnN0IGZvb2RTdGF0ZSA9IGJvYXJkW3JhbmRvbVldW3JhbmRvbVhdO1xyXG4gICAgICBpZiAoZm9vZFN0YXRlID09PSBcIk5PVF9TTkFLRVwiKSB7XHJcbiAgICAgICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUuZm9vZCA9IFtyYW5kb21ZLCByYW5kb21YXVxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ2VuZXJhdGVGb29kKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3BlZWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgaW50ZXJ2YWwgPSBzdGF0ZU9wdGlvbnMudmVsb2NpdHkgKiAwLjg7XHJcblxyXG4gICAgc2V0U3RhdGVWYWx1ZXMoc3RhdGUgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHN0YXRlLnZlbG9jaXR5KTtcclxuICAgICAgc3RhdGUudmVsb2NpdHkgPSBpbnRlcnZhbDtcclxuICAgICAgc3RhdGUuc2NvcmUrKztcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5Gb3JLZXlDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdmFyIGN1cnJlbnRIZWFkID0gc3RhdGVTbmFrZVswXVxyXG4gICAgICB2YXIgbmV3SGVhZCA9IFtjdXJyZW50SGVhZFswXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YLCBjdXJyZW50SGVhZFsxXSArIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZXTtcclxuXHJcbiAgICAgIGlmICghYm9hcmRbbmV3SGVhZFsxXV0pIHtcclxuICAgICAgICBhbGVydChcIkZpbSBkZSBKb2dvIFxcbnBvbnR1YcOnw6NvOiBcIiArIHN0YXRlT3B0aW9ucy5zY29yZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxyXG4gICAgICB9XHJcbiAgICAgIHZhciBuZXdIZWFkU3RhdGUgPSBib2FyZFtuZXdIZWFkWzFdXVtuZXdIZWFkWzBdXTtcclxuICAgICAgaWYgKG5ld0hlYWRTdGF0ZSA9PT0gXCJOT1RfU05BS0VcIikge1xyXG4gICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgc3RhdGUgPSBbbmV3SGVhZCwgLi4uc3RhdGVTbmFrZV07XHJcbiAgICAgICAgICBzdGF0ZS5wb3AoKTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChuZXdIZWFkU3RhdGUgPT09IFwiRk9PRFwiKSB7XHJcbiAgICAgICAgICAvL2dsb3cgc25ha2VcclxuICAgICAgICAgIHNldFN0YXRlU25ha2Uoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IFtuZXdIZWFkLCAuLi5zdGF0ZV07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vZ2xvdyBzcGVlZCAmIHNjb3JlKytcclxuICAgICAgICAgIHVwZGF0ZVNwZWVkKCk7XHJcbiAgICAgICAgICAvL2dlbiBuZXcgZm9vZFxyXG4gICAgICAgICAgZ2VuZXJhdGVGb29kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBhbGVydChcIkZpbSBkZSBKb2dvIFxcbnBvbnR1YcOnw6NvOiBcIitzdGF0ZU9wdGlvbnMuc2NvcmUpOyBcclxuICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSwgc3RhdGVPcHRpb25zLnZlbG9jaXR5KVxyXG4gIH0sIFtzdGF0ZVNuYWtlXSlcclxuXHJcbiAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoc3RhdGVPcHRpb25zKTtcclxuICBjb25zb2xlLmxvZyh7IGJvYXJkLCBzdGF0ZU9wdGlvbnMgfSlcclxuXHJcbiAgcmV0dXJuIDxCb2FyZCBib2FyZGVsZW1lbnRzPXtib2FyZH0gc2NvcmU9e3N0YXRlT3B0aW9ucy5zY29yZX0gLz5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNuYWtlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==