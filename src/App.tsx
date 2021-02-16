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
  velocity: 15,
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

   // console.log(board);
  //  console.log(stateOptions.food);

    ///debugger;

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
          setStateValues(state => {  
            state.directionX = 0;
            state.directionY = 1;
            return state    
          })
        break;
        case "ArrowUp":
          setStateValues(state => {  
            state.directionX = 0;
            state.directionY = -1;
            return state    
          })
        break;
        case "ArrowRight":
          setStateValues(state => {  
            state.directionX = 1;
            state.directionY = 0;
            return state    
          })
        break;
        case "ArrowLeft":
          setStateValues(state => {  
            state.directionX = -1;
            state.directionY = 0;
            return state    
          })
        break;        
      }
    });
  };  

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateFood = ():any => {
    const randomX = getRandomInt(0, stateOptions.size.x);
    const randomY = getRandomInt(0, stateOptions.size.y);
    const board = getBoard(stateOptions);
    const foodState = board[randomY][randomX];
    if (foodState === "NOT_SNAKE") {
      setStateValues(state => {  
        state.food = [randomY,randomX]
        return state
      })
     // return [randomX, randomY];
    }else{
      return generateFood();
    }
  };

  useEffect(() => {
    listenForKeyChanges();

    setTimeout(() => {
      var currentHead = stateSnake[0]
      var newHead = [currentHead[0] + stateOptions.directionX, currentHead[1] + stateOptions.directionY];
      var newHeadState = board[newHead[1]][newHead[0]];

      if(newHeadState == "NOT_SNAKE"){
        setStateSnake(state => {  
          state = [newHead, ...stateSnake]; 
          state.pop();
          return state    
        })
      }else if(newHeadState == "FOOD"){
        setStateSnake(state => {  
          state = [newHead, ...stateSnake]; 
          return state    
        })
        setStateValues(state => {  
          state.velocity++;
          return state;    
        })
        generateFood();       
      }
    }, stateOptions.velocity) 
  }, [stateSnake])
  let board = getBoard(stateOptions);
  console.log(board);
   
    return (
      <Board boardelements={board}>
      </Board>
    );
};

export default App;
