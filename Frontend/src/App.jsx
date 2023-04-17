import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";





function App() {







  return (
    <div className="App">

      <main className="flex flex-col justify-center items-center h-full mt-16">
        <div className=" bg-slate-300 rounded p-5 flex flex-col justify-center items-center max-w-full">
          <h1 className="text-4xl w-fit mb-5">Wordle</h1>



          <Board />


        </div>
      </main>
    </div>
  );
}

export default App;
