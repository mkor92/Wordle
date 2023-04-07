import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt, wrongLetters, setWrongLetter } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  let correctLetters = [];

  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter) && !correctLetters.includes(letter)

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setWrongLetter((prev) => [...prev, letter])
    }
  }, [currAttempt.attempt]);
  if (currAttempt.attempt > attemptVal) {
    if (correct) {
      correctLetters.push(letter)
      return (
        <div className="h-20 w-20 bg-green-600 m-1 flex flex-col justify-center items-center text-5xl rounded">
          {letter}
        </div>
      );
    } else if (almost) {

      return (
        <div className="h-20 w-20 bg-yellow-600 m-1 flex flex-col justify-center items-center text-5xl rounded">
          {letter}
        </div>
      );
    } else {
      return (
        <div className="h-20 w-20 bg-gray-500 m-1 flex flex-col justify-center items-center text-5xl rounded">
          {letter}
        </div>
      );
    }
  } else {
    return (
      <div className="h-20 w-20 bg-slate-600 m-1 flex flex-col justify-center items-center text-5xl rounded">
        {letter}
      </div>
    );
  }
}
