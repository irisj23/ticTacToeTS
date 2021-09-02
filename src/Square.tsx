import React, { useState } from 'react';

function Square() {

  let [clickValue, setClickValue] = useState('X');


  const buttonClick = () => {
    console.log('clicked')
    clickValue === 'O' ? setClickValue('X') : setClickValue('O');

    console.log(clickValue)
  }


  return (
    <React.Fragment>
      <button onClick={buttonClick}>{clickValue}</button>
    </React.Fragment>
  )
}

export default Square;
