import React, { useState } from 'react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick(): void;
}

const Square: React.FC<SquareProps> = ({ value, onClick}) => {


  return (
    <React.Fragment>
      <button onClick={onClick}>{value}</button>
    </React.Fragment>
  )
}

export default Square;
