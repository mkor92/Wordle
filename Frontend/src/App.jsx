import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import Guess from "./components/Guess";


export const AppContext = createContext();

function App() {
  const [startTime, setStartTime] = useState({ time: new Date(), started: false });
  const [correctWord, setCorrectWord] = useState("")
  const [currWord, setCurrWord] = useState("")
  const [wordSet, setWordSet] = useState(new Set())





  return (
    <div className="App">

      <main className="flex flex-col justify-center items-center h-full mt-16">
        <div className=" bg-slate-300 rounded p-5 flex flex-col justify-center items-center max-w-full">
          <h1 className="text-4xl w-fit mb-5">Wordle</h1>

          <AppContext.Provider
            value={{
              startTime,
              setStartTime,
              correctWord,
              setCorrectWord,
              currWord,
              setCurrWord,
              wordSet,
              setWordSet
            }}>

            <Board />

          </AppContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
