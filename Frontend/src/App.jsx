import { useState, useEffect } from "react";
import Board from "./components/Board";
import ErrorPopup from "./components/ErrorPopup";
import GenerateWordSet from "./components/Words"
import GameOver from "./components/GameOver";
import InputField from "./components/InputField";
import guessWord from "./components/Feedback"
import { boardDefault } from "./components/BoardDefault";


function App() {
  const [correctWord, setCorrectWord] = useState("")
  const [wordSet, setWordSet] = useState(new Set())
  const [length, setLength] = useState(5)
  const [unique, setUnique] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [error, setError] = useState(false)
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [endTime, setEndTime] = useState(null)
  const [startTime] = useState(new Date())

  const [guesses, setGuesses] = useState(boardDefault)
  let currWord = ""
  const fireGetWords = length + unique



  useEffect(() => {
    async function getWords() {
      let wordLength;
      if (length == 5) {
        wordLength = 5;

      } else if (length == 6) {
        wordLength = 6;

      }
      else if (length == 7) {
        wordLength = 7;
      }
      else if (length == 8) {
        wordLength = 8;
      }
      else if (length == 9) {
        wordLength = 9;
      }
      else if (length == 10) {
        wordLength = 10;
      }
      const payload = await GenerateWordSet(wordLength, unique)
      setLength(wordLength)
      setCorrectWord(payload.randomWord)

      setWordSet(payload.wordSet);

    }

    getWords()

  }, [fireGetWords])

  const handleUnique = () => {
    if (unique === false) {
      setUnique(true)
      setLength(length)
    } else {
      setUnique(false)
      setLength(length)
    }
  }

  function handleKeyboard(e) {
    if (e.key === "Enter") {
      if (e.target.value.length === correctWord.length) {
        currWord = e.target.value
        setError(false)
        if (attempt <= 5 && currWord === correctWord) {
          const newArray = [...guesses];
          newArray[attempt] = guessWord(correctWord, currWord)
          setGuesses(newArray)
          setAttempt(attempt + 1)
          setEndTime(new Date())
          setGameOver({ gameOver: true, guessedWord: true })
          e.target.value = ""
        } else if (attempt < 5 && wordSet.has(currWord)) {
          const newArray = [...guesses];
          newArray[attempt] = guessWord(correctWord, currWord)
          setGuesses(newArray)

          setAttempt(attempt + 1)
          e.target.value = ""

        } else if (!wordSet.has(currWord)) {
          setError(true)
        } else if (attempt === 5 && currWord != correctWord) {
          const newArray = [...guesses];
          newArray[attempt] = guessWord(correctWord, currWord)
          setGuesses(newArray)
          setGameOver({ gameOver: true, guessedWord: false })
        }
      } else if (e.target.value.length != correctWord.length && e.target.value.length > 2) {
        setError(true)
      }
    } else if (e.key === "Backspace") {
      setError(false)
    } else return;
  }





  const handleOnChange = (e) => {
    setLength(e.target.value)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)

    startTime;
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])





  return (
    <div className="App">

      <main className="flex flex-col justify-center items-center h-full mt-16">
        <div className=" bg-slate-300 rounded p-5 flex flex-col justify-center items-center max-w-full mb-14">
          <h1 className="text-4xl w-fit mb-5">Wordle</h1>
          <div>
            <label htmlFor="uniqueLetters" className="mr-4 text-lg">Only use words with unique letters</label>
            <input type="checkbox" onChange={handleUnique} id="uniqueLetters" className="h-5 w-5  rounded shadow bg-green-600" />
          </div>
          <div className="flex mt-2 mb-4">
            <p className="mr-4 text-lg">How many letters?</p>
            <select className="w-10 bg-gray-400 rounded text-center text-base shadow" value={length} onChange={handleOnChange}>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <Board
            length={length}
            currentGuess={guesses}
            attempt={attempt}
          />

          <ErrorPopup trigger={error} length={length} />
          {gameOver.gameOver ?
            <GameOver
              endTime={endTime}
              startTime={startTime}
              guesses={attempt}
              length={length}
              unique={unique}
              correctWord={correctWord}
              gameOver={gameOver}
            /> :
            <InputField keyboard={handleKeyboard} startTime={handleKeyboard} />}


        </div>
      </main>
    </div>
  );
}

export default App;
