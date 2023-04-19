import React, { useContext, useState } from 'react'
import guessWord from "./Feedback"
import StartGame from './StartGame'
import Board from './Board'
import ErrorPopup from './ErrorPopup'
import { AppContext } from '../App'
function Guess(props) {
  const { correctWord, wordSet } = props;
  const { currWord } = useContext(AppContext)
  const [errorPopup, setErrorPopup] = useState(false)



  if (currWord.length === correctWord.length) {
    if (wordSet.has(currWord)) {
      console.log(guessWord(correctWord, currWord))
      //console.log(`"ordet finns" + ${currWord}`)
    }
  }
  return (
    <div>
      <StartGame />
      <ErrorPopup trigger={errorPopup} />
    </div>
  )
}

export default Guess