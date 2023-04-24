import { useState, useEffect, useContext } from "react"

import Guess from "./Guess"


export default function Board(props) {

  const { length, currentGuess, attempt } = props
  const [board, setBoard] = useState([])
  //console.log(currentGuess)

  //console.log(dummyArray)


  return (
    currentGuess.map((guess) => {

      return (
        <Guess currentGuess={guess} length={length} />
      )
    })

  )


}


