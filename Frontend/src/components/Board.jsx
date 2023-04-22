import { useState, useEffect, useContext } from "react"

import Guess from "./Guess"


export default function Board(props) {

  const { length, currentGuess, attempt } = props
  const [board, setBoard] = useState([])

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


