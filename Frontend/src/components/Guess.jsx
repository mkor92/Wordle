import React, { useContext, useState } from 'react'
import guessWord from "./Feedback"



function Guess(props) {
  const { correctWord, wordSet } = props;





  if (currWord.length === correctWord.length) {
    if (wordSet.has(currWord)) {
      console.log(guessWord(correctWord, currWord))
      //console.log(`"ordet finns" + ${currWord}`)
    }
  }
  function setColor() {
    let color = ""
    if (result === "Correct") {
      color = "bg-green-600"
    } else if (result === "Misplaced") {
      color = "bg-yellow-600"
    } else if (result === "Incorrect") {
      color = "bg-gray-500"
    } else {
      color = "bg-slate-600"
    }
    return color
  }
  return (
    <div>
      <StartGame />

    </div>
  )
}

export default Guess