import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import { boardDefault } from "./components/BoardDefault";
import GenerateWordSet from "./components/Words"
import KeyBoard from "./components/KeyBoard";
import GameOver from "./components/GameOver";
import WordLength from "./components/WordLength";



export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [wordSet, setWordSet] = useState(new Set());
  const [wrongLetters, setWrongLetter] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [correctWord, setCorrectWord] = useState("")
  const [length, setLength] = useState(5);
  console.log(length)

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
      const payload = await GenerateWordSet(wordLength)
      setLength(wordLength)
      setCorrectWord(payload.randomWord)
      console.log(payload.randomWord)
      setWordSet(payload.wordSet);

    }

    getWords()

  }, [(length)])


  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos == length) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })

  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })

  }

  const onEnter = () => {
    if (currAttempt.letterPos !== length) return;

    let currWord = "";
    for (let i = 0; i < length; i++) {
      currWord += board[currAttempt.attempt][i];

    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    } else {
      alert("Word not found")
    }
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true })
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
    }

  }
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col justify-center items-center h-full mt-16">
        <div className=" bg-slate-300 rounded p-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl w-fit mb-5">Wordle</h1>

          <AppContext.Provider
            value={{
              length,
              setLength,
              board,
              setBoard,
              currAttempt,
              setCurrAttempt,
              onSelectLetter,
              onDelete,
              onEnter,
              correctWord,
              wrongLetters,
              setWrongLetter,
              gameOver,
              setGameOver

            }}>
            <WordLength />
            <Board />
            {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
          </AppContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
