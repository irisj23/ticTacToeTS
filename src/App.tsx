import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 90vh;
`


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

  let [winner, setWinner] = useState<string | null>(null);
  let [xIsNext, setXIsNext] = useState<boolean>(true);
  let [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));

console.log(squares)
  const handleClick = (i: number): void => {


    if (checkWin(squares)) {

      let win = checkWin(squares)
      setWinner(win);
      return;
    }
    console.log('i: ', i)
    squares[i] = xIsNext ? 'X' : 'O';

    setXIsNext(!xIsNext);
  }


  return (
    <Container>
      <div>

          Learn TypeScript!!
          <br/>
          <Board
          squares={squares}
          onClick={i => handleClick(i)}
          />
        {winner} is winner!
      </div>
    </Container>
  );
}

export default App;
