import { useState, useEffect, useContext } from "react"

import Guess from "./Guess"


export default function Board(props) {

  const { length, currentGuess, attempt } = props


  // om attempt = 0 => generera rad 1-6
  // om attempt = 1 => generera rad 2-6...osv.
  /* function generateBoard() {
    let boardRows;

    if (attempt == 0) {
      boardRows = 6;
    } else if (attempt == 1) {
      boardRows = {
        ...boardRows, boardRows
      }
      boardRows = 5;
    } else if (attempt == 2) {
      boardRows = 4;
    } else if (attempt == 3) {
      boardRows = 3;
    } else if (attempt == 4) {
      boardRows = 2;
    } else {
      boardRows = 1;
    }

    for (...) {
      <Guess length={length} attempt={attempt} guessRow={0} currentGuess={currentGuess} />
    }

    return boardRows;
  }
 */
  //antal renderade guess-div ska vara (6 - attempt)

  //Board anropar Guess 6 gånger, detta sker varje gång som Board körs
  //Guess anropar Letter 5 gånger (eller så många gånger som ordet är långt), detta sker varje gång som Guess körs
  // Ovanstående innebär att Letter ska returnera ett värde till Guess, klart
  // 



  return (

    < div id={length} className="" >
      <div className="board flex flex-col items-center">
        <Guess length={length} attempt={attempt} guessRow={0} currentGuess={currentGuess} />
        <Guess length={length} attempt={attempt} guessRow={1} currentGuess={currentGuess} />
        <Guess length={length} attempt={attempt} guessRow={2} currentGuess={currentGuess} />
        <Guess length={length} attempt={attempt} guessRow={3} currentGuess={currentGuess} />
        <Guess length={length} attempt={attempt} guessRow={4} currentGuess={currentGuess} />
        <Guess length={length} attempt={attempt} guessRow={5} currentGuess={currentGuess} />




      </div>



    </div >
  )
}


