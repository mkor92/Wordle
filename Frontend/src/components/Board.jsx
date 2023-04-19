import { useState, useEffect, useContext } from "react"

import Guess from "./Guess"


export default function Board(props) {

  const { length } = props






  function createBoard(num) {
    return (
      Array.from({ length: num }, (_, i) => <div key={i} className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
      </div>)
    )
  }

  const createBoardLength = (num) => {
    return (
      <div className="flex flex-row">
        {createBoard(num)}
      </div>
    )
  }

  const getBoardLength = () => {
    if (length == 5) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(5)}
          {createBoardLength(5)}
          {createBoardLength(5)}
          {createBoardLength(5)}
          {createBoardLength(5)}
          {createBoardLength(5)}
        </div>
      );
    } else if (length == 6) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(6)}
          {createBoardLength(6)}
          {createBoardLength(6)}
          {createBoardLength(6)}
          {createBoardLength(6)}
          {createBoardLength(6)}
        </div>
      );
    } else if (length == 7) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(7)}
          {createBoardLength(7)}
          {createBoardLength(7)}
          {createBoardLength(7)}
          {createBoardLength(7)}
          {createBoardLength(7)}
        </div>
      );
    } else if (length == 8) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(8)}
          {createBoardLength(8)}
          {createBoardLength(8)}
          {createBoardLength(8)}
          {createBoardLength(8)}
          {createBoardLength(8)}
        </div>
      );
    } else if (length == 9) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(9)}
          {createBoardLength(9)}
          {createBoardLength(9)}
          {createBoardLength(9)}
          {createBoardLength(9)}
          {createBoardLength(9)}
        </div>
      );
    } else if (length == 10) {
      return (
        <div className="board flex flex-col items-center">
          {createBoardLength(10)}
          {createBoardLength(10)}
          {createBoardLength(10)}
          {createBoardLength(10)}
          {createBoardLength(10)}
          {createBoardLength(10)}
        </div>
      );
    }
  }
  return (

    < div id={length} className="" >



      {getBoardLength()}

    </div >
  )

}
