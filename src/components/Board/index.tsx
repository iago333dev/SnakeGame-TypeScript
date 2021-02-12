import React from "react";

import { Container, Wrapper, Linha, Quadrado } from "./styles";

interface BoardProps {
  boardelements: string[][]
}


/*
const SnakeCell: React.FC = ({

}) => (
  <div></div>
);
*/

const Board: React.FC<BoardProps> = ({
  boardelements,
}) => (
  <Container>
    <Wrapper>
      {boardelements.map((row, j) => (        
        <Linha key={j}>
          {row.map((element, i) => (          
            <Quadrado key={i} state={element}>

            </Quadrado>
          ))}
        </Linha>
      ))}
    </Wrapper>
  </Container>
);

/*
const Board: React.FC<BoardProps> = () => {
  return (
    <Container>
      <Linha>
        <Quadrado />
      </Linha>
    </Container>
  );

  const SnakeCell = props => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: cellColors[props.state],
      width: "25px",
      height: "25px",
      marginLeft: "1px",
      marginRight: "1px"
    }}
  />
);
};

export default Board;
*/

export default Board;