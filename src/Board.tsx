import React, { useState } from 'react';
import Square from './Square';

function Board() {


  return (
    <React.Fragment>
      <br/>
        <Square/>
        <Square/>
        <Square/>
      <br/>
      <br/>
        <Square/>
        <Square/>
        <Square/>
      <br/>
      <br/>
        <Square/>
        <Square/>
        <Square/>
      <br/>
    </React.Fragment>
  )

}

export default Board;
