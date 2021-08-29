import React from 'react';

function Square() {

  const buttonClick = () => {
    console.log('clicked')
  }


  return (
    <React.Fragment>
      <button onClick={buttonClick}>X</button>
    </React.Fragment>
  )
}

export default Square;
