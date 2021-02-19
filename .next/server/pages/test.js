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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.tsx");
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
    }, undefined), "Your Score: ", score / 2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
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
    margin: 0;
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

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
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
    x: 28,
    y: 28
  },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 5,
  score: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb2FyZC9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQm9hcmQiLCJib2FyZGVsZW1lbnRzIiwic2NvcmUiLCJtYXAiLCJyb3ciLCJqIiwiZWxlbWVudCIsImkiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlNjb3JlIiwiV3JhcHBlciIsIkxpbmhhIiwiUXVhZHJhZG8iLCJwcm9wcyIsInN0YXRlIiwiQm9keSIsImluaXRpYWxTdGF0ZSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZm9vZCIsInNpemUiLCJ4IiwieSIsInNuYWtlIiwidmVsb2NpdHkiLCJkaXJlY3Rpb24iLCJBcnJvd0xlZnQiLCJBcnJvd1JpZ2h0IiwiQXJyb3dVcCIsIkFycm93RG93biIsIlNuYWtlIiwic3RhdGVPcHRpb25zIiwic2V0U3RhdGVWYWx1ZXMiLCJ1c2VTdGF0ZSIsInN0YXRlU25ha2UiLCJzZXRTdGF0ZVNuYWtlIiwiZ2V0Qm9hcmQiLCJib2FyZCIsIkFycmF5IiwiZm9yRWFjaCIsImNvb3JkcyIsImxpc3RlbkZvcktleUNoYW5nZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZUZvb2QiLCJyYW5kb21YIiwicmFuZG9tWSIsImZvb2RTdGF0ZSIsInVwZGF0ZVNwZWVkIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImN1cnJlbnRIZWFkIiwibmV3SGVhZCIsImFsZXJ0IiwibG9jYXRpb24iLCJocmVmIiwibmV3SGVhZFN0YXRlIiwicG9wIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7O0FBT0EsTUFBTUEsS0FBMkIsR0FBRyxDQUFDO0FBQ25DQyxlQURtQztBQUNwQkM7QUFEb0IsQ0FBRCxrQkFHbEMscUVBQUMsaURBQUQ7QUFBQSwwQkFDRSxxRUFBQyw2Q0FBRDtBQUFBLDBDQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsa0JBSWVBLEtBQUssR0FBRyxDQUp2QixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QSxLQUFQO0FBQ0QsU0FIWSxDQUFiLENBRjJCLENBTTNCOztBQUNBMEMsbUJBQVcsR0FQZ0IsQ0FRM0I7O0FBQ0FKLG9CQUFZO0FBQ2IsT0FWRCxNQVVPLENBQ0w7QUFDQTtBQUNEO0FBQ0osS0E5QlMsRUE4QlByQixZQUFZLENBQUNQLFFBOUJOLENBQVY7QUErQkQsR0FqQ1EsRUFpQ04sQ0FBQ1UsVUFBRCxDQWpDTSxDQUFUO0FBbUNBLE1BQUlHLEtBQUssR0FBR0QsUUFBUSxDQUFDTCxZQUFELENBQXBCO0FBQ0FxQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFaEMsU0FBRjtBQUFTTjtBQUFULEdBQVo7QUFFQSxzQkFBTyxxRUFBQyx5REFBRDtBQUFPLGlCQUFhLEVBQUVNLEtBQXRCO0FBQTZCLFNBQUssRUFBRU4sWUFBWSxDQUFDaEM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0EzSUQ7O0FBNkllK0Isb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMxTEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGVzdC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIFdyYXBwZXIsIExpbmhhLCBRdWFkcmFkbywgU2NvcmUgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmludGVyZmFjZSBCb2FyZFByb3BzIHtcclxuICBib2FyZGVsZW1lbnRzOiBzdHJpbmdbXVtdXHJcbiAgc2NvcmU6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQm9hcmQ6IFJlYWN0LkZDPEJvYXJkUHJvcHM+ID0gKHtcclxuICBib2FyZGVsZW1lbnRzLCBzY29yZVxyXG59KSA9PiAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxTY29yZT5cclxuICAgICAgU25ha2UgR2FtZVxyXG4gICAgICA8YnI+XHJcbiAgICAgIDwvYnI+XHJcbiAgICAgIFlvdXIgU2NvcmU6IHtzY29yZSAvIDJ9XHJcbiAgICAgIDxicj5cclxuICAgICAgPC9icj5cclxuICAgICAgPHA+QnkgaWFnbzMzM2RldjwvcD5cclxuICAgIDwvU2NvcmU+XHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge2JvYXJkZWxlbWVudHMubWFwKChyb3csIGopID0+IChcclxuICAgICAgICA8TGluaGEga2V5PXtqfT5cclxuICAgICAgICAgIHtyb3cubWFwKChlbGVtZW50LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxRdWFkcmFkbyBrZXk9e2l9IHN0YXRlPXtlbGVtZW50fT5cclxuXHJcbiAgICAgICAgICAgIDwvUXVhZHJhZG8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpbmhhPlxyXG4gICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICA8L0NvbnRhaW5lcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7ICIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBib2R5OiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNjb3JlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYTJhOWFmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAtNDBweCAxMDBweCwgMCAwIDJweCAjMDAwLCAwIDAgMWVtICM1Y2YyZTgsIDAgMCAwLjVlbSAjNWNmMmU4LCAwIDAgMC4xZW0gIzVjZjJlOCwgMCAxMHB4IDNweCAjRkZGXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBMaW5oYSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcbmludGVyZmFjZSBRdWFkcmFkb1Byb3BzIHtcclxuICBzdGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRdWFkcmFkbyA9IHN0eWxlZC5kaXY8UXVhZHJhZG9Qcm9wcz5gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2QzYjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTlhZiA7IFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuc3RhdGUgPT09ICdTTkFLRScgJiYgYGJhY2tncm91bmQtY29sb3I6ICM0YzU4NzA7YH0gICBcclxuICAke3Byb3BzID0+IHByb3BzLnN0YXRlID09PSAnRk9PRCcgJiYgYGJhY2tncm91bmQtY29sb3I6ICM1Y2YyZTg7YH1cclxuYFxyXG5cclxuLyogLy8gXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSA/IGBOT1RfU05BS0VgIDogYGJhY2tncm91bmQtY29sb3I6IGdyZWVuO2B9XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zdGF0ZSAmJiAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47J307XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxubWFyZ2luOiAwO1xyXG5mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXHJcbiAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxyXG4gIHNhbnMtc2VyaWY7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4tbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5gXHJcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0JvYXJkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcblxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBkaXJlY3Rpb25YOiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uWTogbnVtYmVyO1xyXG4gIGZvb2Q6IG51bWJlcltdO1xyXG4gIHNpemU6IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICB9O1xyXG4gIHNuYWtlOiBudW1iZXJbXVtdO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbiAgc2NvcmU6IG51bWJlcjtcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcclxuICBkaXJlY3Rpb25YOiAxLFxyXG4gIGRpcmVjdGlvblk6IDAsXHJcbiAgZm9vZDogWzUsIDVdLFxyXG4gIHNpemU6IHsgeDogMjgsIHk6IDI4IH0sXHJcbiAgc25ha2U6IFtbMiwgMF0sIFsxLCAwXSwgWzAsIDBdXSxcclxuICB2ZWxvY2l0eTogNSxcclxuICBzY29yZTogMixcclxufTtcclxuXHJcbmNvbnN0IGRpcmVjdGlvbjogYW55ID0ge1xyXG4gIEFycm93TGVmdDoge1xyXG4gICAgeDogLTEsXHJcbiAgICB5OiAwXHJcbiAgfSxcclxuICBBcnJvd1JpZ2h0OiB7XHJcbiAgICB4OiAxLFxyXG4gICAgeTogMFxyXG4gIH0sXHJcbiAgQXJyb3dVcDoge1xyXG4gICAgeDogMCxcclxuICAgIHk6IC0xXHJcbiAgfSxcclxuICBBcnJvd0Rvd246IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAxXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTbmFrZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZU9wdGlvbnMsIHNldFN0YXRlVmFsdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW3N0YXRlU25ha2UsIHNldFN0YXRlU25ha2VdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnNuYWtlKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGdldEJvYXJkKHsgc25ha2UsIGZvb2QgfTogSW5pdGlhbFN0YXRlKSB7XHJcbiAgICBjb25zdCBib2FyZCA9IFsuLi5BcnJheShzdGF0ZU9wdGlvbnMuc2l6ZS55KV0ubWFwKCgpID0+IHtcclxuICAgICAgcmV0dXJuIFsuLi5BcnJheShzdGF0ZU9wdGlvbnMuc2l6ZS54KV0ubWFwKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJOT1RfU05BS0VcIjtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGJvYXJkW3N0YXRlT3B0aW9ucy5mb29kWzBdXVtzdGF0ZU9wdGlvbnMuZm9vZFsxXV0gPSBcIkZPT0RcIjtcclxuXHJcbiAgICBzdGF0ZVNuYWtlLmZvckVhY2goY29vcmRzID0+IHtcclxuICAgICAgYm9hcmRbY29vcmRzWzFdXVtjb29yZHNbMF1dID0gXCJTTkFLRVwiO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ZW5Gb3JLZXlDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gMCAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gMSkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25YICE9PSAwICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IC0xO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIGlmIChzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCAhPT0gMSAmJiBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlcyhzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWCA9IDE7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGVPcHRpb25zLmRpcmVjdGlvblggIT09IC0xICYmIHN0YXRlT3B0aW9ucy5kaXJlY3Rpb25ZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb25YID0gLTE7XHJcbiAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uWSA9IDA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZUZvb2QgPSAoKTogYW55ID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbVggPSBnZXRSYW5kb21JbnQoMCwgc3RhdGVPcHRpb25zLnNpemUueCk7XHJcbiAgICBjb25zdCByYW5kb21ZID0gZ2V0UmFuZG9tSW50KDAsIHN0YXRlT3B0aW9ucy5zaXplLnkpO1xyXG4gICAgY29uc3QgYm9hcmQgPSBnZXRCb2FyZChzdGF0ZU9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChib2FyZFtyYW5kb21ZXSkge1xyXG4gICAgICBjb25zdCBmb29kU3RhdGUgPSBib2FyZFtyYW5kb21ZXVtyYW5kb21YXTtcclxuICAgICAgaWYgKGZvb2RTdGF0ZSA9PT0gXCJOT1RfU05BS0VcIikge1xyXG4gICAgICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgICAgIHN0YXRlLmZvb2QgPSBbcmFuZG9tWSwgcmFuZG9tWF1cclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlRm9vZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdlbmVyYXRlRm9vZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNwZWVkID0gKCkgPT4ge1xyXG4gICAgdmFyIGludGVydmFsID0gc3RhdGVPcHRpb25zLnZlbG9jaXR5ICogMC41O1xyXG5cclxuICAgIHNldFN0YXRlVmFsdWVzKHN0YXRlID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChzdGF0ZS52ZWxvY2l0eSk7XHJcbiAgICAgIHN0YXRlLnZlbG9jaXR5ID0gaW50ZXJ2YWw7XHJcbiAgICAgIHN0YXRlLnNjb3JlKys7XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGlzdGVuRm9yS2V5Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHZhciBjdXJyZW50SGVhZCA9IHN0YXRlU25ha2VbMF1cclxuICAgICAgdmFyIG5ld0hlYWQgPSBbY3VycmVudEhlYWRbMF0gKyBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWCwgY3VycmVudEhlYWRbMV0gKyBzdGF0ZU9wdGlvbnMuZGlyZWN0aW9uWV07XHJcblxyXG4gICAgICBpZiAoIWJvYXJkW25ld0hlYWRbMV1dKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGaW0gZGUgSm9nbyBcXG5wb250dWHDp8OjbzogXCIgKyBzdGF0ZU9wdGlvbnMuc2NvcmUgLyAyKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgIH1cclxuICAgICAgdmFyIG5ld0hlYWRTdGF0ZSA9IGJvYXJkW25ld0hlYWRbMV1dW25ld0hlYWRbMF1dO1xyXG4gICAgICBpZiAobmV3SGVhZFN0YXRlID09PSBcIk5PVF9TTkFLRVwiKSB7XHJcbiAgICAgICAgc2V0U3RhdGVTbmFrZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICBzdGF0ZSA9IFtuZXdIZWFkLCAuLi5zdGF0ZVNuYWtlXTtcclxuICAgICAgICAgIHN0YXRlLnBvcCgpO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5ld0hlYWRTdGF0ZSA9PT0gXCJGT09EXCIpIHtcclxuICAgICAgICAgIC8vZ2xvdyBzbmFrZVxyXG4gICAgICAgICAgc2V0U3RhdGVTbmFrZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gW25ld0hlYWQsIC4uLnN0YXRlXTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy9nbG93IHNwZWVkICYgc2NvcmUrK1xyXG4gICAgICAgICAgdXBkYXRlU3BlZWQoKTtcclxuICAgICAgICAgIC8vZ2VuIG5ldyBmb29kXHJcbiAgICAgICAgICBnZW5lcmF0ZUZvb2QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gYWxlcnQoXCJGaW0gZGUgSm9nbyBcXG5wb250dWHDp8OjbzogXCIrc3RhdGVPcHRpb25zLnNjb3JlLzIpOyBcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgICB9XHJcbiAgICB9LCBzdGF0ZU9wdGlvbnMudmVsb2NpdHkpXHJcbiAgfSwgW3N0YXRlU25ha2VdKVxyXG4gIFxyXG4gIGxldCBib2FyZCA9IGdldEJvYXJkKHN0YXRlT3B0aW9ucyk7XHJcbiAgY29uc29sZS5sb2coeyBib2FyZCwgc3RhdGVPcHRpb25zIH0pXHJcblxyXG4gIHJldHVybiA8Qm9hcmQgYm9hcmRlbGVtZW50cz17Ym9hcmR9IHNjb3JlPXtzdGF0ZU9wdGlvbnMuc2NvcmV9IC8+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbmFrZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=