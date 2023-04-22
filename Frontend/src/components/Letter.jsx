import React from 'react'
import guessWord from "./Feedback"

export default function Letter(props) {
  const { length, letter, currentGuess, attempt, guessRow, letterPos } = props

  function setColor() {
    let color = "";
    if (currentGuess.length === length) {
      if (currentGuess[letterPos].result === "Correct") {
        color = "bg-green-600";
      } else if (currentGuess[letterPos].result === "Misplaced") {
        color = "bg-yellow-600";
      } else {
        color = "bg-gray-500";
      }
    } else {
      color = "bg-slate-600"
    }

    return color;
  }


  return (

    <div className={`h-7 w-7 sm:h-14 sm:w-14 ${setColor()} m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
    </div>)
} /* else if (guessRow === 1) {
    rowArray = [...guessRow + guessRow]
    return (
      <div className={`h-7 w-7 sm:h-14 sm:w-14 ${setColor()} m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
      </div>
    )


  } */



/*

function setColor() {
  let color = "";

  if (currentGuess[letterPos].result === "Correct") {
    color = "bg-green-600";
  } else if (currentGuess[letterPos].result === "Misplaced") {
    color = "bg-yellow-600";
  } else {
    color = "bg-red-400";
  }

  return color;
}

*/













/*  /* if (currentGuess.length === length) {
 
 
 
 
    for (let i = 0; i < currentGuess.length; i++) {
      if (currentGuess[i].result === "Correct") {
 
        return (
          <div id={letterPos} className={`h-7 w-7 sm:h-14 sm:w-14 bg-green-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
          </div>
        )
      } else if (currentGuess[i].result === "Misplaced") {
        return (
          <div id={letterPos} className={`h-7 w-7 sm:h-14 sm:w-14 bg-yellow-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
          </div>
        )
      } else if (currentGuess[i].result === "Incorrect") {
        return (
          <div id={letterPos} className={`h-7 w-7 sm:h-14 sm:w-14 bg-gray-500 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
          </div>
        )
      }
    }
 
 
 
 
 
  } else { */










