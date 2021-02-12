import React, { useState } from "react";
import Board from "./components/Board/board";

const initialState = {
  directionX: 1,
  directionY: 0,
  food: [5, 5],
  size: { x: 17, y: 17 },
  snake: [ [2, 0] ,[1,0], [0,0]],
  velocity: 400,
  score: 0
};


const App: React.FC = () => {
  return (
    <Board>
    </Board>
  );
};


export default App;
