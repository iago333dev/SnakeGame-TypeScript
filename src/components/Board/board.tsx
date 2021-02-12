import React, { useState } from "react";
import ReactDOM from 'react-dom';

import { Container, Linha, Quadrado } from "./styles";

const Board: React.FC = () => {
  return (
    <Container>
      <Linha>
        <Quadrado />
        <Quadrado />
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </Linha>
    </Container>
  );
};

export default Board;