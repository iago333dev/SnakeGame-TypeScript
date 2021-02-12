import Board from "./components/Board";
import React from "react";

const initialState = {
  directionX: 1,
  directionY: 0,
  food: [5, 5],
  size: { x: 60, y: 28 },
  snake: [ [2, 0] ,[1,0], [0,0]],
  velocity: 400,
  score: 0
};

function getBoard() {

  const board = [...Array(initialState.size.y)].map(() => {
    return [...Array(initialState.size.x)].map(() => {
      return "NOT_SNAKE";
    });
  });

  return board;
}

const App: React.FC = () => {
  const board = getBoard();
  return (
      <Board boardelements={board}>        
      </Board>
  );
};

export default App;
  