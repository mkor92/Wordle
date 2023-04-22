import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import ErrorPopup from "./components/ErrorPopup";
import GenerateWordSet from "./components/Words"
import GameOver from "./components/GameOver";
import InputField from "./components/InputField";
import guessWord from "./components/Feedback"



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
  const [currWord, setCurrWord] = useState("")
  const [currentGuess, setCurrentGuess] = useState([])
  let updateCurr = ""
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
      if (e.target.value.length === correctWord.length && e.key === "Enter") {
        updateCurr = e.target.value
        setCurrWord(e.target.value)
        console.log(updateCurr)
        setCurrentGuess(guessWord(correctWord, updateCurr))

        if (attempt <= 5 && updateCurr === correctWord) {

          setAttempt(attempt + 1)
          setEndTime(new Date())
          setGameOver({ gameOver: true, guessedWord: true })
          e.target.value = ""
        } else if (attempt < 5 && wordSet.has(updateCurr)) {

          setAttempt(attempt + 1)
          e.target.value = ""
          console.log(attempt)
        } else if (!wordSet.has(updateCurr)) {
          setError(true)
        } else if (attempt === 5 && updateCurr != correctWord) {
          setGameOver({ gameOver: true, guessedWord: false })
        }
      } else return;
    } else if (e.key === "Backspace") {
      setError(false)
    } else return;
  }


  /*if (currWord.length === correctWord.length) {
    if (wordSet.has(currWord)) {
      console.log(guessWord(correctWord, currWord))
      //console.log(`"ordet finns" + ${currWord}`)
    }
  }*/



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
        <div className=" bg-slate-300 rounded p-5 flex flex-col justify-center items-center max-w-full">
          <h1 className="text-4xl w-fit mb-5">Wordle</h1>
          <label htmlFor="uniqueLetters" className="mr-4 text-lg">Only use words with unique letters</label>
          <input type="checkbox" onChange={handleUnique} id="uniqueLetters" className="h-5 w-5  rounded shadow bg-green-600" />

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
            currentGuess={currentGuess}
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
//<ErrorPopup trigger={errorPopup} />