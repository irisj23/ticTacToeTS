import React, { ReactNode, useState } from 'react';
import Square from './Square';

interface BoardProps {
  onClick(i: number): void;
  squares: ('X' | 'O' | null)[];
}

const Board: React.FC<BoardProps> = ({onClick, squares}) => {

  const renderSquare = (i: number): ReactNode => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  return (
    <React.Fragment>
      <br/>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      <br/>
      <br/>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      <br/>
      <br/>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      <br/>
    </React.Fragment>
  )

}

export default Board;
