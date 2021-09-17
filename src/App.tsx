import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 85vh;
`
const Header = styled.div`
  order: 1;

`
const BoardSquares = styled.div`
  order: 2;

`
const Reset = styled.button`
  order: 3;

`

const Winner = styled.div`
  order: 4;

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

  const resetBoard = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
  }

  return (
    <Container>
      <Header>
          Learn TypeScript!!
      </Header>
      <BoardSquares>
          <br/>
          <Board
          squares={squares}
          onClick={i => handleClick(i)}
          />
      </BoardSquares>
      <Reset onClick={resetBoard}>
        RESET
      </Reset>
      <Winner>
        {winner} is winner!
      </Winner>
    </Container>
  );
}

export default App;
