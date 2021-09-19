import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  border: 10px solid #1abc9c;
  padding: 20px;
  margin: 15px;
  color: black;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 5px 5px 5px 5px #000000;

`
interface SquareProps {
  value: 'X' | 'O' | null;
  onClick(): void;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {


  return (
    <React.Fragment>
      <Button onClick={props.onClick}>{props.value}</Button>
    </React.Fragment>
  )
}

export default Square;
