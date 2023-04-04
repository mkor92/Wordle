import { useContext } from "react"
import { AppContext } from "../App"


function GameOver() {
  const { gameOver, currAttempt, correctWord, endTime, startTime } = useContext(AppContext)
  const duration = Math.round((endTime - startTime) / 1000);

  return (
    <div><h3>
      {gameOver.guessedWord ? "You guessed correctly" : "You failed"}

    </h3>
      {gameOver.guessedWord && (<p>Duration: {duration} seconds</p>)}
      <h1>Correct word: {correctWord}</h1>
      {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver