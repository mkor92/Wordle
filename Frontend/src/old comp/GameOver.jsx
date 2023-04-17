import { useContext, useState } from "react"
import { AppContext } from "../App"
import mongoose from "mongoose";



function GameOver() {
  const { gameOver, currAttempt, correctWord, endTime, startTime, length, unique, status, setStatus } = useContext(AppContext)
  const duration = Math.round((endTime - startTime) / 1000);
  const [name, setName] = useState("")


  function getName(e) {
    setName(e.target.value)
  }

  function getStatus() {
    setStatus(true)
    handleSubmit()
  }

  async function handleSubmit() {

    const user = ({
      name: name,
      time: duration,
      guesses: currAttempt.attempt,
      wordLength: length,
      unique: unique,
    })
    fetch("/api/highscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  }
  if (status) {
    return (
      <div className="flex flex-col">
        <h1 className="text-lg mt-2 mb-2">Your result is now added to our highscore-list</h1>
        <a onClick={() => { window.location.reload(true) }} className="bg-slate-600 hover:bg-slate-500 cursor-pointer text-white p-2 rounded font-bold flex w-fit self-center">Restart game</a>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        {gameOver.guessedWord && (<h2 className="text-green-600 bg-slate-600 rounded animate-slide-bottom p-2 text-center absolute text-5xl font-bold -mt-40 flex self-center">CONGRATS!</h2>)}
        {gameOver.guessedWord ? <p className="text-green-600 font-bold">You guessed correctly</p> : "You failed"}



        {gameOver.guessedWord && (<p>Duration: {duration} seconds</p>)}
        <h1>Correct word: {correctWord}</h1>
        {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
        {gameOver.guessedWord && (<h3 className="mt-3 mb-2"> Send result to highscore? </h3>)}
        <form>
          {gameOver.guessedWord && (<input maxLength={25} onChange={getName} type="text" id="name" placeholder="Name..." className="text-lg text-center mb-5"></input>)}
          {gameOver.guessedWord && (<button type="submit" onClick={getStatus} className="bg-slate-600 hover:bg-slate-500 text-white p-1 rounded ml-2">SEND</button>)}
        </form>
        <a onClick={() => { window.location.reload(true) }} className="bg-slate-600  hover:bg-slate-500 cursor-pointer text-white mt-2 p-2 rounded font-bold flex w-fit self-center">Restart game</a>
      </div>
    )
  }
}

export default GameOver