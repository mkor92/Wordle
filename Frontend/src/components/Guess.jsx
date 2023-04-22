import React, { useContext, useState } from 'react'
import Letter from './Letter'



export default function Guess(props) {
  const { length, currentGuess, attempt, guessRow } = props





  const getBoardLength = () => {
    if (length == 5) {
      return (

        <div className="board flex  items-center">
          <Letter
            length={length}
            currentGuess={currentGuess}
            attempt={attempt}
            guessRow={guessRow}
            id={0} />
          <Letter
            length={length}
            currentGuess={currentGuess}
            attempt={attempt}
            guessRow={guessRow}
            id={1} />
          <Letter
            length={length}
            currentGuess={currentGuess}
            attempt={attempt}
            guessRow={guessRow}
            id={2} />
          <Letter
            length={length}
            currentGuess={currentGuess}
            attempt={attempt}
            guessRow={guessRow}
            id={3} />
          <Letter
            length={length}
            currentGuess={currentGuess}
            attempt={attempt}
            guessRow={guessRow}
            id={4} />

        </div>
      );
    } else if (length == 6) {
      return (
        <div className="board flex items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

        </div>
      );
    } else if (length == 7) {
      return (
        <div className="board flex items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

        </div>
      );
    } else if (length == 8) {
      return (
        <div className="board flex items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

        </div>
      );
    } else if (length == 9) {
      return (
        <div className="board flex items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

        </div>
      );
    } else if (length == 10) {
      return (
        <div className="board flex items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

        </div>
      );
    }
  }



  return (
    <div className="flex flex-row">
      {getBoardLength()}


    </div>
  )
}





