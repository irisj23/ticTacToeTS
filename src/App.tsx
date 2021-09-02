import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';
import { createSecureContext } from 'tls';
import { captureRejectionSymbol } from 'events';

type SquareValue = 'X' | 'O' | null;

const checkWin = (squares: SquareValue[]): SquareValue => {

  const winCombos = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {

  let [winner, setWinner] = useState('');
  let [xIsNext, setXIsNext] = useState<boolean>(true);
  let [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));


  const handleClick = (i: number): void => {


    if (checkWin(squares)) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';


    setXIsNext(!xIsNext);
  }


  return (
    <div className="App">
      <header className="App-header">

          Learn TypeScript!!
          <br/>
          <Board
          squares={squares}
          onClick={i => handleClick(i)}
          />
        {winner} is winner!
      </header>
    </div>
  );
}

export default App;
