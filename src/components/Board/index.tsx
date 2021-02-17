import React from "react";

import { Container, Wrapper, Linha, Quadrado } from "./styles";

interface BoardProps {
  boardelements: string[][]
  score: number;
}

const Board: React.FC<BoardProps> = ({
  boardelements,score
}) => (
  <Container>
    score:{score}
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

export default Board;