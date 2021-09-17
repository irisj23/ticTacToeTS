import React, { useState } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  border: 20px solid blue;
  padding: 55px;
  margin: 15px;
  color: black;
  font-size: 60px;
  font-weight: bold;
  box-shadow: 5px 5px 5px 5px #000000;

`
interface SquareProps {
  value: 'X' | 'O' | null;
  onClick(): void;
}

const Square: React.FC<SquareProps> = ({ value, onClick}) => {


  return (
    <React.Fragment>
      <Button onClick={onClick}>{value}</Button>
    </React.Fragment>
  )
}

export default Square;
