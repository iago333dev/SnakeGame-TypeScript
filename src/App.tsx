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
  velocity: 2000,
  score: 0,
};

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

const App: React.FC = () => {
  
  const [stateOptions, setStateValues] = useState(initialState);
  const [stateSnake, setStateSnake] = useState(initialState.snake);
  
  function getBoard({ snake, food }: InitialState) {
    const board = [...Array(stateOptions.size.y)].map(() => {
      return [...Array(stateOptions.size.x)].map(() => {
        return "NOT_SNAKE";
      });
    });
    stateSnake.forEach(coords => {
      board[coords[1]][coords[0]] = "SNAKE";
    });
    return board;
  }  

  useEffect(() => {
    setTimeout(() => {
      setStateSnake(state => {  
        var currentHead = stateSnake[0]
        var newHead = [currentHead[0] + stateOptions.directionX, currentHead[1] + stateOptions.directionY];
        state = [newHead, ...stateSnake]; 
        state.pop();
        return state    
      })
    }, 1000) 
  }, [stateSnake])
  let board = getBoard(stateOptions); 
    return (
      <Board boardelements={board}>
      </Board>
    );
};

export default App;
