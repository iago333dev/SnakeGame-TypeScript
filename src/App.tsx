import Board from "./components/Board";
import React, { useState } from "react";

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
const initialState: InitialState ={
  directionX: 1,
  directionY: 0,
  food: [5, 5],
  size: { x: 60, y: 28 },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 400,
  score: 0,
  
}; 


/*

const updateSnake = () => {
  const currentHead = initialState.snake[0];
  const newHead = getNewHead(currentHead);
  //const board = getBoard();
  const newHeadState = board[newHead[1]][newHead[0]];
  
  console.log(newHead);
}


const getNewHead = (head:number) => {
  return [head[0] + initialState.directionX, head[1] + initialState.directionY];
};

*/
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

const App: React.FC = () => {
  useState(initialState);

  //const [board, setBoard] = useState()
  const board = getBoard(initialState);
  
  return (
    <Board boardelements={board}>
    </Board>
  );
};

export default App;
