import { useContext } from "react";
import { AppContext } from "../App";

export default function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.includes(letter)
  if (currAttempt.attempt > attemptVal) {
    if (correct) {
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
