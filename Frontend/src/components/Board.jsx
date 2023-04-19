import { useState, useEffect, useContext } from "react"
import GenerateWordSet from "./Words"
import Guess from "./Guess"

import { AppContext } from "../App"
export default function Board(props) {
  const { correctWord, setCorrectWord, wordSet, setWordSet } = useContext(AppContext)

  const [length, setLength] = useState(5)
  const [unique, setUnique] = useState(false)


  //const [correctWord, setCorrectWord] = useState("")
  //const [wordSet, setWordSet] = useState(new Set())
  const handleOnChange = (e) => {
    setLength(e.target.value)
  }

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

      {getBoardLength()}
      <Guess
        wordSet={wordSet}
        correctWord={correctWord} />
    </div >
  )

}
