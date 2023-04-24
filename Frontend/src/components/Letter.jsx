import React, { useEffect, useState } from 'react'


export default function Letter(props) {
  const { length, currentGuess, letterPos } = props

  //console.log(currentGuess)
  let letter = null


  function setColor() {
    let color = "";
    if (currentGuess.length === length) {
      if (currentGuess[letterPos].result === "Correct") {
        letter = currentGuess[letterPos].letter
        color = "bg-green-600";
      } else if (currentGuess[letterPos].result === "Misplaced") {
        letter = currentGuess[letterPos].letter
        color = "bg-yellow-600";
      } else if (currentGuess[letterPos].result === "Incorrect") {
        color = "bg-gray-500";
        letter = currentGuess[letterPos].letter
      } else {
        color = "bg-slate-600"
      }
    } else {
      color = "bg-slate-600"
    }

    return color;
  }






  return (
    <div className={`h-7 w-7 sm:h-14 sm:w-14 ${setColor()} m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}> {letter}
    </div>
  )

}






