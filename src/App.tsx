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
  size: { x: 28, y: 28 },
  snake: [[2, 0], [1, 0], [0, 0]],
  velocity: 5,
  score: 2,
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
          if(stateOptions.directionX != 0 && stateOptions.directionY != 1){
          setStateValues(state => {  
            state.directionX = 0;
            state.directionY = 1;
            return state    
          })
        }
        break;
        case "ArrowUp":
          if(stateOptions.directionX != 0 && stateOptions.directionY != -1){
          setStateValues(state => {  
            state.directionX = 0;
            state.directionY = -1;
            return state    
          })
        }
        break;
        case "ArrowRight":
          if(stateOptions.directionX != 1 && stateOptions.directionY != 0){
            setStateValues(state => {  
              state.directionX = 1;
              state.directionY = 0;
              return state    
            })
          }
        break;
        case "ArrowLeft":
          if(stateOptions.directionX != -1 && stateOptions.directionY != 0){
          setStateValues(state => {  
            state.directionX = -1;
            state.directionY = 0;
            return state    
          })
        }
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

    if(board[randomY]){
      const foodState = board[randomY][randomX];
      if (foodState === "NOT_SNAKE") {
        setStateValues(state => {  
          state.food = [randomY,randomX]
          return state
        })
      }else{
        return generateFood();
      }
    }
    else{
      return generateFood();
    }
  };

  const updateSpeed = () => {
    var interval = stateOptions.velocity * 0.5; 

    setStateValues(state => { 
      clearInterval(state.velocity);
      state.velocity = interval;
      state.score++;
      return state    
    })
  };

  useEffect(() => {
    listenForKeyChanges();
    setTimeout(() => {
      var currentHead = stateSnake[0]
      var newHead = [currentHead[0] + stateOptions.directionX, currentHead[1] + stateOptions.directionY];

      if(!board[newHead[1]]){
        alert("Fim de Jogo \npontuação: "+stateOptions.score/2); 
        window.location.href = "/"
      }
      var newHeadState = board[newHead[1]][newHead[0]];
      if(newHeadState == "NOT_SNAKE"){
        setStateSnake(state => {  
          state = [newHead, ...stateSnake]; 
          state.pop();
          return state    
        })
      }else 
      if(newHeadState == "FOOD"){
        //glow snake
        setStateSnake(state => {  
          state = [newHead, ...state]; 
          return state    
        })
        //glow speed & score++
        updateSpeed();
        //gen new food
        generateFood();       
      }else{
        alert("Fim de Jogo \npontuação: "+stateOptions.score/2); 
        window.location.href = "/"
      }
    }, stateOptions.velocity) 
  }, [stateSnake])
  let board = getBoard(stateOptions);
  
    return (
      <div>
      <Board boardelements={board} score={stateOptions.score}>
      </Board>
      </div>
    );
};

export default App;
