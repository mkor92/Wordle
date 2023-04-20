import { useState, useEffect, useContext } from "react"

import Guess from "./Guess"


export default function Board(props) {

  const { length } = props









  return (

    < div id={length} className="" >
      <div className="board flex flex-col items-center">

        <Guess length={length} />


        <Guess length={length} />


        <Guess length={length} />


        <Guess length={length} />


        <Guess length={length} />


        <Guess length={length} />


      </div>



    </div >
  )

}
