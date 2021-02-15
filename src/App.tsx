import Board from "./components/Board";
import React, { useEffect, useState } from "react";


interface InitialState {
  directionX: number;
  directionY: number;
  food: number[];
  size: {
    x: number;
    y: number;
  };
  snake: number[][];
  velocity: number;
  score: number;
}
const initialState: InitialState = {
  directionX: 1,
  directionY: 0,
  food: [5, 5],
  size: { x: 60, y: 28 },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 400,
  score: 0,
};


const App: React.FC = () => {
  /* Cached
  ----------*/
  /* States
  --------- */
  const [stateOptions, setStateValues] = useState(initialState);

  const direction: any = {
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
  }


  /* Functions
  ------------- */
  const getNewHead = (head: number[]) => {
    return [head[0] + initialState.directionX, head[1] + initialState.directionY];
  };

  const startSnake = () => {
    const interval = setInterval(updateSnake, initialState.velocity);
  };


  function getBoard({ snake, food }: InitialState) {

    const board = [...Array(initialState.size.y)].map(() => {
      return [...Array(initialState.size.x)].map(() => {
        return "NOT_SNAKE";
      });
    });

    board[food[1]][food[0]] = "FOOD";

    snake.forEach(coords => {
      board[coords[1]][coords[0]] = "SNAKE";
    });

    return board;
  }

  const updateSnake = () => {
    const currentHead = initialState.snake[0];
    const newHead = getNewHead(currentHead);
    const board = getBoard(initialState);
    const newHeadState = board[newHead[1]][newHead[0]];

    switch (newHeadState) {
      case "SNAKE":
        throw new Error("Fim De Jogo, Pontuação Final: " + initialState.score);
      case "NOT_SNAKE":
        moveSnake(newHead);
        return;
      case "FOOD":
        growSnake(newHead);
        return;
      default:
        throw new Error("Fim De Jogo, Pontuação Final: " + initialState.score);
    }
  };

  let listenForKeyChanges = () => {
    window.addEventListener("keydown", event => {
      const key = event.key;

      if (direction[key]) {
        setStateValues(state => {
          state.directionX = direction[key].x;
          state.directionX = direction[key].y;
          return { ...state };
        });
      }
    });
  };

  const growSnake = (head: number[]) => {

    const newScore = initialState.score + 1;
    const currentSnake = initialState.snake;

    const newSnake = [head, ...currentSnake];
    setStateValues(state => {
      state.snake = newSnake;
      return { ...state };
    });
  };

  const moveSnake = (head: number[]) => {
    setStateValues(state => {
      console.log(state);
      
      let newSnakeWithTail = [head, ...state.snake];
      let newSnake = newSnakeWithTail.slice(0, newSnakeWithTail.length - 1);
      state.snake = newSnake;   
      return state;
    });

   // startSnake();

  };
  const board = getBoard(initialState);
  
  var i = 1;
  while (i!=0) {
    startSnake()
    
  }

  startSnake()
  listenForKeyChanges()
  
  /*
  useEffect(()=>{

  },[])
  */

  return (
    <Board boardelements={board}>
    </Board>
  );
};

export default App;
