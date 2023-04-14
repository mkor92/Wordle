import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import guessWord from "./Feedback.jsx";

export default function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt, currWord2, setCurrWord2 } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  //console.log(letter)
  //setCurrWord("tjena")

  //console.log(guessWord(correctWord, "tjena")[0].result)


  /*useEffect(() => {
    if (letter !== "" && !mapLetter.result == "Correct" && !mapLetter.result == "Misplaced") {
      setWrongLetter((prev) => [...prev, letter])
    }
  }, [currAttempt.attempt]);*/
  console.log(guessWord("hejsan", "hejsan"))
  if (currAttempt.attempt > attemptVal) {
    const result = guessWord(correctWord, currWord2)

    //console.log(result)
    return (
      result.map((mapLetter) => {


        if (mapLetter.result == "Misplaced") {

          return (
            <div className="h-7 w-7 sm:h-14 sm:w-14 bg-yellow-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
              {letter}
            </div>

          );
        } else if (mapLetter.result == "Correct") {
          //console.log(letter)
          return (
            <div className="h-7 w-7 sm:h-14 sm:w-14 bg-green-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
              {letter}
            </div>
          );
        } else {
          //console.log("Incorrect")
          return (
            <div className="h-7 w-7 sm:h-14 sm:w-14 bg-gray-500 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
              {letter}

            </div>
          );
        }


      })

    )
  } else {
    return (
      <div className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
        {letter}
      </div>
    );
  }
  /*if (currAttempt.attempt > attemptVal) {


    if (result[i].result == "Misplaced") {
      //console.log("Misplaced")
      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-yellow-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}
        </div>

      );

    } else if (result[i].result == "Correct") {
      //console.log("Correct")
      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-green-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}
        </div>
      );
    } else {
      //console.log("Incorrect")
      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-gray-500 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}

        </div>
      );
    }



  }

  else {
    return (
      <div className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
        {letter}
      </div>
    );
  }





  /*useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setWrongLetter((prev) => [...prev, letter])
    }
  }, [currAttempt.attempt]);
  if (currAttempt.attempt > attemptVal) {
    if (correct) {
      correctLetters.push(letter)
      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-green-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}
        </div>
      );
    } else if (almost) {

      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-yellow-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}
        </div>
      );
    } else {
      return (
        <div className="h-7 w-7 sm:h-14 sm:w-14 bg-gray-500 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
          {letter}
        </div>
      );
    }
  } else {
    return (
      <div className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
        {letter}
      </div>
    );
  }
}*/
}
