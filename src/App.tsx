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
  min-height: 75vh;
`
const Header = styled.div`
  order: 1;
  padding: 5px;
  text-align: center;
  color: #1abc9c;
  font-size: 35px;

`
const BoardSquares = styled.div`
  order: 2;
  padding: 5px 50px 5px 50px;

`
const Reset = styled.button`
  order: 5;
  padding: 8px;
  text-align: center;
  color: #1abc9c;
  font-size: 30px;
`

const Winner = styled.div`
  order: 4;
  font-size: 60px;
  font-weight: bold;
`

const PlayerTurns = styled.div`
  order: 3;
  font-size: 25px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
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
  let [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  let [nextPlayer, setNextPlayer] = useState<string | null>(null);
  let [tie, setTie] = useState<string | null>(null);

//console.log(squares)
  const handleClick = (i: number): void => {

    if (squares[i] !== null) {
      alert('this square has already been played')
      return;
    }



    console.log('i: ', i)
    squares[i] = xIsNext ? 'X' : 'O';

    setXIsNext(!xIsNext);

    xIsNext ? setCurrentPlayer('X is playing') : setCurrentPlayer('O is playing');
    xIsNext ? setNextPlayer('O is next') : setNextPlayer('X is next');

    let win = checkWin(squares);

    if (win) {
      setWinner(win);
      setCurrentPlayer('')
      setNextPlayer('')
      return;
    }

  }

  const resetBoard = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setCurrentPlayer('')
    setNextPlayer('')
  }

  return (
    <Container>
      <Header>
          TIC TAC TOE
      </Header>
      <BoardSquares>
        <br/>
        <Board
          squares={squares}
          onClick={i => handleClick(i)}
        />
      </BoardSquares>
      <PlayerTurns>
        {currentPlayer}
        <br/>
        {nextPlayer}
      </PlayerTurns>
      {tie ? 'tie' : '' }
      {winner &&
        <Winner>
          {winner} is winner!
        </Winner>
      }
      <Reset onClick={resetBoard}>
        RESET
      </Reset>



    </Container>
  );
}

export default App;
