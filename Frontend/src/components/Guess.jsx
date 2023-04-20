import React, { useContext, useState } from 'react'
import Letter from './Letter'



export default function Guess(props) {
  const { length } = props


  const getBoardLength = () => {
    if (length == 5) {
      return (
        <div className="board flex  items-center">
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />
          <Letter length={length} />

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





/*function setColor() {
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
}*/