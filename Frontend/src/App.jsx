import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import ErrorPopup from "./components/ErrorPopup";
import GenerateWordSet from "./components/Words"
import guessWord from "./components/Feedback"



function App() {
  const [startTime, setStartTime] = useState({ time: new Date(), started: false });
  const [correctWord, setCorrectWord] = useState("")
  const [wordSet, setWordSet] = useState(new Set())
  const [length, setLength] = useState(5)
  const [unique, setUnique] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [error, setError] = useState(false)
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
    if (e.key === "Enter" && e.target.value.length === correctWord.length) {
      if (e.target.value.length === correctWord.length && e.key === "Enter") {
        currWord = e.target.value
        if (attempt <= 5 && currWord === correctWord) {
          console.log("congrats")
          e.target.value = ""
        } else if (attempt < 5 && wordSet.has(currWord)) {
          console.log(guessWord(correctWord, currWord))
          setAttempt(attempt + 1)
          e.target.value = ""
          console.log(attempt)
        } else if (!wordSet.has(currWord)) {
          setError(true)
          if (e.key === "Backspace") {
            setError(false)
          }
        }



      } else return;
    }

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



  function countTime() {
    if (startTime.started === false) {
      setStartTime({ time: new Date(), started: true })

    }
    else {
      return;
    }
  }





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
            currWordResult={currWord}
            attempt={attempt}
          />
          <ErrorPopup trigger={error} length={length} />
          <div className='flex flex-col'>
            <label htmlFor="guessInput" className='text-center mt-5'>Gissa ord</label>
            <input type="text" id="guessInput" onKeyDown={handleKeyboard} onKeyUp={countTime} className='bg-slate-400 mt-1 h-10 rounded text-center text-xl' />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
//<ErrorPopup trigger={errorPopup} />