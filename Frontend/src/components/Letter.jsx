import React from 'react'
import guessWord from "./Feedback"

export default function Letter(props) {
  const { length, letter, currentGuess, attempt, guessRow, id } = props
  //console.log(guessRow)
  //console.log(attempt)




  if (currentGuess.length === length) {


    return (
      currentGuess.map((letter) => {
        //console.log(letter)
        if (letter.result === "Correct") {
          return (
            <div id={id} className={`h-7 w-7 sm:h-14 sm:w-14 bg-green-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
            </div>
          )
        } else if (letter.result === "Misplaced") {
          return (
            <div id={id} className={`h-7 w-7 sm:h-14 sm:w-14 bg-yellow-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
            </div>
          )
        } else if (letter.result === "Incorrect") {
          return (
            <div id={id} className={`h-7 w-7 sm:h-14 sm:w-14 bg-gray-500 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
            </div>
          )
        }

      })
    )
  } else {
    return (
      <div id={id} className={`h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded`}>
      </div>
    )
  }









}

