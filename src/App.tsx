import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';
//import { JsxElement } from 'typescript';

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

const PlayerTurns = styled.div`
  order: 3;
  font-size: 25px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
`

const DetectTie = styled.div`
  order: 4;
  font-size: 60px;
  font-weight: bold;
`

const Winner = styled.div`
  order: 5;
  font-size: 60px;
  font-weight: bold;
`

const Reset = styled.button`
  order: 6;
  padding: 8px;
  text-align: center;
  color: #1abc9c;
  font-size: 30px;
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

const App: React.FC = (props: {}) => {

  let [winner, setWinner] = useState<string | null>(null);
  let [xIsNext, setXIsNext] = useState<boolean>(true);
  let [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  //let [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  let [nextPlayer, setNextPlayer] = useState<string | null>(null);
  let [tie, setTie] = useState<string | null>(null);
  let [compMove, setCompMove] = useState<boolean>(false);
  let [availableSquares, setAvailableSquares] = useState<number[]>(Array(9));


  const resetPlayers = (): void => {
    //setCurrentPlayer('')
    setNextPlayer('')
  }

  const handleClick = (i: number): void => {

    //console.log('sqaures1: ', squares)
    if (winner) return;

    if (squares[i] !== null) {
      alert('this square has already been played')
      return;
    }

    let xPlayerTurn = true;

    squares[i] = xIsNext ? 'X' : 'O';
    let updatedSquares = [...squares, squares[i]];

    setSquares(updatedSquares)

    xPlayerTurn = false;

    xPlayerTurn ? setNextPlayer('O is next') : setNextPlayer('X is next');

    let win = checkWin(squares);

    if (win) {
      setWinner(win);
      resetPlayers();
      return;
    }
    if (squares.indexOf(null) === -1) {
      setTie('tie')
      resetPlayers();
    }

    let randomSquare = computerMove(updatedSquares);

    xPlayerTurn ? squares[randomSquare] = 'X' : squares[randomSquare] = 'O';

   setSquares([...squares, squares[randomSquare]]);

   let winCheck = checkWin([...squares, squares[randomSquare]]);
   if (winCheck) {
    setWinner(winCheck);
    resetPlayers();
    return;
  }

   setXIsNext(true);
  }

  const computerMove = (allSquares: SquareValue[]) => {
    //if (compMove)

    //filter the available square
    //pick a random available square and set square to 0

    // let updatedAvailSquares: number[] = squares.filter((square, index) => {
    //   return index !== i;
    // })

    // setAvailableSquares(updatedAvailSquares)

    let available: number[] = [];
    allSquares.forEach((square, i) => {
      if (square === null) {
        available.push(i)
      }
    })

    //return available;

    let randomSquare = available[Math.floor(Math.random() * available.length)];

    console.log(randomSquare)
    return randomSquare;
   // console.log('random: ', randomSquare)
    //setSquares(randomSquare);

  }

  const resetBoard = (): void => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    resetPlayers();
    setTie('')
    setXIsNext(true);
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

        <br/>
        {nextPlayer}
      </PlayerTurns>

      {tie &&
        <DetectTie>
          We have a tie!
        </DetectTie>
      }
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
