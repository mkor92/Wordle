import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

function StartGame(props) {
  const { setStartTime, startTime, currWord, setCurrWord, correctWord } = useContext(AppContext)
  const [updateCurr, setUpdateCurr] = useState("")



  function onEnter(e) {
    if (e.target.value.length === correctWord.length && e.key === "Enter") {
      setCurrWord(e.target.value)
      if (e.key === "Enter") {
        setUpdateCurr(currWord)
        console.log(currWord)
        e.target.value = ""

      }
    } else return;
  }






  function countTime() {
    if (startTime.started === false) {
      setStartTime({ time: new Date(), started: true })

    }
    else {
      return;
    }
  }
  return (
    <div className='flex flex-col'>
      <label htmlFor="guessInput" className='text-center mt-5'>Gissa ord</label>
      <input type="text" id="guessInput" onKeyDown={onEnter} onKeyUp={countTime} className='bg-slate-400 mt-1 h-10 rounded text-center text-xl' />
    </div>
  )
}

export default StartGame